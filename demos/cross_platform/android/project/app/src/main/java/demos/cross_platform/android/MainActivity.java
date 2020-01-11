package demos.cross_platform.android;

import android.graphics.Color;
import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.view.View;
import android.view.Menu;
import android.view.MenuItem;

import demo.Person;
import foam.cross_platform.ui.widget.DetailView;

public class MainActivity extends AppCompatActivity {

    DetailView dv = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        foam.cross_platform.ui.Theme theme = foam.cross_platform.ui.Theme
                .ThemeBuilder(foam.cross_platform.Context.GLOBAL())
                .build();
        theme.setError(foam.cross_platform.ui.theme.Color.ColorBuilder(theme.getSubX())
            .setColor("RED")
            .build());
        foam.cross_platform.Context x = foam.cross_platform.Context.GLOBAL()
                .createSubContext(new java.util.HashMap() {{
                    put("theme", theme);
                }});

        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        dv = DetailView.DetailViewBuilder(x)
                .build();
        dv.setData(Person.PersonBuilder(dv.getSubX()).build());
        dv.setView(findViewById(R.id.detail_view));
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
