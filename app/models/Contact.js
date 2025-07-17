// app/models/Contact.js
import connectToDatabase from '@/app/lib/database';
import { contacts } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

class Contact {
  static async create(contactData) {
    const db = await connectToDatabase();
    const [contact] = await db.insert(contacts).values(contactData).returning();
    return contact;
  }

  static async find() {
    const db = await connectToDatabase();
    return await db.select().from(contacts);
  }

  static async findById(id) {
    const db = await connectToDatabase();
    const [contact] = await db.select().from(contacts).where(eq(contacts.id, id));
    return contact || null;
  }

  static async findByIdAndDelete(id) {
    const db = await connectToDatabase();
    const [contact] = await db.delete(contacts).where(eq(contacts.id, id)).returning();
    return contact;
  }

  static async updateById(id, updates) {
    const db = await connectToDatabase();
    const [contact] = await db.update(contacts).set(updates).where(eq(contacts.id, id)).returning();
    return contact;
  }

  static async deleteById(id) {
    const db = await connectToDatabase();
    const [contact] = await db.delete(contacts).where(eq(contacts.id, id)).returning();
    return contact;
  }
}

export default Contact;
