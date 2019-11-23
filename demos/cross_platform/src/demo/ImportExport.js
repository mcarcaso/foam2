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
    },
  ]
});
