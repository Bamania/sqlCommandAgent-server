import { PrismaClient } from '../../generated/prisma/index.js'
const db =  new PrismaClient();

async function fetchAllTableData() {
  // Step 1: Get all table names
  const tables = await db.$queryRawUnsafe(`
    SELECT tablename FROM pg_tables WHERE schemaname = 'public';
  `);

  const allTableData = {};

  // Step 2: Loop through each table and fetch rows
  for (const { tablename } of tables) {
    try {
      // Dynamically construct the query string
      const rows = await db.$queryRawUnsafe(`SELECT * FROM "${tablename}";`);
      allTableData[tablename] = rows;
    } catch (err) {
      console.error(`Failed to read from table ${tablename}:`, err.message);
    }
  }

  return allTableData;
}
export default fetchAllTableData;

// Example usage
