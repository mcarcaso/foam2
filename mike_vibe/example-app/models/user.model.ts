import { defineClass, prop, expr } from '@mike_vibe/framework';

export const UserModel = defineClass({
  package: 'app',
  name:    'User',

  properties: {
    id:        prop.string({ required: true }),
    firstName: prop.string({ required: true, label: 'First name' }),
    lastName:  prop.string({ required: true, label: 'Last name'  }),
    email:     prop.string({ required: true, pattern: '^[^@\\s]+@[^@\\s]+$' }),

    // computed — emitted as User.fullName(ctx, u)
    fullName:  prop.string({
      expression: expr.concat(expr.get('firstName'), expr.lit(' '), expr.get('lastName')),
    }),

    role:      prop.enum(['admin', 'member', 'guest'] as const, { value: 'member' }),
    active:    prop.bool({ value: true }),
  },
});
