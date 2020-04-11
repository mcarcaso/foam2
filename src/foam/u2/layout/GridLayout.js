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
        let v = UIStackView();
        v.axis = .vertical;
        v.distribution = .equalSpacing;
        return v;
      `
    },
    {
      class: 'IntProperty',
      name: 'horizontalSpacing'
    },
    {
      class: 'IntProperty',
      name: 'verticalSpacing'
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
    ['', 'propertyChange.view', 'updateView'],
    ['', 'propertyChange.horizontalSpacing', 'updateView'],
    ['', 'propertyChange.verticalSpacing', 'updateView'],
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
  ],
  listeners: [
    {
      name: 'updateView',
      isFramed: true,
      androidCode: `
        for ( int i = 0 ; i < getView().getChildCount() ; i+=2 ) { // +2 to account for spacer.
          android.widget.LinearLayout v = (android.widget.LinearLayout) getView().getChildAt(i);
          v.removeAllViews();
        }
        getView().removeAllViews();

        int curViewIndex = 0;
        do {
          int curRowCols = 0;
          android.widget.LinearLayout curRow = new android.widget.LinearLayout(getAndroidContext());
          if ( curViewIndex != 0 ) {
            android.widget.Space space = new android.widget.Space(getAndroidContext());
            space.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                getVerticalSpacing()));
            getView().addView(space);
          }
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
            if ( curRowCols != 0 ) {
              android.widget.Space space = new android.widget.Space(getAndroidContext());
              space.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
                  getHorizontalSpacing(),
                  android.widget.LinearLayout.LayoutParams.MATCH_PARENT));
              curRow.addView(space);
            }
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
        let parent = getView() as! UIStackView
        for v in parent.arrangedSubviews {
          parent.removeArrangedSubview(v);
        }
        parent.spacing = CGFloat(getVerticalSpacing())
        let hp = CGFloat(getHorizontalSpacing());

        let views = getViews_()!;
        let gridColumns = getGridColumns_()!;

        var curViewIndex = 0;
        repeat {
          var curRowCols = 0;
          var rowViews: [UIView] = []
          var rowViewCols: [CGFloat] = []
          while curViewIndex < views.count && curRowCols < Self.COLS() {
            let fo = views[curViewIndex] as! foam_cross_platform_FObject
            let isHidden = fo.getProperty("isHidden");
            if isHidden != nil && (isHidden as! Bool) {
              curViewIndex += 1;
              continue;
            }
            let v = fo.getProperty("view") as! UIView;
            let gridCols = gridColumns[curViewIndex] as! foam_u2_layout_GridColumns;
            let cols = gridCols.getProperty(getDisplayWidth()?.getName()?.lowercased()) as! Int
            if ( curRowCols + cols > Self.COLS() ) { break; }
            v.removeFromSuperview();
            rowViews.append(v);
            rowViewCols.append(CGFloat(cols) / CGFloat(Self.COLS()));
            curViewIndex += 1;
            curRowCols += cols;
          }
          let rowView = UIView();
          let totalPadding = CGFloat(rowViews.count - 1) * hp / 2
          for i in 0..<rowViews.count {
            let v = rowViews[i];
            rowView.addSubview(v);
            rowView.heightAnchor.constraint(greaterThanOrEqualTo: v.heightAnchor).isActive = true;
            v.topAnchor.constraint(equalTo: rowView.topAnchor).isActive = true;
            v.widthAnchor.constraint(equalTo: rowView.widthAnchor, multiplier: rowViewCols[i], constant: -totalPadding).isActive = true;
            if i == 0 {
              v.leadingAnchor.constraint(equalTo: rowView.leadingAnchor).isActive = true;
            } else {
              v.leadingAnchor.constraint(equalTo: rowViews[i-1].trailingAnchor, constant: hp).isActive = true;
            }
          }
          parent.addArrangedSubview(rowView);
        } while curViewIndex < views.count;
      `
    }
  ],
});