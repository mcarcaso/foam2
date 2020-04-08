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
      value: 8
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
      `
    },
    {
      name: 'addView',
      args: [
        { type: 'foam.cross_platform.ui.View', name: 'view' },
        { type: 'foam.u2.layout.GridColumns', name: 'gridColumns' },
      ],
      androidCode: `
        getViews_().add(view);
        getGridColumns_().add(gridColumns);
        foam.core.SlotInterface isHiddenSlot = ((foam.cross_platform.FObject) view).getSlot("isHidden");
        if ( isHiddenSlot != null ) {
          getSubs_().add(isHiddenSlot.slotSub(updateView_listener()));
        }
        updateView(null, null);
      `
    },
    {
      name: 'removeAllViews',
      androidCode: `
        getViews_().clear();
        getGridColumns_().clear();
        for ( Object o : getSubs_() ) ((foam.core.Detachable) o).detach();
        updateView(null, null);
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
            int cols = gridCols == null ? COLS() : (int) gridCols.getProperty(getDisplayWidth().getName().toLowerCase());
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
      `
    }
  ],
});