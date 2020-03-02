package demos.cross_platform.android;

import android.content.res.Configuration;
import android.graphics.Color;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import foam.cross_platform.Application;
import foam.cross_platform.ui.TextStyle;
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
    a.getTheme().setOnError(Color.parseColor("WHITE"));
    a.getTheme().setWidgetTextStyle(TextStyle.TextStyleBuilder(null)
      .setSize(18)
      .build());
    a.getTheme().setSubtitle1(TextStyle.TextStyleBuilder(null)
      .setSize(16)
      .setBold(true)
      .build());

    a.getStack().setContentId(R.id.main_content);
    a.getStack().setFragmentManager(getSupportFragmentManager());

    foam.cross_platform.Context x = a.getSubX();
    foam.dao.DAO d = foam.dao.GUIDDAO.GUIDDAOBuilder(x)
     .setDelegate(foam.dao.ArrayDAO.ArrayDAOBuilder(x)
        .setOf(demo.Timer.CLS_())
        .build()
     )
     .build();

    a.getIntentManager().launchIntent(DAOBrowseIntent.DAOBrowseIntentBuilder(x)
      .setDao(d)
      .setCitationView(foam.cross_platform.ui.SimpleViewFactory.SimpleViewFactoryBuilder(x)
        .setViewClass(foam.cross_platform.ui.widget.EmailCitationView.CLS_())
        .setViewArgs(new java.util.HashMap() {{
          put("fromExpr", demo.Timer.NAME());
          put("subjectExpr", demo.Timer.MS_PASSED());
        }})
        .build())
      .build());
  }
  @Override
  public void onBackPressed() {
    super.onBackPressed();
    a.getStack().onBackPressed();
  }
}