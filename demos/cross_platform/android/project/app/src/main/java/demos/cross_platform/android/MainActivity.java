package demos.cross_platform.android;

import android.content.res.Configuration;
import android.graphics.Color;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import foam.cross_platform.Application;
import foam.cross_platform.ui.TextStyle;
import foam.intent.DAOBrowseIntent;

public class MainActivity extends AppCompatActivity {

  Application a = demo.App.DEFAULT_APP();

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    a.setAndroidContext(this);
    a.getStack().setContentId(R.id.main_content);
    a.getStack().setFragmentManager(getSupportFragmentManager());

    setContentView(R.layout.activity_main);
    findViewById(R.id.main_content).setBackgroundColor(a.getTheme().getBackground());

    foam.cross_platform.Context x = a.getSubX();
    foam.dao.DAO d = foam.dao.GUIDDAO.GUIDDAOBuilder(x)
     .setDelegate(foam.dao.ArrayDAO.ArrayDAOBuilder(x)
        .setOf(demo.Timer.CLS_())
        .build()
     )
     .build();

    a.getIntentManager().launchIntent(DAOBrowseIntent.DAOBrowseIntentBuilder(x)
      .setDao(d)
      .build());
  }
  @Override
  public void onBackPressed() {
    super.onBackPressed();
    a.getStack().onBackPressed();
  }
}