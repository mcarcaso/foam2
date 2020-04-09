foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DefaultCitationView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  requires: [
    'foam.util.ArrayDetachable'
  ],
  swiftImports: [
    'UIKit',
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
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:orientation="vertical">

        <android.widget.TextView
            android:id="@+id/title"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Title" />

        <android.widget.TextView
            android:id="@+id/subtitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Subtitle" />
    </LinearLayout>

    <android.widget.TextView
        android:id="@+id/time"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Time" />
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
  @ObservedObject var o = DefaultCitationViewObservable()
  public var body: some View {
    HStack {
      Circle().frame(width: 88, height: 88)
      VStack(alignment: .leading) {
        Text(o.title)
        Text(o.subtitle)
      }.frame(minWidth: 0, maxWidth: .infinity, alignment: .leading)
      Text(o.time)
    }
  }
}

public class DefaultCitationViewObservable: ObservableObject {
  @Published var title = "Title"
  @Published var subtitle = "Sub"
  @Published var time = "Time"
}

struct SwiftUIView_Previews: PreviewProvider {
  static var previews: some View {
    DefaultCitationViewSwiftUI(o: DefaultCitationViewObservable())
  }
}
      `
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
        android.view.View v = android.view.LayoutInflater.from(getAndroidContext()).inflate(id, null);        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
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
        return UIHostingController(rootView: DefaultCitationViewSwiftUI(o: DefaultCitationViewObservable()));
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
        ((android.widget.TextView) getView().findViewById(subtitleId)).setText(getSubtitle());
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
