import { db } from './db';
import { cafes } from './schema';

async function main() {
  console.log('🔍 Consultando todos los cafés en la base de datos:\n');

  const todosLosCafes = await db.select().from(cafes);
  console.table(todosLosCafes);
}

main();