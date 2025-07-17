// app/models/Message.js
import connectToDatabase from '@/app/lib/database';
import { messages } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

class Message {
  static async create(messageData) {
    const db = await connectToDatabase();
    const [message] = await db.insert(messages).values(messageData).returning();
    return message;
  }

  static async find() {
    const db = await connectToDatabase();
    return await db.select().from(messages);
  }

  static async findById(id) {
    const db = await connectToDatabase();
    const [message] = await db.select().from(messages).where(eq(messages.id, id));
    return message || null;
  }

  static async updateById(id, updates) {
    const db = await connectToDatabase();
    const [message] = await db.update(messages).set(updates).where(eq(messages.id, id)).returning();
    return message;
  }

  static async deleteById(id) {
    const db = await connectToDatabase();
    const [message] = await db.delete(messages).where(eq(messages.id, id)).returning();
    return message;
  }
}

export default Message;
