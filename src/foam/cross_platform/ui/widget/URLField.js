foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'URLField',
  implements: [
    'foam.cross_platform.ui.AxiomView',
  ],
  swiftImports: [
    'UIKit',
    'SafariServices',
  ],
  requires: [
    'foam.cross_platform.ui.widget.ActionButton',
    'foam.cross_platform.ui.widget.TextField',
    {
      path: 'foam.cross_platform.ui.ios.VerticalLinearLayout',
      flags: ['swift']
    }
  ],
  imports: [
    {
      name: 'stack',
      type: 'foam.cross_platform.ui.stack.Stack',
    },
    {
      name: 'androidContext',
      key: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  properties: [
    {
      class: 'URLProperty',
      name: 'data'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.TextField',
      name: 'textField',
      androidFactory: `
        foam.cross_platform.ui.widget.TextField tf = TextField_create().build();
        onDetach(getData$().linkFrom(tf.getData$()));
        return tf;
      `,
      swiftFactory: `
        let tf = TextField_create().build();
        onDetach(getData$().linkFrom(tf.getData$()));
        return tf;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.ActionButton',
      name: 'actionButton',
      androidFactory: `
        foam.cross_platform.ui.widget.ActionButton ab = ActionButton_create().build();
        onDetach(ab.bindData(this, OPEN()));
        return ab;
      `,
      swiftFactory: `
        let ab = ActionButton_create().build();
        onDetach(ab.bindData(self, Self.OPEN()));
        return ab;
      `
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        v.setOrientation(android.widget.LinearLayout.VERTICAL);
        v.addView(getTextField().getView());
        v.addView(getActionButton().getView());
        return v;

      `,
      swiftFactory: `
        let v = foam_cross_platform_ui_ios_VerticalLinearLayout.View([
          getTextField()!.getView()!,
          getActionButton()!.getView()!
        ]);
        return v;
      `,
    }
  ],
  actions: [
    {
      name: 'open',
      isEnabledExpressionArgs: ['data'],
      androidIsEnabled: `
        return data != null && (data.startsWith("http://") || data.startsWith("https://"));
      `,
      swiftIsEnabled: `
        return data != nil && (data!.hasPrefix("http://") || data!.hasPrefix("https://"));
      `,
      androidCode: `
        android.content.Intent browserIntent = new android.content.Intent(
          android.content.Intent.ACTION_VIEW, android.net.Uri.parse(getData()));
        getAndroidContext().startActivity(browserIntent);
      `,
      swiftCode: `
        let url = Foundation.URL(string: getData()!)!
        let vc = SFSafariViewController(url: url)
        vc.modalPresentationStyle = .pageSheet
        getStack()?.getNavController().present(vc, animated: true, completion: nil)
      `
    }
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        return getTextField().bindData(data, axiom);
      `,
      swiftCode: `
        return getTextField()?.bindData(data, axiom);
      `,
    },
  ]
});