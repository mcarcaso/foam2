import UIKit
import SwiftUI

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

  var window: UIWindow?
  var dv: foam_cross_platform_ui_widget_DetailView? = nil;

  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {

    let a = demo_App.DEFAULT_APP();
    let x = a.getSubX();

    let d = foam_dao_GUIDDAO
      .foam_dao_GUIDDAOBuilder(x)
      .setDelegate(foam_dao_ArrayDAO
        .foam_dao_ArrayDAOBuilder(x)
        .setOf(demo_Timer.CLS_())
        .build()
     )
     .build();

    _ = a.getIntentManager()!.launchIntent(foam_intent_DAOBrowseIntent
      .foam_intent_DAOBrowseIntentBuilder(x)
      .setDao(d)
      .build());

    // Use a UIHostingController as window root view controller.
    if let windowScene = scene as? UIWindowScene {
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = a.getStack()?.getNavController();
        self.window = window
        window.makeKeyAndVisible()
    }

  }
}
