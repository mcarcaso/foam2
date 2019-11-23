foam.CLASS({
  package: 'demo',
  name: 'ImportExport',
  classes: [
    {
      name: 'Export',
      exports: [
        'a'
      ],
      properties: [
        {
          name: 'a'
        }
      ]
    },
    {
      name: 'Import',
      imports: [
        'a'
      ],
    },
  ],
  tests: [
    {
      name: 'testImportExport',
      androidCode: `
        ImportExport.Export e = ImportExport.Export.ExportBuilder(getSubX()).build();
        e.setA("Mike");
        assertEquals("Mike", e.getSubX().getXProp("a"));
        assertEquals("Mike", e.getSubX().getXSlot("a").slotGet());
        e.setA("Adam");
        assertEquals("Adam", e.getSubX().getXProp("a"));
        
        ImportExport.Import i = ImportExport.Import.ImportBuilder(e.getSubX()).build();
        assertEquals("Adam", i.getA());
        
        i.setA("Mike");
        assertEquals("Mike", i.getA());
        assertEquals("Mike", e.getA());
      `,
      swiftCode: `
        let e = demo_ImportExport.Export.ExportBuilder(getSubX()).build();
        e.setA("Mike");
        XCTAssertTrue(foam_cross_platform_Lib.equals(
          "Mike", e.getSubX()!.getXProp("a")));
        XCTAssertTrue(foam_cross_platform_Lib.equals(
          "Mike", e.getSubX()!.getXSlot("a")!.slotGet()));
        e.setA("Adam");
        XCTAssertTrue(foam_cross_platform_Lib.equals(
          "Adam", e.getSubX()!.getXProp("a")));
        
        let i = demo_ImportExport.Import.ImportBuilder(e.getSubX()).build();
        XCTAssertTrue(foam_cross_platform_Lib.equals(
          "Adam", i.getA()));
        
        i.setA("Mike");
        XCTAssertTrue(foam_cross_platform_Lib.equals("Mike", i.getA()));
        XCTAssertTrue(foam_cross_platform_Lib.equals("Mike", e.getA()));
      `,
    },
  ]
});
