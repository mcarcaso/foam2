/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.INTERFACE({
  package: 'foam.cross_platform.type',
  name: 'Type',
  methods: [
    {
      name: 'getOrdinal',
      type: 'Integer',
    },
    {
      name: 'isInstance',
      args: [
        { type: 'Any', name: 'o' },
      ],
      type: 'Boolean',
    },
    {
      name: 'compare',
      args: [
        { type: 'Any', name: 'o1' },
        { type: 'Any', name: 'o2' },
      ],
      type: 'Integer',
    },
  ],
});
