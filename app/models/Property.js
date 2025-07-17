// app/models/Property.js
import connectToDatabase from '@/app/lib/database';
import { properties } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

class Property {
  static async create(propertyData) {
    const db = await connectToDatabase();
    const [property] = await db.insert(properties).values(propertyData).returning();
    return property;
  }

  static async find(query = {}) {
    const db = await connectToDatabase();
    
    if (query.agentId) {
      return await db.select().from(properties).where(eq(properties.agentId, query.agentId));
    }
    
    if (query.status) {
      return await db.select().from(properties).where(eq(properties.status, query.status));
    }
    
    return await db.select().from(properties);
  }

  static async findById(id) {
    const db = await connectToDatabase();
    const [property] = await db.select().from(properties).where(eq(properties.id, id));
    return property || null;
  }

  static async findByIdAndUpdate(id, updates) {
    const db = await connectToDatabase();
    const [property] = await db.update(properties).set(updates).where(eq(properties.id, id)).returning();
    return property;
  }

  static async findByIdAndDelete(id) {
    const db = await connectToDatabase();
    const [property] = await db.delete(properties).where(eq(properties.id, id)).returning();
    return property;
  }

  static async updateById(id, updates) {
    const db = await connectToDatabase();
    const [property] = await db.update(properties).set(updates).where(eq(properties.id, id)).returning();
    return property;
  }

  static async deleteById(id) {
    const db = await connectToDatabase();
    const [property] = await db.delete(properties).where(eq(properties.id, id)).returning();
    return property;
  }

  // Add lean() method for compatibility
  static async lean() {
    return await Property.find();
  }
}

export default Property;

