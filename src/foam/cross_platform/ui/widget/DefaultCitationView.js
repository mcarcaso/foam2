foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DefaultCitationView',
  implements: [
    'foam.cross_platform.ui.widget.CitationView'
  ],
  requires: [
    'foam.util.ArrayDetachable'
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
    android:layout_width="match_parent"
    android:padding="12dp"
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
    },
    {
      class: 'foam.cross_platform.code_generation.CodeSource',
      flags: ['swift'],
      path: 'DefaultCitationViewSwiftUI.swift',
      body: `
import SwiftUI

public struct DefaultCitationViewSwiftUI: View {
  let circleSize: CGFloat = 60
  @ObservedObject var o = DefaultCitationViewObservable()
  public var body: some View {
    HStack {
      if !o.initials.isEmpty {
        ZStack {
          Circle()
            .frame(width: circleSize, height: circleSize)
            .foregroundColor(Color(o.initialsBackgroundColor))
          Text(o.initials)
            .foregroundColor(Color(o.initialsTextColor))
        }
      } else if !o.imageUrl.isEmpty {
        Circle().frame(width: circleSize, height: circleSize)
      }
      VStack(alignment: .leading) {
        Text(o.title)
          .lineLimit(1)
          .font(.system(size: 18, weight: .bold, design: .default))
        if ( !o.subtitle.isEmpty ) {
          Text(o.subtitle)
            .lineLimit(2)
            .font(.system(size: 16, weight: .regular, design: .default))
            .padding(EdgeInsets(top: 8, leading: 0, bottom: 0, trailing: 0))
        }
      }.frame(minWidth: 0, maxWidth: .infinity, alignment: .leading)
      Text(o.time)
    }
    .background(Color.clear)
    .padding(12)
  }
}

public class DefaultCitationViewObservable: ObservableObject {
  @Published var title = ""
  @Published var subtitle = ""
  @Published var time = ""
  @Published var initials = ""
  @Published var initialsBackgroundColor = UIColor.label
  @Published var initialsTextColor = UIColor.systemBackground
  @Published var imageUrl = ""
  init() {}
}

struct SwiftUIView_Previews: PreviewProvider {
  static let noCircle: DefaultCitationViewObservable = {
    let o = DefaultCitationViewObservable();
    o.title = "This is a title";
    o.subtitle = "This is a subtitle!";
    o.time = "6:26"
    return o;
  }()
  static let withInitials: DefaultCitationViewObservable = {
    let o = DefaultCitationViewObservable();
    o.initials = "ACB"
    o.title = "This is a title";
    o.subtitle = "This is a subtitle!";
    o.time = "6:26"
    return o;
  }()
  static var previews: some View {
    Group {
      DefaultCitationViewSwiftUI(o: noCircle)
        .previewLayout(PreviewLayout.fixed(width: 400, height: 100))
      DefaultCitationViewSwiftUI(o: noCircle)
        .previewLayout(PreviewLayout.fixed(width: 400, height: 100))
        .colorScheme(.dark)
      DefaultCitationViewSwiftUI(o: withInitials)
        .previewLayout(PreviewLayout.fixed(width: 400, height: 100))
      DefaultCitationViewSwiftUI(o: withInitials)
        .previewLayout(PreviewLayout.fixed(width: 400, height: 100))
        .colorScheme(.dark)
    }
  }
}
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
        return getSwiftUiVc().view;
      `
    },
    {
      flags: ['swift'],
      swiftType: 'UIHostingController<DefaultCitationViewSwiftUI>',
      name: 'swiftUiVc',
      swiftFactory: `
        let vc = UIHostingController(rootView: DefaultCitationViewSwiftUI(o: DefaultCitationViewObservable()));
        vc.view.backgroundColor = UIColor.clear;
        return vc;
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
      isFramed: true,
      androidCode: `
        int titleId = getAndroidContext().getResources().getIdentifier("title", "id", getAndroidContext().getPackageName());
        ((android.widget.TextView) getView().findViewById(titleId)).setText(getTitle());
        int subtitleId = getAndroidContext().getResources().getIdentifier("subtitle", "id", getAndroidContext().getPackageName());
        android.widget.TextView subtitle = (android.widget.TextView) getView().findViewById(subtitleId);
        if ( getSubtitle().isEmpty() ) {
          subtitle.setVisibility(android.view.View.GONE);
        } else {
          subtitle.setText(getSubtitle());
        }
        int timeId = getAndroidContext().getResources().getIdentifier("time", "id", getAndroidContext().getPackageName());
        ((android.widget.TextView) getView().findViewById(timeId)).setText(getTime());
      `,
      swiftCode: `
        let v = getSwiftUiVc().rootView.o;
        v.title = getTitle()!;
        v.subtitle = getSubtitle()!;
        v.time = getTime()!;
      `
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