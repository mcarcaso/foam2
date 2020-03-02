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
          swiftType: 'UIView',
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
          android.graphics.Typeface tf = android.graphics.Typeface.create(
            android.graphics.Typeface.DEFAULT, style);
          tv.setTypeface(tf);
          tv.setTextSize(getSize());
        } else {
          throw new RuntimeException("Dont know how to apply font to " + v);
        }
      `,
      swiftCode: `
        var f = UIFont.systemFont(ofSize: CGFloat(getSize()));
        if ( self.getBold() || self.getItalic() ) {
          let traits: UIFontDescriptor.SymbolicTraits =
            getBold() && getItalic() ? [.traitBold, .traitItalic] :
            getBold() ? .traitBold :
            .traitItalic;
          f = UIFont(descriptor: f.fontDescriptor.withSymbolicTraits(traits)!, size: 0);
        }
        if ( v is UILabel ) {
          (v as! UILabel).font = f;
        } else {
          fatalError("Dont know how to apply font to " + String(describing: v));
        }
      `
    }
  ],
});
