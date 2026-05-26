import { sql } from '../../db';
import type { RUser } from '../../types';
import bcrypt from 'bcrypt';

class AuthService {
  async createUser(user: RUser & { password: string }) {
    const { name, email, age, role, password } = user;

    const hash = await bcrypt.hash(password, 10);

    const res = await sql`
    INSERT INTO users (name, email, passwordHash, age, role)
    VALUES (${name}, ${email}, ${hash}, ${age}, COALESCE(${role}, 'user'))
    RETURNING id, name, email, age, role, createdAt, updatedAt
    `;
    return res[0];
  }
}

export default new AuthService();
