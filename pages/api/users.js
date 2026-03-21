import { Pool } from 'pg';

const pool = new Pool({
  // Your database connection details
  // Be sure to use environment variables for this in a real app
});

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  // WARNING: This is intentionally vulnerable to SQL Injection.
  // Never construct queries with string concatenation in production. Use parameterized queries.
  const queryText = `SELECT * FROM users WHERE username = '${username}'`;

  try {
    const { rows } = await pool.query(queryText);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
