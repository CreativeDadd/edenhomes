// app/models/PropertyAuth.js
import connectToDatabase from '@/app/lib/database';
import { propertyAuth } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

class PropertyAuth {
  static async create(propertyData) {
    const db = await connectToDatabase();
    const [property] = await db.insert(propertyAuth).values(propertyData).returning();
    return property;
  }

  static async find(query = {}) {
    const db = await connectToDatabase();
    
    if (query.userId) {
      return await db.select().from(propertyAuth).where(eq(propertyAuth.userId, query.userId));
    }
    
    if (query.approved !== undefined) {
      return await db.select().from(propertyAuth).where(eq(propertyAuth.approved, query.approved));
    }
    
    return await db.select().from(propertyAuth);
  }

  static async findById(id) {
    const db = await connectToDatabase();
    const [property] = await db.select().from(propertyAuth).where(eq(propertyAuth.id, id));
    return property || null;
  }

  static async updateById(id, updates) {
    const db = await connectToDatabase();
    const [property] = await db.update(propertyAuth).set(updates).where(eq(propertyAuth.id, id)).returning();
    return property;
  }

  static async deleteById(id) {
    const db = await connectToDatabase();
    const [property] = await db.delete(propertyAuth).where(eq(propertyAuth.id, id)).returning();
    return property;
  }
}

export default PropertyAuth;
