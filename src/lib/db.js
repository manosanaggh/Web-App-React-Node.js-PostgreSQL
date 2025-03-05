import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'myuser',
    password: 'mypw',
    database: 'postgres',
  });

  export default pool;