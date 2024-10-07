import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Properis from '@/app/models/Blog';

export async function GET() {
  await connectToDatabase();
  try {
    const properis = await Properis.find({});
    return NextResponse.json(properis);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req) {
  await connectToDatabase();
  try {
    const { title, content, imageUrl } = await req.json();
    const properi = new Properis({ title, content, imageUrl });
    await properi.save();
    return NextResponse.json(properi, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add blog' }, { status: 500 });
  }
}
