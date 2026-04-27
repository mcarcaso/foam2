// Demo: imports generated modules, exercises the data + namespace style,
// shows reflection via Module.properties + the Symbol-keyed identity.

import { User } from '../gen/User.ts';
import { Task } from '../gen/Task.ts';
import { properties as runtimeProperties, modelOf, kindOf } from '@mike_vibe/framework/runtime';

const ctx = {};   // empty Ctx for the demo

// 1. Construct values via the namespace's create()
let alice = User.create({
  id: 'u_1', firstName: 'Alice', lastName: 'Hopper',
  email: 'alice@example.com', role: 'admin', active: true,
});

let task = Task.create({
  id: 't_1', title: 'pay rent', priority: 7, done: false, ownerId: 'u_1',
});

console.log('--- values look like POJOs ---');
console.log('alice:', alice);
console.log('task: ', task);

// 2. JSON serialization is clean — Symbol KIND is invisible
console.log('\n--- JSON.stringify is clean ---');
console.log(JSON.stringify(task));        // no __kind, no model, just the data

// 3. Object.keys is also clean
console.log('\n--- Object.keys is clean ---');
console.log(Object.keys(task));

// 4. But the runtime can identify the value
console.log('\n--- runtime identity via Symbol ---');
console.log('kindOf(task):  ', kindOf(task));
console.log('modelOf(task):', modelOf(task)?.fqn);

// 5. Computed property (an `expression:`) — emitted as a function
console.log('\n--- computed property ---');
console.log('User.fullName: ', User.fullName(ctx, alice));
console.log('Task.summary:  ', Task.summary(ctx, task));

// 6. Immutable setter
console.log('\n--- immutable setters return a new value ---');
const renamed = User.setFirstName(ctx, alice, 'Alicia');
console.log('renamed:', renamed.firstName, '| original still:', alice.firstName);

// 7. Action with isEnabled gate (returns same self if disabled)
console.log('\n--- actions ---');
console.log('Task.complete_isEnabled:', Task.complete_isEnabled(ctx, task));
const completed = Task.complete(ctx, task);
console.log('after complete:        ', completed.done);
console.log('Task.complete_isEnabled (now):', Task.complete_isEnabled(ctx, completed));

// 8. Two ways to iterate properties
console.log('\n--- typed iteration via Module.properties ---');
for (const { name, value } of Task.properties(task)) {
  console.log(`  ${name} = ${JSON.stringify(value)}`);
}

console.log('\n--- generic iteration via runtime properties() ---');
const polymorphic: unknown = task;
for (const { name, value } of runtimeProperties(polymorphic)!) {
  console.log(`  ${name} = ${JSON.stringify(value)}`);
}

// 9. Identity check
console.log('\n--- type guards ---');
console.log('Task.is(task):  ', Task.is(task));
console.log('Task.is(alice): ', Task.is(alice));
console.log('User.is(alice): ', User.is(alice));

// 10. Reflection — the model itself is data on the namespace
console.log('\n--- reflection ---');
console.log('Task.model.fqn:        ', Task.model.fqn);
console.log('Task.model.axioms[..]:');
for (const a of Task.model.axioms) {
  console.log(`  ${a.kind} :: ${a.name}`);
}
