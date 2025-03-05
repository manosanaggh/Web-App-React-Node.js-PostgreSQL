import pool from "@/lib/db";

export async function GET(){
  try {
    const client = await pool.connect();  // Connect to the database
    //const result = await client.query('SELECT * FROM users');
    client.release();
    //return Response.json(result.rows);  // Return data to the client
    return new Response(JSON.stringify({ success: 'Connected to PostgreSQL' }));
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
