foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DAOView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  topics: [
    'onDAOUpdate'
  ],
  requires: [
    'foam.dao.ArraySink',
    'foam.dao.FnSink',
    'foam.intent.DAOReadIntent',
    'foam.intent.DAOCreateIntent',
    'foam.mlang.sink.Count',
  ],
  imports: [
    {
      name: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android'],
    },
    {
      name: 'intentManager',
      type: 'foam.intent.IntentManager',
    },
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dv_delete.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2V7H6v12zM19,4h-3.5l-1,-1h-5l-1,1H5v2h14V4z"/>
</vector>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dv_create.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
</vector>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'values/dao_view_styles.xml',
      androidCode: `
        <resources>
          <style name="DAOViewStyle" parent="android:Widget">
              <item name="android:scrollbars">vertical</item>
          </style>
        </resources>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        public static class Fragment extends foam.cross_platform.ui.stack.Stack.ToolbarFragment {
          DAOView o = null;
          public Fragment(
              DAOView o,
              foam.cross_platform.Context x) {
            super(x);
            this.o = o;
          }
          public android.view.View onCreateView(
                  android.view.LayoutInflater inflater,
                  android.view.ViewGroup container,
                  android.os.Bundle savedInstanceState) {
            int id = getResources().getIdentifier("DAOViewStyle", "style", getActivity().getPackageName());
            androidx.recyclerview.widget.RecyclerView rv = new androidx.recyclerview.widget.RecyclerView(new android.view.ContextThemeWrapper(getActivity(), id));
            Adapter adapter = new Adapter(o);
            rv.setAdapter(adapter);
            rv.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
                    android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                    android.widget.LinearLayout.LayoutParams.MATCH_PARENT));

            android.graphics.drawable.Drawable deleteIcon = getContext().getDrawable(getContext().getResources().getIdentifier(
                    "dv_delete",
                    "drawable",
                    getContext().getPackageName()));
            deleteIcon.setColorFilter(new android.graphics.PorterDuffColorFilter(
                    o.getTheme().getOnError(),
                    android.graphics.PorterDuff.Mode.SRC_IN));

            int backgroundColor = o.getTheme().getError();
            androidx.recyclerview.widget.ItemTouchHelper itemTouchHelper = new androidx.recyclerview.widget.ItemTouchHelper(
              new SwipeToDeleteCallback(
                      adapter,
                      deleteIcon,
                      new android.graphics.drawable.ColorDrawable(backgroundColor)));
            itemTouchHelper.attachToRecyclerView(rv);
            androidx.recyclerview.widget.LinearLayoutManager lm =
              new androidx.recyclerview.widget.LinearLayoutManager(getActivity());
            rv.setLayoutManager(lm);
            androidx.recyclerview.widget.DividerItemDecoration divider =
              new androidx.recyclerview.widget.DividerItemDecoration(rv.getContext(),
              lm.getOrientation());
            rv.addItemDecoration(divider);
            rv.setHasFixedSize(true);
            
            android.widget.LinearLayout v = (android.widget.LinearLayout) super.onCreateView(inflater, container, savedInstanceState);
            v.addView(rv);
            return v;
          }
        }
        public static class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
          foam.cross_platform.FObject fobj;
          public ViewHolder(foam.cross_platform.FObject fobj) {
            super((android.view.View) fobj.getProperty("view"));
            this.fobj = fobj;
          }
        }
        public static class Adapter extends androidx.recyclerview.widget.RecyclerView.Adapter<ViewHolder> {
          DAOView o = null;
          public Adapter(DAOView data) {
            o = data;
          }
          public ViewHolder onCreateViewHolder(android.view.ViewGroup parent, int viewType) {
            foam.cross_platform.ui.View fobj = o.getCitationView().createView(o.getSubX());
            android.view.View v = fobj.getView();
            v.setOnClickListener(view -> {
              foam.cross_platform.FObject data = (foam.cross_platform.FObject) ((foam.cross_platform.FObject) fobj).getProperty("data");
              o.getIntentManager().launchIntent(o.DAOReadIntent_create()
                .setDao(o.getData())
                .setId(data.getProperty("id"))
                .build());
            });
            return new ViewHolder((foam.cross_platform.FObject) fobj);
          }
          public void onBindViewHolder(ViewHolder holder, int position) {
            foam.dao.ArraySink a = o.ArraySink_create().build();
            o.getData().skip(position).limit(1).select(a);
            holder.fobj.setProperty("data", a.getArray().get(0));
          }
          public int getItemCount() {
            foam.mlang.sink.Count s = foam.mlang.sink.Count.CountBuilder(o.getSubX()).build();
            o.getData().select(s);
            return (int) s.getValue();
          }
          public void deleteItem(ViewHolder viewHolder) {
            foam.cross_platform.FObject fobj = (foam.cross_platform.FObject) viewHolder.fobj.getProperty("data");
            o.getData().remove(fobj);
            notifyItemRemoved(viewHolder.getAdapterPosition());
          }
        }
        public static class SwipeToDeleteCallback extends androidx.recyclerview.widget.ItemTouchHelper.SimpleCallback {
          private Adapter mAdapter;
          private android.graphics.drawable.Drawable icon;
          private final android.graphics.drawable.ColorDrawable background;
          public SwipeToDeleteCallback(
                  Adapter adapter,
                  android.graphics.drawable.Drawable icon,
                  android.graphics.drawable.ColorDrawable background) {
            super(0,
              androidx.recyclerview.widget.ItemTouchHelper.LEFT);
            mAdapter = adapter;
            this.icon = icon;
            this.background = background;
          }
          public boolean onMove(
              androidx.recyclerview.widget.RecyclerView recyclerView,
              androidx.recyclerview.widget.RecyclerView.ViewHolder viewHolder,
              androidx.recyclerview.widget.RecyclerView.ViewHolder target) {
            return false;
          }
          public void onSwiped(
              androidx.recyclerview.widget.RecyclerView.ViewHolder viewHolder,
              int direction) {
            mAdapter.deleteItem((ViewHolder) viewHolder);
          }
          public void onChildDraw(
                  android.graphics.Canvas c,
                  androidx.recyclerview.widget.RecyclerView recyclerView,
                  androidx.recyclerview.widget.RecyclerView.ViewHolder viewHolder,
                  float dX,
                  float dY,
                  int actionState,
                  boolean isCurrentlyActive) {
            super.onChildDraw(c, recyclerView, viewHolder, dX, dY, actionState, isCurrentlyActive);

            android.view.View v = viewHolder.itemView;
            int backgroundCornerOffset = 20;

            if ( dX < 0 ) {
              background.setBounds(
                      v.getRight() + ((int) dX) - backgroundCornerOffset,
                      v.getTop(),
                      v.getRight(),
                      v.getBottom());
            } else {
              background.setBounds(0, 0, 0, 0);
            }
            background.draw(c);

            int iconMargin = (v.getHeight() - icon.getIntrinsicHeight()) / 2;
            int iconTop = v.getTop() + (v.getHeight() - icon.getIntrinsicHeight()) / 2;
            int iconBottom = iconTop + icon.getIntrinsicHeight();
            if (dX < 0) { // Swiping to the left
              int iconLeft = Math.max(
                      v.getRight() + ((Number)dX).intValue(),
                      v.getRight() - iconMargin - icon.getIntrinsicWidth());
              int iconRight = iconLeft + icon.getIntrinsicWidth();
              icon.setBounds(iconLeft, iconTop, iconRight, iconBottom);
              icon.draw(c);
            }
          }
        }
      `,
      swiftCode: `
        class TableViewController: UITableViewController {
          var daoView: foam_cross_platform_ui_stack_DAOView;
          init(_ o: foam_cross_platform_ui_stack_DAOView, style: UITableView.Style) {
            daoView = o;
            super.init(style: style);
            tableView.rowHeight = CGFloat(o.getRowHeight());
            tableView.dataSource = o.getTableSource();
            tableView.delegate = o.getTableDelegate();
            tableView.reloadData();
            o.onDetach(o.onDAOUpdate().sub(nil, o.AnonymousListener_create()
              .setFn({ [weak self] (_: foam_core_Detachable?, args: [Any?]?) -> Void in
                self?.tableView.reloadData();
              })
              .build()));
          }
          required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
          override func viewWillAppear(_ animated: Bool) {
            tableView.reloadData();
          }
        }
        class RowView: UITableViewCell {
          var citationView: foam_cross_platform_ui_View
          init(citationView: foam_cross_platform_ui_View, style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
            self.citationView = citationView
            super.init(style: style, reuseIdentifier: reuseIdentifier)
            citationView.getView()!.frame = frame;
            separatorInset = UIEdgeInsets.zero;
            addSubview(citationView.getView()!)
          }
          override func layoutSubviews() {
            super.layoutSubviews();
            let size = citationView.getView()!.sizeThatFits(CGSize(width: frame.width, height: CGFloat.greatestFiniteMagnitude))
            citationView.getView()!.frame = CGRect(
              x: frame.minX,
              y: (frame.height - size.height) / 2,
              width: frame.width,
              height: size.height
            );
          }
          required init?(coder aDecoder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
        }

        public class TableViewDelegate: NSObject, UITableViewDelegate {
          var daoView: foam_cross_platform_ui_stack_DAOView;
          init(_ o: foam_cross_platform_ui_stack_DAOView) {
            daoView = o;
          }
          public func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
            let s = daoView.getStack();
            guard let row = tableView.cellForRow(at: indexPath) as? RowView else { return }
            let fobj = row.citationView as! foam_cross_platform_FObject
            s?.push(daoView.DetailView_create()
              .setData(fobj.getProperty("data"))
              .build());
          }
        }

        public class TableSource: NSObject, UITableViewDataSource {
          var daoView: foam_cross_platform_ui_stack_DAOView;
          init(_ o: foam_cross_platform_ui_stack_DAOView) {
            daoView = o;
          }
          var reusableId = "CellID";
          public func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
            let c = daoView.Count_create().build();
            _ = daoView.getData()!.select(c);
            return c.getValue();
          }

          public func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
            var cell = tableView.dequeueReusableCell(withIdentifier: reusableId) as? RowView;
            if cell == nil {
              let citationView = daoView.getCitationView()!.createView(daoView.getSubX())!;
              cell = RowView(citationView: citationView, style: .default, reuseIdentifier: reusableId);
            }
            let a = daoView.ArraySink_create().build();
            _ = daoView.getData()?.skip(indexPath.row)?.limit(1)?.select(a);
            (cell?.citationView as? foam_cross_platform_FObject)?.setProperty("data", a.getArray()[0])
            cell?.citationView.getView()?.setNeedsLayout()
            return cell!;
          }
        }
      `
    }
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.dao.DAO',
      name: 'data',
      swiftPostSet: `
        getListenSub_()?.detach();
        setListenSub_(newValue?.listen(FnSink_create().setFn(<%=fn(\`
          self!.onDAOUpdate_(nil, nil)
          return nil;
        \`)%>).build(), nil));
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.ViewFactory',
      name: 'citationView'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Detachable',
      name: 'listenSub_',
    },

    {
      class: 'IntProperty',
      name: 'rowHeight'
    },
    {
      swiftType: 'TableViewDelegate',
      flags: ['swift'],
      name: 'tableDelegate',
      swiftFactory: `return TableViewDelegate(self)`
    },
    {
      swiftType: 'TableSource',
      flags: ['swift'],
      name: 'tableSource',
      swiftFactory: `return TableSource(self)`
    },
    {
      class: 'StringProperty',
      name: 'title',
      expressionArgs: ['data'],
      androidExpression: `
        // TODO translations
        return "Browse " + data.getOf().getId();
      `
    }
  ],
  listeners: [
    {
      name: 'onDAOUpdate_',
      isFramed: true,
      swiftCode: `
        _ = onDAOUpdate().pub([]);
      `
    }
  ],
  methods: [
    {
      name: 'toStackableView',
      androidCode: `
        Fragment f = new Fragment(this, getSubX());
        f.getToolbar().setTitle("Browse " + getData().getOf().getId());
        f.getToolbar().setActionButtonFn((foam.cross_platform.GenericFunction) args -> {
          getIntentManager().launchIntent(DAOCreateIntent_create()
            .setDao(getData())
            .build());
          return null;
        });
        f.getToolbar().setActionButtonIcon(getAndroidContext().getResources().getIdentifier(
          "dv_create",
          "drawable",
          getAndroidContext().getPackageName()));
        return f;
      `,
      swiftCode: `
        return TableViewController(self, style: .plain);
      `
    }
  ]
});
