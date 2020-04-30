foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DefaultCitationView',
  implements: [
    'foam.cross_platform.ui.widget.CitationView'
  ],
  requires: [
    'foam.util.ArrayDetachable',
    'foam.cross_platform.ui.widget.Label',
  ],
  swiftImports: [
    'SwiftUI'
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
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'layout/default_citation_view.xml',
      androidCode: `
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:orientation="horizontal"
    android:gravity="center"
    android:layout_gravity="center"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

    <LinearLayout
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:orientation="vertical">

        <android.widget.TextView
            android:id="@+id/title"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:lines="1"
            android:textSize="18dp"
            android:textStyle="bold"
            tools:text="This is where the title goes" />

        <android.widget.TextView
            android:id="@+id/subtitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textSize="16dp"
            android:paddingTop="8dp"
            tools:text="This is where the subtitle goes" />
    </LinearLayout>

    <android.widget.TextView
        android:id="@+id/time"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        tools:text="Time 0:00" />
</LinearLayout>
      `.trim()
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
      androidType: 'android.view.View',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        int id = getAndroidContext().getResources().getIdentifier("default_citation_view", "layout", getAndroidContext().getPackageName());
        android.view.View v = android.view.LayoutInflater.from(getAndroidContext()).inflate(id, null);
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        return v;
      `,
      swiftFactory: `
        let v = UIStackView();
        v.axis = .horizontal
        v.setContentHuggingPriority(.defaultHigh, for: .vertical)
        v.alignment = .center

        let titleView = Label_create().setView(UILabel()).build();
        onDetach(titleView);
        onDetach(titleView.getData$().follow(getTitle$()));
        foam_cross_platform_ui_TextStyle
          .foam_cross_platform_ui_TextStyleBuilder(nil)
          .setBold(true)
          .setSize(18)
          .build()
          .applyTextStyle(titleView.getView()!);

        let space = UIView();
        space.heightAnchor.constraint(equalToConstant: 8).isActive = true;
        let spacerListener = AnonymousListener_create()
          .setFn({(sub: foam_core_Detachable?, args: [Any?]?) -> Void in
            let slot: foam_core_SlotInterface? = args?.last as? foam_core_SlotInterface
            space.isHidden = (slot?.slotGet() as? String)?.isEmpty ?? true;
          })
          .build();
        onDetach(getSubtitle$().slotSub(spacerListener))
        spacerListener.executeListener(nil, [getSubtitle$()])

        let subtitleView = Label_create().setView(UILabel()).build();
        onDetach(subtitleView);
        onDetach(subtitleView.getData$().follow(getSubtitle$()));
        (subtitleView.getView() as! UILabel).numberOfLines = 2
        foam_cross_platform_ui_TextStyle
          .foam_cross_platform_ui_TextStyleBuilder(nil)
          .setSize(16)
          .build()
          .applyTextStyle(subtitleView.getView()!);

        let timeView = Label_create().setView(UILabel()).build();
        onDetach(timeView);
        onDetach(timeView.getData$().follow(getTime$()));

        let mid = UIStackView()
        mid.axis = .vertical
        mid.alignment = .leading
        mid.distribution = .equalSpacing
        mid.addArrangedSubview(titleView.getView()!);
        mid.addArrangedSubview(space);
        mid.addArrangedSubview(subtitleView.getView()!);
        mid.setContentHuggingPriority(.defaultLow, for: .horizontal)
        v.addArrangedSubview(mid)

        timeView.getView()!.setContentHuggingPriority(.defaultHigh, for: .horizontal)
        v.addArrangedSubview(timeView.getView()!);

        return v;
      `
    }
  ],
  reactions: [
    ['', 'propertyChange.title', 'updateView', ['android']],
    ['', 'propertyChange.subtitle', 'updateView', ['android']],
    ['', 'propertyChange.time', 'updateView', ['android']],
  ],
  listeners: [
    {
      name: 'updateView',
      flags: ['android'],
      androidCode: `
        int titleId = getAndroidContext().getResources().getIdentifier("title", "id", getAndroidContext().getPackageName());
        ((android.widget.TextView) getView().findViewById(titleId)).setText(getTitle());
        int subtitleId = getAndroidContext().getResources().getIdentifier("subtitle", "id", getAndroidContext().getPackageName());
        android.widget.TextView subtitle = (android.widget.TextView) getView().findViewById(subtitleId);
        if ( getSubtitle().isEmpty() ) {
          subtitle.setVisibility(android.view.View.GONE);
        } else {
          subtitle.setVisibility(android.view.View.VISIBLE);
          subtitle.setText(getSubtitle());
        }
        int timeId = getAndroidContext().getResources().getIdentifier("time", "id", getAndroidContext().getPackageName());
        ((android.widget.TextView) getView().findViewById(timeId)).setText(getTime());
      `,
    }
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
          if ( p != null ) titleSlot = data.getSlot(p.getName());
        }
        if ( titleSlot != null ) subs.add(getTitle$().follow(titleSlot));

        foam.core.SlotInterface subtitleSlot = null;
        if ( props.size() > 0 ) {
          foam.core.Property p = props.get(0);
          props.remove(0);
          if ( p != null ) subtitleSlot = data.getSlot(p.getName());
        }
        if ( subtitleSlot != null ) subs.add(getSubtitle$().follow(subtitleSlot));

        foam.core.SlotInterface timeSlot = null;
        if ( props.size() > 0 ) {
          foam.core.Property p = props.get(0);
          props.remove(0);
          if ( p != null ) timeSlot = data.getSlot(p.getName());
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
    {
      name: 'getOf',
      androidCode: `
        return foam.cross_platform.FObjectClass.CLS_();
      `,
      swiftCode: `
        return foam_cross_platform_FObjectClass.CLS_();
      `
    }
  ],
});