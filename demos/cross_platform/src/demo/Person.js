foam.CLASS({
  package: 'demo',
  name: 'Person',
  properties: [
    {
      class: 'StringProperty',
      name: 'firstName'
    },
    {
      class: 'StringProperty',
      name: 'lastName'
    },
    {
      class: 'StringProperty',
      name: 'fullName',
      expressionArgs: ['lastName', 'firstName'],
      androidExpression: `
        return (firstName + " " + lastName).trim();
      `,
      swiftExpression: `
        return (firstName! + " " + lastName!)
          .trimmingCharacters(in: .whitespacesAndNewlines);
      `
    },
  ],
  tests: [
    {
      name: 'testFullName',
      androidCode: `
        Person p = Person_create()
          .setFirstName("Mike")
          .setLastName("Car")
          .build();
        assertEquals("Mike Car", p.getFullName());
      `,
      swiftCode: `
        let p = Person_create()
          .setFirstName("Mike")
          .setLastName("Car")
          .build();
        XCTAssertEqual("Mike Car", p.getFullName());
      `,
    }
  ]
});
