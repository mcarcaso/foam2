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
      .setPrimary("#F27931")
      .setOnPrimary("#FFFFFF")
      .setSecondary("#253080")
      .setOnSecondary("#FFFFFF")
      .setBackground(UIColor.systemBackground)
      .setOnBackground(UIColor.label)
      .setSurface(UIColor.secondarySystemBackground)
      .setOnSurface(UIColor.label)
      .setSubtitle1(UIFont.systemFont(ofSize: 16))
      .setCaption(UIFont.systemFont(ofSize: 12))
      .build();
    var x = theme.getSubX();

    let navVc = UINavigationController(rootViewController: UIViewController());
    navVc.navigationBar.barTintColor = theme.getPrimary();
    navVc.navigationBar.tintColor = theme.getOnPrimary();
    navVc.navigationBar.isTranslucent = false;
    let s = foam_cross_platform_ui_stack_Stack
      .foam_cross_platform_ui_stack_StackBuilder(x)
      .setNavController(navVc)
      .build();
    x = s.getSubX();

    let d = foam_dao_ArrayDAO.foam_dao_ArrayDAOBuilder(x)
      .setOf(demo_Person.CLS_())
      .build();
    for i in 0..<10 {
      _ = d.put(demo_Person.demo_PersonBuilder(x)
        .setFirstName("Mike")
        .setLastName("Car" + String(i))
        .build());
    }

    s.push(foam_cross_platform_ui_stack_DAOView
      .foam_cross_platform_ui_stack_DAOViewBuilder(x)
      .setRowHeight(foam_cross_platform_ui_widget_EmailCitationView.HEIGHT())
      .setData(d)
      .setCitationView(foam_cross_platform_ui_SimpleViewFactory
        .foam_cross_platform_ui_SimpleViewFactoryBuilder(x)
        .setViewClass(foam_cross_platform_ui_widget_EmailCitationView.CLS_())
        .setViewArgs([
          "fromExpr": demo_Person.FIRST_NAME(),
          "subjectExpr": demo_Person.LAST_NAME(),
          "bodyExpr": demo_Person.FULL_NAME(),
          "timeExpr": demo_Person.IS_MALE()
        ])
        .build())
      .build())

    // Use a UIHostingController as window root view controller.
    if let windowScene = scene as? UIWindowScene {
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = navVc;
        self.window = window
        window.makeKeyAndVisible()
    }

  }
}
