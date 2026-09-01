require('dotenv').config();
const { sql } = require('@vercel/postgres');

async function runQuery() {
  try {
    console.log('--- HASIL QUERY 1 (Modul) ---');
    const result1 = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;
    console.table(result1.rows);

    console.log('--- HASIL QUERY 2 (Kreasi Bebas) ---');
    const result2 = await sql`
      SELECT name, email FROM customers ORDER BY name ASC LIMIT 5;
    `;
    console.table(result2.rows);
  } catch (error) {
    console.error('Error executing query:', error);
  }
}

runQuery();