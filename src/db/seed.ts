import { db } from './db';
import { cafes } from './schema';

async function main() {
  console.log('🌱 Sembrando datos de cafés...');

  await db.insert(cafes).values([
    { nombre: 'Etiopía Yirgacheffe', origen: 'Etiopía', precio: 14.50, tueste: 'claro' },
    { nombre: 'Colombia Supremo', origen: 'Colombia', precio: 12.00, tueste: 'medio' },
    { nombre: 'Sumatra Mandheling', origen: 'Indonesia', precio: 16.00, tueste: 'oscuro' },
  ]);

  console.log('✅ ¡Cafés insertados correctamente!');
}

main();