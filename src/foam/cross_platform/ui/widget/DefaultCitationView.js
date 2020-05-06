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
  constants: [
    {
      type: 'foam.cross_platform.ui.TextStyle',
      name: 'TITLE_STYLE',
      factory: function() {
        return foam.cross_platform.ui.TextStyle.create({
          bold: true,
          size: 18,
        })
      }
    },
    {
      type: 'foam.cross_platform.ui.TextStyle',
      name: 'SUBTITLE_STYLE',
      factory: function () {
        return foam.cross_platform.ui.TextStyle.create({
          size: 16,
        })
      }
    },
    {
      type: 'foam.cross_platform.ui.TextStyle',
      name: 'TIME_STYLE',
      factory: function () {
        return foam.cross_platform.ui.TextStyle.create({
          size: 16,
        })
      }
    },
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
    android:paddingTop="10dp"
    android:paddingLeft="4dp"
    android:paddingBottom="11dp"
    android:paddingRight="4dp"
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
            android:ellipsize="end"
            tools:text="This is where the title goes" />

        <android.widget.TextView
            android:id="@+id/subtitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:maxLines="2"
            android:minLines="0"
            android:layout_marginTop="8dp"
            android:ellipsize="end"
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

        int titleId = getAndroidContext().getResources().getIdentifier("title", "id", getAndroidContext().getPackageName());
        android.widget.TextView titleView = v.findViewById(titleId);
        titleView.setTextColor(getTheme().getOnSurface());
        TITLE_STYLE().applyTextStyle(titleView);

        int subtitleId = getAndroidContext().getResources().getIdentifier("subtitle", "id", getAndroidContext().getPackageName());
        android.widget.TextView subtitleView = v.findViewById(subtitleId);
        subtitleView.setTextColor(getTheme().getOnSurface());
        SUBTITLE_STYLE().applyTextStyle(subtitleView);

        int timeId = getAndroidContext().getResources().getIdentifier("time", "id", getAndroidContext().getPackageName());
        android.widget.TextView timeView = v.findViewById(timeId);
        timeView.setTextColor(getTheme().getOnSurface());
        TIME_STYLE().applyTextStyle(timeView);

        return v;
      `,
      swiftFactory: `
        let top: CGFloat = 8;
        let left: CGFloat = 5;
        let right: CGFloat = 5;
        let bottom: CGFloat = 8;
        let space: CGFloat = 8;

        let v = UIView();

        let leftView = UIView();
        leftView.translatesAutoresizingMaskIntoConstraints = false;
        v.addSubview(leftView);

        let titleView = UILabel();
        titleView.textColor = getTheme()?.getOnSurface();
        titleView.numberOfLines = 1;
        Self.TITLE_STYLE().applyTextStyle(titleView);
        titleView.translatesAutoresizingMaskIntoConstraints = false;
        leftView.addSubview(titleView);

        let subtitleView = UILabel();
        subtitleView.textColor = getTheme()?.getOnSurface();
        subtitleView.numberOfLines = 2;
        Self.SUBTITLE_STYLE().applyTextStyle(subtitleView);
        subtitleView.translatesAutoresizingMaskIntoConstraints = false;
        leftView.addSubview(subtitleView);

        let timeView = UILabel();
        timeView.textColor = getTheme()?.getOnSurface();
        timeView.numberOfLines = 1;
        Self.TIME_STYLE().applyTextStyle(subtitleView);
        timeView.translatesAutoresizingMaskIntoConstraints = false;
        v.addSubview(timeView);

        titleView.topAnchor.constraint(equalTo: leftView.topAnchor).isActive = true;
        titleView.leadingAnchor.constraint(equalTo: leftView.leadingAnchor).isActive = true;
        titleView.widthAnchor.constraint(equalTo: leftView.widthAnchor).isActive = true;

        subtitleView.topAnchor.constraint(equalTo: titleView.bottomAnchor, constant: space).isActive = true;
        subtitleView.leadingAnchor.constraint(equalTo: leftView.leadingAnchor).isActive = true;
        subtitleView.widthAnchor.constraint(equalTo: leftView.widthAnchor).isActive = true;
        subtitleView.bottomAnchor.constraint(equalTo: leftView.bottomAnchor).isActive = true;

        leftView.centerYAnchor.constraint(equalTo: v.centerYAnchor).isActive = true;
        leftView.topAnchor.constraint(greaterThanOrEqualTo: v.topAnchor, constant: top).isActive = true;
        leftView.leadingAnchor.constraint(equalTo: v.leadingAnchor, constant: left).isActive = true;
        leftView.trailingAnchor.constraint(lessThanOrEqualTo: timeView.leadingAnchor, constant: -space).isActive = true;
        leftView.bottomAnchor.constraint(lessThanOrEqualTo: v.bottomAnchor, constant: -bottom).isActive = true;

        timeView.centerYAnchor.constraint(equalTo: v.centerYAnchor).isActive = true;
        timeView.trailingAnchor.constraint(equalTo: v.trailingAnchor, constant: -right).isActive = true;

        return v;
      `
    }
  ],
  reactions: [
    ['', 'propertyChange.title', 'updateView'],
    ['', 'propertyChange.subtitle', 'updateView'],
    ['', 'propertyChange.time', 'updateView'],
  ],
  listeners: [
    {
      name: 'updateView',
      isMerged: true,
      mergeDelay: 0,
      androidCode: `
        int titleId = getAndroidContext().getResources().getIdentifier("title", "id", getAndroidContext().getPackageName());
        ((android.widget.TextView) getView().findViewById(titleId)).setText(getTitle());

        int subtitleId = getAndroidContext().getResources().getIdentifier("subtitle", "id", getAndroidContext().getPackageName());
        android.widget.TextView subtitle = (android.widget.TextView) getView().findViewById(subtitleId);
        subtitle.setText(getSubtitle());
        subtitle.setVisibility(getSubtitle().isEmpty() ?
          android.view.View.GONE : android.view.View.VISIBLE);

        int timeId = getAndroidContext().getResources().getIdentifier("time", "id", getAndroidContext().getPackageName());
        ((android.widget.TextView) getView().findViewById(timeId)).setText(getTime());
      `,
      swiftCode: `
        let titleView = getView()!.subviews[0].subviews[0] as! UILabel;
        titleView.text = getTitle();

        let subtitleView = getView()!.subviews[0].subviews[1] as! UILabel;
        subtitleView.text = getSubtitle();
        subtitleView.isHidden = getSubtitle()!.isEmpty;

        let timeView = getView()!.subviews[1] as! UILabel;
        timeView.text = getTime();
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