foam.CLASS({
  package: 'foam.cross_platform.serialize.json.internal',
  name: 'Outputter',
  requires: [
    'foam.cross_platform.serialize.json.internal.OutputterState',
    'foam.cross_platform.serialize.json.internal.SimpleOutputBuilder',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.serialize.json.internal.OutputBuilder',
      swiftOptional: false,
      name: 'out',
      crossPlatformFactory: `return SimpleOutputBuilder_create().build();`
    },
    {
      class: 'ListProperty',
      name: 'state',
      swiftOptional: false,
      androidFactory: `
        java.util.List l = new java.util.ArrayList();
        l.add(OutputterState_create().build());
        return l;
      `,
      swiftFactory: `
        let l = NSMutableArray();
        l.add(OutputterState_create().build());
        return l;
      `,
    }
  ],
  methods: [
    {
      name: 'obj',
      type: 'foam.cross_platform.serialize.json.internal.Outputter',
      androidCode: `
        e();
        getOut().startObj();
        getState().add(OutputterState_create()
          .setEndObj(true)
          .setComma(false)
          .build());
        return this;
      `,
      swiftCode: `
        e();
        getOut().startObj();
        getState().add(OutputterState_create()
          .setEndObj(true)
          .setComma(false)
          .build());
        return self;
      `,
    },
    {
      name: 'array',
      type: 'foam.cross_platform.serialize.json.internal.Outputter',
      androidCode: `
        e();
        getOut().startArray();
        getState().add(OutputterState_create()
          .setEndArray(true)
          .setArray(true)
          .setComma(false)
          .build());
        return this;
      `,
      swiftCode: `
        e();
        getOut().startArray();
        getState().add(OutputterState_create()
          .setEndArray(true)
          .setArray(true)
          .setComma(false)
          .build());
        return self;
      `,
    },
    {
      name: 'top',
      type: 'foam.cross_platform.serialize.json.internal.OutputterState',
      androidCode: `
        return (foam.cross_platform.serialize.json.internal.OutputterState)
          getState().get(getState().size()-1);
      `,
      swiftCode: `
        return getState().lastObject
          as? foam_cross_platform_serialize_json_internal_OutputterState;
      `,
    },
    {
      name: 'key',
      args: [{ name: 's', type: 'String' }],
      type: 'foam.cross_platform.serialize.json.internal.Outputter',
      androidCode: `
        if ( top().getComma() ) getOut().comma();
        else top().setComma(true);

        getOut().out(string(s));
        getOut().keySep();

        return this;
      `,
      swiftCode: `
        if ( top()!.getComma() ) { getOut().comma(); }
        else { top()!.setComma(true); }

        getOut().out(string(s));
        getOut().keySep();

        return self;
      `,
    },
    {
      name: 'e',
      androidCode: `
        if (top().getArray()) {
          if ( top().getComma() ) getOut().comma();
          top().setComma(true);
        }
      `,
      swiftCode: `
        if (top()!.getArray()) {
          if ( top()!.getComma() ) { getOut().comma(); }
          top()!.setComma(true);
        }
      `,
    },
    {
      type: 'String',
      name: 'string',
      args: [{ name: 's', type: 'String' }],
      androidCode: `
        return '"' + s
          .replace("\\\\\\\\", "\\\\\\\\\\\\\\\\")
          .replace("\\\\"", "\\\\\\\\\\\\"")
          .replace("\\\\t", "\\\\\\\\t")
          .replace("\\\\r", "\\\\\\\\r")
          .replace("\\\\n", "\\\\\\\\n")
          + '"';
      `,
      swiftCode: `
        let s = s!;
        return "\\\\"" + s
          .replacingOccurrences(of: "\\\\\\\\", with: "\\\\\\\\\\\\\\\\")
          .replacingOccurrences(of: "\\\\"", with: "\\\\\\\\\\\\"")
          .replacingOccurrences(of: "\\\\t", with: "\\\\\\\\t")
          .replacingOccurrences(of: "\\\\r", with: "\\\\\\\\r")
          .replacingOccurrences(of: "\\\\n", with: "\\\\\\\\n")
          + "\\\\"";
      `,
    },
    {
      name: 's',
      args: [{ name: 's', type: 'String' }],
      type: 'foam.cross_platform.serialize.json.internal.Outputter',
      androidCode: `
        e();
        getOut().out(string(s));
        return this;
      `,
      swiftCode: `
        e();
        getOut().out(string(s));
        return self;
      `,
    },
    {
      name: 'n',
      args: [{ name: 'n', androidType: 'Number', swiftType: 'NSNumber' }],
      type: 'foam.cross_platform.serialize.json.internal.Outputter',
      androidCode: `
        e();
        getOut().out(n.toString());
        return this;
      `,
      swiftCode: `
        e();
        getOut().out(n.stringValue);
        return self;
      `,
    },
    {
      name: 'b',
      args: [{ name: 'b', type: 'Boolean' }],
      type: 'foam.cross_platform.serialize.json.internal.Outputter',
      androidCode: `
        e();
        getOut().out(b ? "true" : "false");
        return this;
      `,
      swiftCode: `
        e();
        getOut().out(b ? "true" : "false");
        return self;
      `,
    },
    {
      name: 'nul',
      type: 'foam.cross_platform.serialize.json.internal.Outputter',
      androidCode: `
        e();
        getOut().out("null");
        return this;
      `,
      swiftCode: `
        e();
        getOut().out("null");
        return self;
      `,
    },
    {
      name: 'end',
      type: 'foam.cross_platform.serialize.json.internal.Outputter',
      androidCode: `
        foam.cross_platform.serialize.json.internal.OutputterState s = (foam.cross_platform.serialize.json.internal.OutputterState)
          getState().remove(getState().size() - 1);
        if ( s.getEndObj() ) getOut().endObj();
        if ( s.getEndArray() ) getOut().endArray();
        return this;
      `,
      swiftCode: `
        let s = getState().lastObject
          as! foam_cross_platform_serialize_json_internal_OutputterState;
        getState().removeLastObject()
        if ( s.getEndObj() ) { getOut().endObj(); }
        if ( s.getEndArray() ) { getOut().endArray(); }
        return self;
      `
    },
    {
      name: 'reset',
      androidCode: `
        getOut().reset();
        clearProperty("state");
      `,
      swiftCode: `
        getOut().reset();
        clearProperty("state");
      `
    },
    {
      name: 'toString',
      androidCode: `return getOut().output();`,
      swiftCode: `return getOut().output();`
    }
  ]
});
