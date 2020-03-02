foam.CLASS({
  package: 'foam.cross_platform.ui',
  name: 'TextStyle',
  swiftImports: [
    'UIKit'
  ],
  properties: [
    {
      class: 'IntProperty',
      name: 'size',
    },
    {
      class: 'StringProperty',
      name: 'font',
    },
    {
      class: 'BooleanProperty',
      name: 'bold',
    },
    {
      class: 'BooleanProperty',
      name: 'italic',
    },
  ],
  methods: [
    {
      name: 'applyTextStyle',
      args: [
        {
          androidType: 'android.view.View',
          name: 'v'
        }
      ],
      androidCode: `
        if ( v instanceof android.widget.TextView ) {
          android.widget.TextView tv = (android.widget.TextView) v;
          int style =
            getBold() && getItalic() ? android.graphics.Typeface.BOLD_ITALIC :
            getBold() ? android.graphics.Typeface.BOLD :
            getItalic() ? android.graphics.Typeface.ITALIC :
            android.graphics.Typeface.NORMAL;
          android.graphics.Typeface tf = android.graphics.Typeface.create(getFont(), style);
          tv.setTypeface(tf);
          tv.setTextSize(getSize());
        } else {
          throw new RuntimeException("Dont know how to apply font to " + v);
        }
      `
    }
  ],
});
