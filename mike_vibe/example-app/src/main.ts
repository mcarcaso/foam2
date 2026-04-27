// Todo app demo — exercises the InMemoryDao + mLang on top of the
// generated Todo namespace.

import { InMemoryDao, LoggingDao, asc, desc } from '@mike_vibe/framework/dao';
import { AND, EQ, GT, CONTAINS, NOT } from '@mike_vibe/framework/mlang';
import { Todo } from '../gen/Todo.ts';

const ctx = {};

// 1) Build the DAO stack: memory + logging decorator
const todos = new LoggingDao(new InMemoryDao(Todo));

// 2) Seed a few todos
async function seed(): Promise<void> {
  const rows = [
    Todo.create({ id: 't1', title: 'Pay rent',           notes: '',                  done: false, priority: 9, createdAt: '2026-04-20T08:00:00Z' }),
    Todo.create({ id: 't2', title: 'Buy groceries',      notes: 'Milk, eggs, bread', done: false, priority: 4, createdAt: '2026-04-21T10:00:00Z' }),
    Todo.create({ id: 't3', title: 'Call dentist',       notes: '',                  done: true,  priority: 2, createdAt: '2026-04-19T12:00:00Z' }),
    Todo.create({ id: 't4', title: 'Finish framework',   notes: 'Almost there',      done: false, priority: 10, createdAt: '2026-04-25T09:00:00Z' }),
    Todo.create({ id: 't5', title: 'Read paper on FOAM', notes: '',                  done: false, priority: 3, createdAt: '2026-04-22T14:00:00Z' }),
  ];
  for (const r of rows) await todos.put(ctx, r);
}

async function main(): Promise<void> {
  await seed();

  // ---- 3) basic find ----
  console.log('\n--- find by id ---');
  const t1 = await todos.find(ctx, 't1');
  console.log('t1 ->', t1);

  // ---- 4) typed predicate query ----
  console.log('\n--- where done=false AND priority>=4, ordered by priority desc ---');
  const open = await todos
    .where(AND(EQ(Todo.fields.done, false), GT(Todo.fields.priority, 3)))
    .orderBy(desc(Todo.fields.priority))
    .select(ctx);
  for (const t of open) console.log(`  P${t.priority}  ${t.title}`);

  // ---- 5) string predicate ----
  console.log('\n--- where title CONTAINS "framework" (ic) ---');
  const matches = await todos
    .where(CONTAINS(Todo.fields.title, 'framework', /*ignoreCase*/ true))
    .select(ctx);
  for (const t of matches) console.log(`  - ${t.title}`);

  // ---- 6) skip/limit ----
  console.log('\n--- skip 1, limit 2, ordered by createdAt asc ---');
  const page = await todos
    .orderBy(asc(Todo.fields.createdAt))
    .skip(1)
    .limit(2)
    .select(ctx);
  for (const t of page) console.log(`  ${t.createdAt}  ${t.title}`);

  // ---- 7) action + write-back: complete the highest-priority open todo ----
  console.log('\n--- action: complete highest-priority open todo ---');
  const [next] = await todos
    .where(AND(EQ(Todo.fields.done, false), NOT(EQ(Todo.fields.priority, 0))))
    .orderBy(desc(Todo.fields.priority))
    .limit(1)
    .select(ctx);
  if (next) {
    console.log(`  before: ${next.title} done=${next.done} priority=${next.priority}`);
    const completed = Todo.complete(ctx, next);
    await todos.put(ctx, completed);
    const refetched = await todos.find(ctx, next.id);
    console.log(`  after:  ${refetched?.title} done=${refetched?.done}`);
  }

  // ---- 8) computed property + reflection ----
  console.log('\n--- computed Todo.summary + reflection over generated model ---');
  const all = await todos.orderBy(asc(Todo.fields.createdAt)).select(ctx);
  for (const t of all) {
    console.log(`  ${Todo.summary(ctx, t)}  done=${t.done}`);
  }

  console.log('\n--- model.axioms (reflection) ---');
  for (const a of Todo.model.axioms) {
    console.log(`  ${a.kind}::${a.name}`);
  }

  // ---- 9) JSON.stringify is clean — no Symbol KIND, no model leak ----
  console.log('\n--- wire payload of one todo ---');
  console.log(JSON.stringify(all[0]));

  // ---- 10) the predicate itself is data ----
  const sharedPredicate = AND(EQ(Todo.fields.done, false), GT(Todo.fields.priority, 5));
  console.log('\n--- predicate-as-data (JSON-shippable) ---');
  console.log(JSON.stringify(sharedPredicate, null, 2));
}

main().catch((e) => { console.error(e); process.exit(1); });
