import { defineClass, prop, expr } from '@mike_vibe/framework';

export const TaskModel = defineClass({
  package: 'app',
  name:    'Task',

  properties: {
    id:       prop.string({ required: true }),
    title:    prop.string({ required: true, min: 1 }),
    priority: prop.int({ value: 0, min: 0, max: 10 }),
    done:     prop.bool({ value: false }),
    ownerId:  prop.ref('app.User'),

    // computed property — emitted as Task.summary(ctx, t)
    summary:  prop.string({
      expression: expr.concat(
        expr.get('title'),
        expr.lit(' (P'),
        expr.get('priority'),
        expr.lit(')'),
      ),
    }),
  },

  actions: {
    // immutable update: sets done=true, but only when not already done
    complete: {
      isEnabled: expr.not(expr.get('done')),
      code:      expr.set('done', expr.lit(true)),
    },
  },

  topics: ['highPriority'],
});
