package demos.cross_platform.android;

import android.content.res.Configuration;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.os.Bundle;
import android.util.TypedValue;
import android.view.Menu;
import android.view.MenuItem;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import foam.cross_platform.ui.stack.Stack;
import foam.cross_platform.ui.widget.DetailView;

public class MainActivity extends AppCompatActivity {

    DetailView dv = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        boolean isDark = (getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES;
        int label = Color.parseColor(isDark ? "WHITE" : "BLACK");

        foam.cross_platform.ui.Theme theme = foam.cross_platform.ui.Theme
          .ThemeBuilder(foam.cross_platform.Context.GLOBAL())
          .setPrimary(Color.parseColor("#F27931"))
          .setOnPrimary(label)
          .setSecondary(Color.parseColor("#253080"))
          .setOnSecondary(Color.parseColor("WHITE"))

          .setBackground(Color.parseColor(isDark ? "#212121" : "#FAFAFA"))
          .setOnBackground(label)
          .setSurface(Color.parseColor(isDark ? "BLACK" : "WHITE"))
          .setOnSurface(label)

          .setError(getResources().getColor(R.color.colorError, getTheme()))
          .setCaption(R.style.TextCaption)
          .setSubtitle1(R.style.Subtitle1)
          .build();
        MainActivity self = this;
        foam.cross_platform.Context x = foam.cross_platform.Context.GLOBAL()
          .createSubContext(new java.util.HashMap() {{
              put("theme", theme);
              put("androidContext", self);
          }});

        Stack s = Stack.StackBuilder(x)
          .setContentId(R.id.main_content)
          .setFragmentManager(getSupportFragmentManager())
          .build();
        x = s.getSubX();

        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        toolbar.setBackgroundColor(theme.getPrimary());
        setSupportActionBar(toolbar);

        foam.dao.DAO d = foam.dao.ArrayDAO.ArrayDAOBuilder(x)
          .setOf(demo.Person.CLS_())
          .build();
        for ( int i = 0 ; i < 1000 ; i++ ) {
            d.put(demo.Person.PersonBuilder(x)
              .setFirstName("Mike")
              .setLastName("Car" + i)
              .build());
        }

        s.push(foam.cross_platform.ui.stack.DAOView.DAOViewBuilder(x)
          .setData(d)
          .setCitationView(foam.cross_platform.ui.SimpleViewFactory.SimpleViewFactoryBuilder(x)
            .setViewClass(foam.cross_platform.ui.widget.EmailCitationView.CLS_())
            .setViewArgs(new java.util.HashMap() {{
                put("fromExpr", demo.Person.FIRST_NAME());
                put("subjectExpr", demo.Person.LAST_NAME());
                put("bodyExpr", demo.Person.FULL_NAME());
            }})
            .build())
          .build());

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
