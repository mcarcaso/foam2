foam.CLASS({
  package: 'foam.dao.journal',
  name: 'FileAppendDAO',
  extends: 'foam.dao.AbstractDAO',
  requires: [
    'foam.cross_platform.deserialize.json.FObjectParser',
    'foam.cross_platform.serialize.json.Outputter',
    'foam.util.SimpleDetachable',
  ],
  imports: [
    {
      name: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'fileName',
    },
    {
      androidType: 'java.io.File',
      swiftType: 'URL?',
      name: 'file',
      expressionArgs: ['fileName'],
      androidExpression: `
        return new java.io.File(getAndroidContext().getFilesDir(), fileName);
      `,
      swiftExpression: `
        let dir = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first
        return dir?.appendingPathComponent(fileName!);
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.serialize.json.Outputter',
      name: 'outputter',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.serialize.json.Outputter'
      }
    },
    {
      androidType: 'java.io.BufferedWriter',
      swiftType: 'FileHandle?',
      name: 'writer',
      expressionArgs: ['file'],
      androidExpression: `
        try {
          java.io.BufferedWriter writer = new java.io.BufferedWriter(
            new java.io.FileWriter(file, true), 16 * 1024);
          return writer;
        } catch ( Throwable t ) {
          throw new RuntimeException(t);
        }
      `,
      swiftExpression: `
        if file == nil { return nil }
        var writer = try? FileHandle(forWritingTo: file!);
        if writer == nil {
          FileManager.default.createFile(atPath: file!.path, contents: Data(), attributes: nil)
          writer = try? FileHandle(forWritingTo: file!);
        }
        writer?.seekToEndOfFile();
        return writer;
      `
    }
  ],
  methods: [
    {
      name: 'select_',
      androidCode: `
        try {
          if ( ! getFile().exists() ) return sink;

          foam.dao.Sink decorated = decorateSink_(sink, skip, limit, order, predicate);
          foam.util.SimpleDetachable sub = SimpleDetachable_create().build();

          java.io.BufferedReader r = new java.io.BufferedReader(new java.io.FileReader(getFile()));
          foam.cross_platform.deserialize.json.FObjectParser parser = FObjectParser_create().build();

          for ( String line ; ( line = r.readLine() ) != null ; ) {
            if ( sub.getIsDetached() ) break;
            decorated.put(parser.parseString(line, x), sub);
          }
          decorated.eof();

        } catch ( Throwable t ) {
          throw new RuntimeException(t);
        }
        return sink;
      `,
      swiftCode: `
        if getFile() == nil { return sink }
        if !((try? getFile()!.checkResourceIsReachable()) ?? false) { return sink }
        let decorated = decorateSink_(sink, skip, limit, order, predicate);
        let sub = SimpleDetachable_create().build();

        let r = try! FileHandle(forReadingFrom: getFile()!);
        let parser = FObjectParser_create().build();
        var chunk: [Character] = []
        var chunkOffset = 0;
        while ( !sub.getIsDetached() ) {
          var line: String? = nil;
          while ( true ) {
            if chunk.count == chunkOffset {
              let chunkStr = String(data: r.readData(ofLength: 1024), encoding: .utf8)
              if chunkStr == nil { break }
              chunk = Array(chunkStr!)
              chunkOffset = 0;
            }
            if chunk.count == 0 { break }
            let charString = chunk[chunkOffset]
            chunkOffset+=1
            if line == nil { line = "" }
            if charString == "\\\\n" { break }
            line!.append(charString)
          }
          if line == nil { break }
          decorated?.put(parser.parseString(line, x), sub);
        }
        return sink;
      `
    },
    {
      name: 'put_',
      androidCode: `
        try {
          java.io.BufferedWriter writer = getWriter();
          writer.write(getOutputter().stringify(obj));
          writer.newLine();
          writer.flush();
          return obj;
        } catch ( Throwable t ) {
          throw new RuntimeException(t);
        }
      `,
      swiftCode: `
          let writer = getWriter();
          var s = getOutputter()?.stringify(obj);
          s?.append("\\\\n")
          if let d = s?.data(using: .utf8) {
            writer?.write(d);
          }
          return obj;
      `
    },
    {
      name: 'find_'
    },
    {
      name: 'remove_'
    },
  ],
});
