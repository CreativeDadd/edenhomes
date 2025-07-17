// app/models/Agent.js
import connectToDatabase from '@/app/lib/database';
import { agents } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

class Agent {
  static async create(agentData) {
    const db = await connectToDatabase();
    const [agent] = await db.insert(agents).values(agentData).returning();
    return agent;
  }

  static async findOne(query) {
    const db = await connectToDatabase();
    
    if (query.email) {
      const [agent] = await db.select().from(agents).where(eq(agents.email, query.email));
      return agent || null;
    }
    
    if (query.id) {
      const [agent] = await db.select().from(agents).where(eq(agents.id, query.id));
      return agent || null;
    }
    
    return null;
  }

  static async findById(id) {
    const db = await connectToDatabase();
    const [agent] = await db.select().from(agents).where(eq(agents.id, id));
    return agent || null;
  }

  static async find(query = {}) {
    const db = await connectToDatabase();
    
    if (query.isApproved !== undefined) {
      return await db.select().from(agents).where(eq(agents.isApproved, query.isApproved));
    }
    
    return await db.select().from(agents);
  }

  static async updateById(id, updates) {
    const db = await connectToDatabase();
    const [agent] = await db.update(agents).set(updates).where(eq(agents.id, id)).returning();
    return agent;
  }

  static async deleteById(id) {
    const db = await connectToDatabase();
    const [agent] = await db.delete(agents).where(eq(agents.id, id)).returning();
    return agent;
  }

  async save() {
    const db = await connectToDatabase();
    if (this.id) {
      const [updated] = await db.update(agents).set(this).where(eq(agents.id, this.id)).returning();
      return updated;
    } else {
      const [created] = await db.insert(agents).values(this).returning();
      return created;
    }
  }
}

export default Agent;
