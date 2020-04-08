foam.CLASS({
  package: 'foam.u2.layout',
  name: 'GridLayout',
  implements: [
    'foam.cross_platform.ui.View',
  ],
  imports: [
    {
      name: 'displayWidth',
      type: 'foam.u2.layout.DisplayWidth',
    },
    {
      name: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  constants: [
    {
      type: 'Integer',
      name: 'COLS',
      value: 12
    }
  ],
  properties: [
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setOrientation(android.widget.LinearLayout.VERTICAL);
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        return v;
      `,
      swiftFactory: `
        let v = View();
        v.this = self;
        return v;
      `
    },
    {
      class: 'ListProperty',
      name: 'views_',
    },
    {
      class: 'ListProperty',
      name: 'gridColumns_',
    },
    {
      class: 'ListProperty',
      name: 'subs_',
    },
  ],
  reactions: [
    ['', 'propertyChange.view', 'updateView']
  ],
  methods: [
    {
      name: 'init',
      code: function() {},
      androidCode: `
        onDetach(getDisplayWidth$().slotSub(updateView_listener()));
      `,
      swiftCode: `
        onDetach(getDisplayWidth$()?.slotSub(updateView_listener()));
      `,
    },
    {
      name: 'addView',
      args: [
        { type: 'foam.cross_platform.ui.View', name: 'view' },
        { type: 'foam.u2.layout.GridColumns', name: 'gridColumns' },
      ],
      androidCode: `
        gridColumns = gridColumns != null ? gridColumns : foam.u2.layout.GridColumns.DEFAULT();
        getViews_().add(view);
        getGridColumns_().add(gridColumns);
        foam.core.SlotInterface isHiddenSlot = ((foam.cross_platform.FObject) view).getSlot("isHidden");
        if ( isHiddenSlot != null ) {
          getSubs_().add(isHiddenSlot.slotSub(updateView_listener()));
        }
        updateView(null, null);
      `,
      swiftCode: `
        let gridColumns = gridColumns ?? foam_u2_layout_GridColumns.DEFAULT();
        getViews_()?.add(view!);
        getGridColumns_()?.add(gridColumns);
        let isHiddenSlot = (view as! foam_cross_platform_FObject).getSlot("isHidden");
        if ( isHiddenSlot != nil ) {
          getSubs_()?.add(isHiddenSlot!.slotSub(updateView_listener())!);
        }
        updateView(nil, nil);

        let v = view!.getView()!;
        v.removeFromSuperview();
        getView()?.addSubview(v);
      `,
    },
    {
      name: 'removeAllViews',
      androidCode: `
        getViews_().clear();
        getGridColumns_().clear();
        for ( Object o : getSubs_() ) ((foam.core.Detachable) o).detach();
        updateView(null, null);
      `,
      swiftCode: `
        for fo in getViews_()! {
          let v = (fo as! foam_cross_platform_ui_View).getView();
          v?.removeFromSuperview();
        }

        getViews_()?.removeAllObjects();
        getGridColumns_()?.removeAllObjects();
        for o in getSubs_()! { (o as! foam_core_Detachable).detach(); }
        updateView(nil, nil);
      `
    },
    {
      swiftType: '[CGRect?]',
      swiftArgs: [
        { localName: 'w', type: 'CGFloat' }
      ],
      name: 'getFrames',
      swiftCode: `
        let views = getViews_()!;
        let gridColumns = getGridColumns_()!;
        var frames: [CGRect?] = [];

        var curViewIndex = 0;
        var curRowY: CGFloat = 0;
        repeat {
          var curRowCols = 0;
          var curRowX: CGFloat = 0;
          var curRowHeight: CGFloat = 0;
          while curViewIndex < views.count && curRowCols < Self.COLS() {
            let fo = views[curViewIndex] as! foam_cross_platform_FObject
            let isHidden = fo.getProperty("isHidden");
            if isHidden != nil && (isHidden as! Bool) {
              frames.append(nil);
              curViewIndex += 1;
              continue;
            }
            let v = fo.getProperty("view") as! UIView;
            let gridCols = gridColumns[curViewIndex] as! foam_u2_layout_GridColumns;
            let cols = gridCols.getProperty(getDisplayWidth()?.getName()?.lowercased()) as! Int
            if ( curRowCols + cols > Self.COLS() ) { break; }
            let vw = w * CGFloat(cols) / CGFloat(Self.COLS());
            let vh = v.sizeThatFits(CGSize(width: vw, height: .greatestFiniteMagnitude)).height;
            let frame = CGRect(x: curRowX, y: curRowY, width: vw, height: vh);
            frames.append(frame);
            curRowHeight = max(curRowHeight, vh);
            curRowX = frame.maxX;
            curViewIndex += 1;
            curRowCols += cols;
          }
          curRowY += curRowHeight;
        } while curViewIndex < views.count;
        return frames;
      `
    }
  ],
  listeners: [
    {
      name: 'updateView',
      isFramed: true,
      androidCode: `
        for ( int i = 0 ; i < getView().getChildCount() ; i++ ) {
          android.widget.LinearLayout v = (android.widget.LinearLayout) getView().getChildAt(i);
          v.removeAllViews();
        }
        getView().removeAllViews();

        int curViewIndex = 0;
        do {
          int curRowCols = 0;
          android.widget.LinearLayout curRow = new android.widget.LinearLayout(getAndroidContext());
          curRow.setOrientation(android.widget.LinearLayout.HORIZONTAL);
          curRow.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
              android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
              android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
          while ( curViewIndex < getViews_().size() && curRowCols < COLS() ) {
            foam.cross_platform.FObject fo = (foam.cross_platform.FObject) getViews_().get(curViewIndex);
            Object isHidden = fo.getProperty("isHidden");
            if ( isHidden != null && ((boolean) isHidden) ) {
              curViewIndex++;
              continue;
            }
            android.view.View v = (android.view.View) fo.getProperty("view");
            foam.u2.layout.GridColumns gridCols = (foam.u2.layout.GridColumns) getGridColumns_().get(curViewIndex);
            int cols = (int) gridCols.getProperty(getDisplayWidth().getName().toLowerCase());
            if ( curRowCols + cols > COLS() ) break;
            v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
              0,
              android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
              cols * ((float) 1.0 / COLS())));
            curRow.addView(v);
            curViewIndex++;
            curRowCols += cols;
          }
          if ( COLS() - curRowCols != 0 ) {
            android.view.View v = new android.widget.Space(getAndroidContext());
            v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
                0,
                1,
                (COLS() - curRowCols) * ((float) 1.0 / COLS())));
            curRow.addView(v);
          }
          getView().addView(curRow);
        } while ( curViewIndex < getViews_().size() );
      `,
      swiftCode: `
        getView()?.setNeedsLayout();
      `
    }
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
        class View: UIView {
          weak var this: foam_u2_layout_GridLayout?;
          override func layoutSubviews() {
            super.layoutSubviews();
            guard let this = this else { return }
            let frames = this.getFrames(frame.width);
            let views = this.getViews_()!;
            for i in 0..<views.count {
              let v = (views[i] as! foam_cross_platform_ui_View).getView()!;
              let f = frames[i];
              if f == nil {
                v.isHidden = true;
              } else {
                v.isHidden = false;
                v.frame = f!;
              }
            }
          }
          override func sizeThatFits(_ size: CGSize) -> CGSize {
            guard let this = this else {
              return CGSize(width: size.width, height: 0);
            }
            let frames = this.getFrames(size.width);
            var height: CGFloat = 0;
            for i in stride(from: frames.count-1, through: 0, by: -1) {
              let f = frames[i];
              if f != nil {
                height = f!.maxY;
                break;
              }
            }
            return CGSize(width: size.width, height: height);
          }
        }
      `
    }
  ]
});