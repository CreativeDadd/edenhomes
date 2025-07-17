// app/models/NwUser.js
import connectToDatabase from '@/app/lib/database';
import { users } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

class NwUser {
  static async create(userData) {
    const db = await connectToDatabase();
    const [user] = await db.insert(users).values({
      ...userData,
      role: userData.role || 'agent'
    }).returning();
    return user;
  }

  static async findOne(query) {
    const db = await connectToDatabase();
    
    if (query.email) {
      const [user] = await db.select().from(users).where(eq(users.email, query.email));
      return user || null;
    }
    
    if (query.id) {
      const [user] = await db.select().from(users).where(eq(users.id, query.id));
      return user || null;
    }
    
    return null;
  }

  static async findById(id) {
    const db = await connectToDatabase();
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || null;
  }

  static async updateById(id, updates) {
    const db = await connectToDatabase();
    const [user] = await db.update(users).set(updates).where(eq(users.id, id)).returning();
    return user;
  }

  static async deleteById(id) {
    const db = await connectToDatabase();
    const [user] = await db.delete(users).where(eq(users.id, id)).returning();
    return user;
  }

  async save() {
    const db = await connectToDatabase();
    if (this.id) {
      const [updated] = await db.update(users).set(this).where(eq(users.id, this.id)).returning();
      return updated;
    } else {
      const [created] = await db.insert(users).values(this).returning();
      return created;
    }
  }
}

export default NwUser;
