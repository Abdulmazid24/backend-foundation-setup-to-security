import { neon } from '@neondatabase/serverless';
import config from '../config';

export const sql = neon(config.database_url);

export const initDB = async () => {
  await sql`
  CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(75) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  passwordHash TEXT NOT NULL,
  age INT NOT NULL,
  role VARCHAR(25) NOT NULL DEFAULT 'user',
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW()

  )
  `;

  await sql`
  CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  customerId INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  quantity INT NOT NULL CHECK (quantity > 0),
  food TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
  )
  
  `;
};
