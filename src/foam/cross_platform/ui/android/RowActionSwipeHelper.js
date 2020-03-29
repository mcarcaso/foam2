foam.CLASS({
  package: 'foam.cross_platform.ui.android',
  name: 'RowActionSwipeHelper',
  swiftImports: [
    'UIKit'
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.CodeSource',
      path: 'foam/cross_platform/ui/android/SwipeHelper.java',
      body: `
// TODO: Re-evaluate all of this. Was largely lifted from https://stackoverflow.com/questions/44965278/recyclerview-itemtouchhelper-buttons-on-swipe
package foam.cross_platform.ui.android;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Point;
import android.graphics.Rect;
import android.graphics.RectF;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;

import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.RecyclerView;

import java.util.LinkedList;
import java.util.Objects;
import java.util.Queue;

public class SwipeHelper extends ItemTouchHelper.SimpleCallback {

  public foam.cross_platform.ui.stack.dao.RowAction[] actions;
  private float hPad = 16;
  private RecyclerView recyclerView;
  private GestureDetector gestureDetector;
  private int swipedPos = -1;
  private float swipeThreshold = 0.5f;
  private Queue<Integer> recoverQueue;
  private UnderlayButton[] renderedButtons = null;

  public SwipeHelper(Context context, RecyclerView recyclerView, foam.cross_platform.ui.stack.dao.RowAction[] actions) {
    super(0, ItemTouchHelper.LEFT);
    this.actions = actions;
    this.recyclerView = recyclerView;
    GestureDetector.SimpleOnGestureListener gestureListener = new GestureDetector.SimpleOnGestureListener() {
      @Override
      public boolean onSingleTapConfirmed(MotionEvent e) {
        if (renderedButtons != null) {
          for (UnderlayButton button : renderedButtons) {
            if (button.onClick(e.getX(), e.getY()))
              return true;
          }
        }
        return false;
      }
    };
    this.gestureDetector = new GestureDetector(context, gestureListener);
    View.OnTouchListener onTouchListener = new View.OnTouchListener() {
      @Override
      public boolean onTouch(View view, MotionEvent e) {
        if (swipedPos < 0) return false;
        Point point = new Point((int) e.getRawX(), (int) e.getRawY());

        RecyclerView.ViewHolder swipedViewHolder = recyclerView.findViewHolderForAdapterPosition(swipedPos);
        View swipedItem = swipedViewHolder.itemView;
        Rect rect = new Rect();
        swipedItem.getGlobalVisibleRect(rect);

        if (e.getAction() == MotionEvent.ACTION_DOWN || e.getAction() == MotionEvent.ACTION_UP || e.getAction() == MotionEvent.ACTION_MOVE) {
          if (rect.top < point.y && rect.bottom > point.y) {
            gestureDetector.onTouchEvent(e);
          } else {
            recoverQueue.add(swipedPos);
            swipedPos = -1;
            recoverSwipedItem();
          }
        }
        return false;
      }
    };
    this.recyclerView.setOnTouchListener(onTouchListener);
    recoverQueue = new LinkedList<Integer>() {
      @Override
      public boolean add(Integer o) {
        if (contains(o))
          return false;
        else
          return super.add(o);
      }
    };
    attachSwipe();
  }

  @Override
  public boolean onMove(RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder, RecyclerView.ViewHolder target) {
    return false;
  }

  @Override
  public void onSwiped(RecyclerView.ViewHolder viewHolder, int direction) {
    int pos = viewHolder.getAdapterPosition();

    if (swipedPos != pos)
      recoverQueue.add(swipedPos);

    UnderlayButton[] actions = getActions(viewHolder);
    if ( actions.length == 0 ) {
      swipedPos = -1;
    } else {
      float w = 0;
      for ( UnderlayButton a : actions ) {
        w += a.getMinWidth() + 2 * hPad;
      }
      swipedPos = pos;
      swipeThreshold = 0.5f * w;
    }
    recoverSwipedItem();
  }

  UnderlayButton[] getActions(RecyclerView.ViewHolder viewHolder) {
    foam.cross_platform.ui.stack.DAOListView.ViewHolder vh = (foam.cross_platform.ui.stack.DAOListView.ViewHolder) viewHolder;
    if (vh.actions == null) {
      vh.actions = java.util.Arrays.stream(actions)
          .map(a -> a.actionForObj(vh.data))
          .filter(Objects::nonNull)
          .toArray(UnderlayButton[]::new);
    }
    return vh.actions;
  }

  @Override
  public float getSwipeThreshold(RecyclerView.ViewHolder viewHolder) {
    return swipeThreshold;
  }

  @Override
  public float getSwipeEscapeVelocity(float defaultValue) {
    return 0.1f * defaultValue;
  }

  @Override
  public float getSwipeVelocityThreshold(float defaultValue) {
    return 5.0f * defaultValue;
  }

  @Override
  public void onChildDraw(Canvas c, RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder, float dX, float dY, int actionState, boolean isCurrentlyActive) {
    int pos = viewHolder.getAdapterPosition();
    float translationX = dX;
    View itemView = viewHolder.itemView;

    if (pos < 0) {
      swipedPos = pos;
      return;
    }

    if (actionState == ItemTouchHelper.ACTION_STATE_SWIPE) {
      if (dX < 0) {
        UnderlayButton[] buffer = getActions(viewHolder);
        float w = 0;
        for ( UnderlayButton a : buffer ) {
          w += a.getMinWidth() + 2 * hPad;
        }
        translationX = dX * w / itemView.getWidth();
        drawButtons(c, itemView, buffer, pos, translationX);
      }
    }

    super.onChildDraw(c, recyclerView, viewHolder, translationX, dY, actionState, isCurrentlyActive);
  }

  private synchronized void recoverSwipedItem() {
    while (!recoverQueue.isEmpty()) {
      int pos = recoverQueue.poll();
      if (pos > -1) {
        recyclerView.getAdapter().notifyItemChanged(pos);
      }
    }
  }

  private void drawButtons(Canvas c, View itemView, UnderlayButton[] buffer, int pos, float dX) {
    float right = itemView.getRight();
    float dButtonWidth = (-1) * dX / buffer.length;

    for (UnderlayButton button : buffer) {
      float left = right - dButtonWidth;
      button.onDraw(
          c,
          new RectF(
              left,
              itemView.getTop(),
              right,
              itemView.getBottom()
          ),
          pos
      );

      right = left;
    }
    renderedButtons = buffer;
  }

  public void attachSwipe() {
    ItemTouchHelper itemTouchHelper = new ItemTouchHelper(this);
    itemTouchHelper.attachToRecyclerView(recyclerView);
  }

  public interface UnderlayButtonClickListener {
    void onClick();
  }

  public static class UnderlayButton {
    private String text;
    private int color;
    private android.content.Context context;
    private RectF clickRegion;
    private UnderlayButtonClickListener clickListener;

    public UnderlayButton(android.content.Context context, String text, int color, UnderlayButtonClickListener clickListener) {
      this.text = text;
      this.color = color;
      this.clickListener = clickListener;
      this.context = context;
    }

    public boolean onClick(float x, float y) {
      if (clickRegion != null && clickRegion.contains(x, y)) {
        clickListener.onClick();
        return true;
      }

      return false;
    }

    public float getMinWidth() {
      Paint p = new Paint();
      p.setTextSize(getTextSize());
      return p.measureText(text);
    }

    public float getTextSize() {
      return context.getResources().getDisplayMetrics().density * 16;
    }

    public void onDraw(Canvas c, RectF rect, int pos) {
      Paint p = new Paint();

      // Draw background
      p.setColor(color);
      c.drawRect(rect, p);

      // Draw Text
      p.setColor(Color.WHITE);

      p.setTextSize(getTextSize());

      Rect r = new Rect();
      float cHeight = rect.height();
      float cWidth = rect.width();
      p.setTextAlign(Paint.Align.LEFT);
      p.getTextBounds(text, 0, text.length(), r);
      float x = cWidth / 2f - r.width() / 2f - r.left;
      float y = cHeight / 2f + r.height() / 2f - r.bottom;
      c.drawText(text, rect.left + x, rect.top + y, p);

      clickRegion = rect;
    }
  }
}
      `
    }
  ],
});