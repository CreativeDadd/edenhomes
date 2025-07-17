// app/lib/schema.js
import { pgTable, text, integer, boolean, timestamp, numeric, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').notNull().default('user'), // 'user' or 'admin'
  createdAt: timestamp('created_at').defaultNow(),
});

export const agents = pgTable('agents', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phoneNumber: text('phone_number').notNull(),
  password: text('password').notNull(),
  age: integer('age').notNull(),
  address: text('address').notNull(),
  isApproved: boolean('is_approved').default(false),
  role: text('role').default('agent'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const properties = pgTable('properties', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  location: text('location').notNull(),
  price: numeric('price').notNull(),
  discountPrice: numeric('discount_price').notNull(),
  discountPercent: numeric('discount_percent').notNull(),
  imageUrl: text('image_url').notNull(),
  bedrooms: integer('bedrooms').notNull(),
  bathrooms: integer('bathrooms').notNull(),
  kitchenImageUrl: text('kitchen_image_url').notNull(),
  frontImageUrl: text('front_image_url').notNull(),
  compoundImageUrl: text('compound_image_url').notNull(),
  sittingRoomImageUrl: text('sitting_room_image_url').notNull(),
  specialPlaceImageUrl: text('special_place_image_url'),
  agentId: uuid('agent_id').references(() => agents.id),
  status: text('status').default('pending'), // 'pending', 'approved', 'rejected'
  createdAt: timestamp('created_at').defaultNow(),
});

export const blogs = pgTable('blogs', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const contacts = pgTable('contacts', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  address: text('address').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const messages = pgTable('messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  recipient: text('recipient').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const propertyAuth = pgTable('property_auth', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  price: numeric('price').notNull(),
  approved: boolean('approved').default(false),
  userId: uuid('user_id').references(() => users.id),
});
