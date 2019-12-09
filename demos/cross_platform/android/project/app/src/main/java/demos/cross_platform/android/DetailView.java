package demos.cross_platform.android;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.drawable.Drawable;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.util.LayoutDirection;
import android.view.View;
import android.widget.LinearLayout;

import java.util.Arrays;

import demo.Person;
import foam.core.Property;
import foam.cross_platform.FObject;


    public class DetailView extends LinearLayout {
        private foam.cross_platform.FObject data;
        private boolean isDrawn = false;

        public DetailView(Context context) {
            super(context);
            init(null, 0);
        }

        public DetailView(Context context, AttributeSet attrs) {
            super(context, attrs);
            init(attrs, 0);
        }

        public DetailView(Context context, AttributeSet attrs, int defStyle) {
            super(context, attrs, defStyle);
            init(attrs, defStyle);
        }

        private void init(AttributeSet attrs, int defStyle) {
            setWillNotDraw(false);
            setData(Person.PersonBuilder(null)
                    .setFirstName("Mike")
                    .setLastName("Car")
                    .build());
        }

        @Override
        protected void onDraw(Canvas canvas) {
            super.onDraw(canvas);
            if (isDrawn) return;
            isDrawn = true;
            updateViews();
        }

        public void setData(FObject data) {
            this.data = data;
            updateViews();
        }

        private void updateViews() {
            if (!isDrawn || data == null) return;
            removeAllViews();
            Object[] properties = (Object[]) data.getCls_().getAxiomsByClass(Property.CLS_());
            for (int i = 0; i < properties.length; i++) {
                inflate(getContext(), R.layout.detail_property_view, this);
                DetailPropertyView dpv = (DetailPropertyView) getChildAt(i);
//                dpv.setView(DefaultDetailPropertyView.DefaultDetailPropertyViewBuilder(null)
//                        .setData(DetailPropertyViewModel.DetailPropertyViewModelBuilder(null)
//                                .setProp(properties[i])
//                                .setData(data)
//                                .build())
//                        .build());
            }

        }
    }