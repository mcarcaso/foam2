//
//  SceneDelegate.swift
//  FOAM Demo App
//
//  Created by Michael Carcasole on 2019-11-03.
//

import UIKit
import SwiftUI

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

  var window: UIWindow?
  var dv: foam_cross_platform_ui_widget_DetailView? = nil;

  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {

    let theme = foam_cross_platform_ui_Theme
      .foam_cross_platform_ui_ThemeBuilder(foam_cross_platform_Context.GLOBAL())
      .build();
    var x = theme.getSubX();

    let navVc = UINavigationController();
    navVc.navigationBar.isTranslucent = false;
    let s = foam_cross_platform_ui_stack_Stack
      .foam_cross_platform_ui_stack_StackBuilder(x)
      .setNavController(navVc)
      .build();
    x = s.getSubX();

    let d = foam_dao_ArrayDAO.foam_dao_ArrayDAOBuilder(x)
      .setOf(demo_Person.CLS_())
      .build();
    for i in 0..<1000 {
      _ = d.put(demo_Person.demo_PersonBuilder(x)
        .setFirstName("Mike")
        .setLastName("Car" + String(i))
        .build());
    }
/*
    s.push(foam_cross_platform_ui_stack_DAOView
      .foam_cross_platform_ui_stack_DAOViewBuilder(x)
      .setData(d)
      .setCitationView(foam_cross_platform_ui_SimpleViewFactory
        .foam_cross_platform_ui_SimpleViewFactoryBuilder(x)
        .setViewArgs([
          "fromExpr": demo_Person.FIRST_NAME(),
          "subjectExpr": demo_Person.LAST_NAME(),
          "bodyExpr": demo_Person.FULL_NAME(),
        ])
        .build())
      .build())
*/

    s.push(foam_cross_platform_ui_stack_DetailView
      .foam_cross_platform_ui_stack_DetailViewBuilder(x)
      .setData(demo_Person.demo_PersonBuilder(x)
        .setFirstName("Mike")
        .setLastName("Car")
        .build())
      .build());

    // Use a UIHostingController as window root view controller.
    if let windowScene = scene as? UIWindowScene {
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = navVc;
        self.window = window
        window.makeKeyAndVisible()
    }

  }
}
