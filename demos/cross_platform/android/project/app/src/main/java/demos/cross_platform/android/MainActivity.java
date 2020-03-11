package demos.cross_platform.android;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
  demo.App a = null;
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    foam.cross_platform.Context.setGlobalAndroidContext(this);
    a = demo.App.AppBuilder(null).build();

    a.getApp().getStack().setContentId(R.id.main_content);
    a.getApp().getStack().setFragmentManager(getSupportFragmentManager());

    setContentView(R.layout.activity_main);
    findViewById(R.id.main_content).setBackgroundColor(a.getApp().getTheme().getBackground());

    a.startApp();
  }
  public void onBackPressed() {
    super.onBackPressed();
    a.getApp().getStack().onBackPressed();
  }
}