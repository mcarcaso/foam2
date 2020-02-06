foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'LongPropertyJavaRefinement',
  refines: 'foam.core.ColorProperty',
  flags: ['swift'],
  swiftImports: [
    'UIKit'
  ],
  properties: [
    {
      name: 'swiftValue',
      value: 'UIColor.black'
    },
    {
      name: 'swiftType',
      factory: function() { return 'UIColor' }
    },
    {
      name: 'swiftAdapt',
      value: `
        if ( newValue is String ) {
          let s = (newValue as! String).lowercased()
          if s.hasPrefix("#") {
            let start = s.index(s.startIndex, offsetBy: 1)
            var hexColor = String(s[start...])
            if hexColor.count == 6 { hexColor = hexColor + "ff" }
            if hexColor.count == 8 {
              let scanner = Scanner(string: hexColor)
              var hexNumber: UInt64 = 0
              if scanner.scanHexInt64(&hexNumber) {
                let r = CGFloat((hexNumber & 0xff000000) >> 24) / 255
                let g = CGFloat((hexNumber & 0x00ff0000) >> 16) / 255
                let b = CGFloat((hexNumber & 0x0000ff00) >> 8) / 255
                let a = CGFloat(hexNumber & 0x000000ff) / 255
                return UIColor(red: r, green: g, blue: b, alpha: a)
              }
            }
          }
          return UIColor(named: s)!;
        } else {
          return newValue as! UIColor;
        }
      `
    },
  ]
});
