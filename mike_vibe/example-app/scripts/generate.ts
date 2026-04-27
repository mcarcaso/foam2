// Reads model files, runs the codegen emitter, writes generated TS modules.
//
// `tsx scripts/generate.ts`

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { allModels } from '@mike_vibe/framework';
import { emitTS } from '@mike_vibe/framework/codegen';

// Side-effect imports: registers each Model in the framework registry.
import './_models.ts';

const here   = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '..', 'gen');
mkdirSync(outDir, { recursive: true });

let count = 0;
for (const model of allModels()) {
  const code = emitTS(model);
  const file = resolve(outDir, `${model.name}.ts`);
  writeFileSync(file, code);
  console.log(`emit ${file}`);
  count++;
}
console.log(`done — wrote ${count} module(s) to ${outDir}`);
