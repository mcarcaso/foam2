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
  constants: [
    {
      type: 'Integer',
      name: 'height',
      value: 88
    },
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
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
      class: 'StringProperty',
      name: 'title',
      value: 'title'
    },
    {
      class: 'StringProperty',
      name: 'subtitle',
      value: 'subtitle'
    },
    {
      class: 'StringProperty',
      name: 'time',
      value: 'time'
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      swiftFactory: `
        let v = UIStackView();
        v.axis = .horizontal

        let titleView = Label_create().build();
        onDetach(titleView);
        onDetach(titleView.getData$().follow(getTitle$()));

        let subtitleView = Label_create().build();
        onDetach(subtitleView);
        onDetach(subtitleView.getData$().follow(getSubtitle$()));

        let timeView = Label_create().build();
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
      swiftCode: `
        let data = data!
        var subs: [foam_core_Detachable?] = [];

        var props = data.getCls_()!
          .getAxiomsByClass(foam_core_Property.CLS_())!
          .map({ (a) -> foam_core_Property in return a as! foam_core_Property })
          .filter({ (p) -> Bool in return !p.getHidden() })

        var titleSlot: foam_core_SlotInterface? = nil;
        if props.count > 0 {
          let p = props.first!;
          props.remove(at: 0);
          titleSlot = data.getSlot(p.getName());
        }
        if titleSlot != nil { subs.append(getTitle$().follow(titleSlot)); }

        var subtitleSlot: foam_core_SlotInterface? = nil;
        if props.count > 0 {
          let p = props.first!;
          props.remove(at: 0);
          subtitleSlot = data.getSlot(p.getName());
        }
        if subtitleSlot != nil { subs.append(getSubtitle$().follow(subtitleSlot)); }

        var timeSlot: foam_core_SlotInterface? = nil;
        if props.count > 0 {
          let p = props.first!;
          props.remove(at: 0);
          timeSlot = data.getSlot(p.getName());
        }
        if timeSlot != nil { subs.append(getTime$().follow(timeSlot)); }

        return ArrayDetachable_create()
          .setArray(subs)
          .build();
      `,
    },
  ],
});
