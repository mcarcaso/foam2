package demos.cross_platform.android;

import android.content.res.Configuration;
import android.graphics.Color;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import foam.cross_platform.Application;
import foam.intent.DAOBrowseIntent;

public class MainActivity extends AppCompatActivity {

  Application a = Application.ApplicationBuilder(foam.cross_platform.Context.GLOBAL())
    .setAndroidContext(this)
    .build();

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    boolean isDark = (getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES;
    int label = Color.parseColor(isDark ? "WHITE" : "BLACK");

    // TODO json-ify this as best as possible.
    a.getTheme().setPrimary(Color.parseColor("#F27931"));
    a.getTheme().setOnPrimary(label);
    a.getTheme().setSecondary(Color.parseColor("#253080"));
    a.getTheme().setOnSecondary(Color.parseColor("WHITE"));
    a.getTheme().setBackground(Color.parseColor(isDark ? "#212121" : "#FAFAFA"));
    a.getTheme().setOnBackground(label);
    a.getTheme().setSurface(Color.parseColor(isDark ? "BLACK" : "WHITE"));
    a.getTheme().setOnSurface(label);
    a.getTheme().setError(Color.parseColor("#D50000"));
    a.getTheme().setCaption(R.style.TextCaption);
    a.getTheme().setSubtitle1(R.style.Subtitle1);

    Toolbar toolbar = findViewById(R.id.toolbar);
    toolbar.setBackgroundColor(a.getTheme().getPrimary());
    toolbar.setTitleTextColor(a.getTheme().getOnPrimary());
    toolbar.setTitle("");
    setSupportActionBar(toolbar);

    a.getStack().setContentId(R.id.main_content);
    a.getStack().setFragmentManager(getSupportFragmentManager());
    a.getStack().setToolbar(toolbar);

    foam.cross_platform.Context x = a.getSubX();
    foam.dao.DAO d = foam.dao.ArrayDAO.ArrayDAOBuilder(x)
      .setOf(demo.Person.CLS_())
      .build();
    for (int i = 0; i < 10; i++) {
      d.put(demo.Person.PersonBuilder(x)
        .setFirstName("Mike")
        .setLastName("Car" + i)
        .build());
    }

    a.getIntentManager().launchIntent(DAOBrowseIntent.DAOBrowseIntentBuilder(x)
      .setDao(d)
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
  public void onBackPressed() {
    super.onBackPressed();
    a.getStack().pop();
  }
}