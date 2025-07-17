// app/models/Blog.js
import connectToDatabase from '@/app/lib/database';
import { blogs } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

class Blog {
  static async create(blogData) {
    const db = await connectToDatabase();
    const [blog] = await db.insert(blogs).values(blogData).returning();
    return blog;
  }

  static async find() {
    const db = await connectToDatabase();
    return await db.select().from(blogs);
  }

  static async findById(id) {
    const db = await connectToDatabase();
    const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));
    return blog || null;
  }

  static async findByIdAndUpdate(id, updates) {
    const db = await connectToDatabase();
    const [blog] = await db.update(blogs).set({
      ...updates,
      updatedAt: new Date()
    }).where(eq(blogs.id, id)).returning();
    return blog;
  }

  static async findByIdAndDelete(id) {
    const db = await connectToDatabase();
    const [blog] = await db.delete(blogs).where(eq(blogs.id, id)).returning();
    return blog;
  }

  static async updateById(id, updates) {
    const db = await connectToDatabase();
    const [blog] = await db.update(blogs).set({
      ...updates,
      updatedAt: new Date()
    }).where(eq(blogs.id, id)).returning();
    return blog;
  }

  static async deleteById(id) {
    const db = await connectToDatabase();
    const [blog] = await db.delete(blogs).where(eq(blogs.id, id)).returning();
    return blog;
  }
}

export default Blog;
