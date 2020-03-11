import UIKit
import SwiftUI

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
  var window: UIWindow?
  let a = demo_App.demo_AppBuilder(nil).build();
  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    // Use a UIHostingController as window root view controller.
    if let windowScene = scene as? UIWindowScene {
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = a.getApp().getStack()?.getNavController();
        a.startApp();
        self.window = window
        window.makeKeyAndVisible()
    }
  }
}
