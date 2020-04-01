foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DefaultCitationView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  requires: [
    'foam.util.ArrayDetachable',
    'foam.cross_platform.ui.widget.Label',
  ],
  swiftImports: [
    'UIKit'
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
    {
      name: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'title',
    },
    {
      class: 'StringProperty',
      name: 'subtitle',
    },
    {
      class: 'StringProperty',
      name: 'time',
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setOrientation(android.widget.LinearLayout.HORIZONTAL);
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        v.setBackgroundColor(getTheme().getSurface());

        foam.cross_platform.ui.widget.Label titleView = Label_create().build();
        onDetach(titleView);
        onDetach(titleView.getData$().follow(getTitle$()));

        foam.cross_platform.ui.widget.Label subtitleView = Label_create().build();
        onDetach(subtitleView);
        onDetach(subtitleView.getData$().follow(getSubtitle$()));

        foam.cross_platform.ui.widget.Label timeView = Label_create().build();
        onDetach(timeView);
        onDetach(timeView.getData$().follow(getTime$()));

        android.widget.LinearLayout mid = new android.widget.LinearLayout(getAndroidContext());
        mid.setOrientation(android.widget.LinearLayout.VERTICAL);
        mid.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1));
        mid.addView(titleView.getView());
        mid.addView(subtitleView.getView());
        v.addView(mid);

        timeView.getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        v.addView(timeView.getView());

        return v;
      `,
      swiftFactory: `
        let v = UIStackView();
        v.axis = .horizontal

        let titleView = Label_create().setView(UILabel()).build();
        onDetach(titleView);
        onDetach(titleView.getData$().follow(getTitle$()));

        let subtitleView = Label_create().setView(UILabel()).build();
        onDetach(subtitleView);
        onDetach(subtitleView.getData$().follow(getSubtitle$()));

        let timeView = Label_create().setView(UILabel()).build();
        onDetach(timeView);
        onDetach(timeView.getData$().follow(getTime$()));

        let mid = UIStackView()
        mid.axis = .vertical
        mid.addArrangedSubview(titleView.getView()!);
        mid.addArrangedSubview(subtitleView.getView()!);
        mid.setContentHuggingPriority(.defaultLow, for: .horizontal)
        v.addArrangedSubview(mid)
        v.distribution = .fill

        timeView.getView()!.setContentHuggingPriority(.defaultHigh, for: .horizontal)
        v.addArrangedSubview(timeView.getView()!);

        return v;
      `
    },
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        java.util.List subs = new java.util.ArrayList();

        java.util.List<foam.core.Property> props = null;
        Object[] configs = data.getCls_().getAxiomsByClass(foam.cross_platform.ui.widget.DefaultCitationViewExprs.CLS_());
        foam.cross_platform.ui.widget.DefaultCitationViewExprs config = configs.length > 0 ?
          (foam.cross_platform.ui.widget.DefaultCitationViewExprs) configs[0] : null;
        if ( config != null ) {
          props = new java.util.ArrayList<foam.core.Property>() {{
            add((foam.core.Property) data.getCls_().getAxiomByName(config.getTitle()));
            add((foam.core.Property) data.getCls_().getAxiomByName(config.getSubtitle()));
            add((foam.core.Property) data.getCls_().getAxiomByName(config.getTime()));
          }};
        } else {
          props = java.util.Arrays.stream(data.getCls_()
            .getAxiomsByClass(foam.core.Property.CLS_()))
            .map(foam.core.Property.class::cast)
            .filter(p -> !p.getHidden())
            .collect(java.util.stream.Collectors.toList());
        }

        foam.core.SlotInterface titleSlot = null;
        if ( props.size() > 0 ) {
          foam.core.Property p = props.get(0);
          props.remove(0);
          titleSlot = data.getSlot(p.getName());
        }
        if ( titleSlot != null ) subs.add(getTitle$().follow(titleSlot));

        foam.core.SlotInterface subtitleSlot = null;
        if ( props.size() > 0 ) {
          foam.core.Property p = props.get(0);
          props.remove(0);
          subtitleSlot = data.getSlot(p.getName());
        }
        if ( subtitleSlot != null ) subs.add(getSubtitle$().follow(subtitleSlot));

        foam.core.SlotInterface timeSlot = null;
        if ( props.size() > 0 ) {
          foam.core.Property p = props.get(0);
          props.remove(0);
          timeSlot = data.getSlot(p.getName());
        }
        if ( timeSlot != null ) subs.add(getTime$().follow(timeSlot));

        return ArrayDetachable_create()
          .setArray(subs)
          .build();
      `,
      swiftCode: `
        let data = data!
        var subs: [foam_core_Detachable?] = [];

        var props: [foam_core_Property?]! = nil;
        let configs = data.getCls_()!.getAxiomsByClass(foam_cross_platform_ui_widget_DefaultCitationViewExprs.CLS_())!
        let config = (configs.count > 0 ? configs[0] : nil) as? foam_cross_platform_ui_widget_DefaultCitationViewExprs
        if config != nil {
          props = [
            data.getCls_()?.getAxiomByName(config!.getTitle()) as? foam_core_Property,
            data.getCls_()?.getAxiomByName(config!.getSubtitle()) as? foam_core_Property,
            data.getCls_()?.getAxiomByName(config!.getTime()) as? foam_core_Property
          ];
        } else {
          props = data.getCls_()!
            .getAxiomsByClass(foam_core_Property.CLS_())!
            .map({ (a) -> foam_core_Property in return a as! foam_core_Property })
            .filter({ (p) -> Bool in return !p.getHidden() })
        }

        var titleSlot: foam_core_SlotInterface? = nil;
        if props.count > 0 {
          let p = props.first!;
          props.remove(at: 0);
          titleSlot = data.getSlot(p?.getName());
        }
        if titleSlot != nil { subs.append(getTitle$().follow(titleSlot)); }

        var subtitleSlot: foam_core_SlotInterface? = nil;
        if props.count > 0 {
          let p = props.first!;
          props.remove(at: 0);
          subtitleSlot = data.getSlot(p?.getName());
        }
        if subtitleSlot != nil { subs.append(getSubtitle$().follow(subtitleSlot)); }

        var timeSlot: foam_core_SlotInterface? = nil;
        if props.count > 0 {
          let p = props.first!;
          props.remove(at: 0);
          timeSlot = data.getSlot(p?.getName());
        }
        if timeSlot != nil { subs.append(getTime$().follow(timeSlot)); }

        return ArrayDetachable_create()
          .setArray(subs)
          .build();
      `,
    },
  ],
});
