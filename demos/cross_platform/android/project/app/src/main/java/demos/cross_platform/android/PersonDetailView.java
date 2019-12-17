package demos.cross_platform.android;

import android.content.Context;
import android.view.View;
import android.widget.LinearLayout;

import foam.cross_platform.ui.widget.DetailView;

public class PersonDetailView extends LinearLayout {
    public PersonDetailView(android.content.Context context) {
        super(context);
        init();
    }
    public PersonDetailView(android.content.Context context, android.util.AttributeSet attrs) {
        super(context, attrs);
        init();
    }
    public PersonDetailView(android.content.Context context, android.util.AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init();
    }
    DetailView dv = null;
    private void init() {
        setOrientation(VERTICAL);
        dv = DetailView.DetailViewBuilder(null)
                .setView(this)
                .setData(demo.Person.PersonBuilder(null)
                        .setFirstName("Mike")
                        //.setLastName("Car")
                        .build())
                .build();
    }
}
