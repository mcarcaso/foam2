import { defineClass, prop, expr } from '@mike_vibe/framework';

export const TodoModel = defineClass({
  package: 'app',
  name:    'Todo',

  properties: {
    id:        prop.string({ id: true, required: true }),
    title:     prop.string({ required: true, min: 1, label: 'Title' }),
    notes:     prop.string({ value: '' }),
    done:      prop.bool({ value: false }),
    priority:  prop.int({ value: 0, min: 0, max: 10 }),
    createdAt: prop.datetime({ required: true }),

    // computed: emitted as Todo.summary(ctx, t)
    summary:   prop.string({
      expression: expr.concat(
        expr.get('title'),
        expr.lit(' [P'),
        expr.get('priority'),
        expr.lit(']'),
      ),
    }),
  },

  actions: {
    complete: {
      isEnabled: expr.not(expr.get('done')),
      code:      expr.set('done', expr.lit(true)),
    },
    bump: {
      isEnabled: expr.lt(expr.get('priority'), expr.lit(10)),
      code:      expr.set('priority', expr.add(expr.get('priority'), expr.lit(1))),
    },
  },
});
