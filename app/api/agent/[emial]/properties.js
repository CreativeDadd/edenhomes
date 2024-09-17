import connectToDatabase from '@/app/lib/mongodb';
import Property from '@/app/models/Property';

export default async function handler(req, res) {
  const { email } = req.query;

  await connectToDatabase();

  try {
    const properties = await Property.find({ agentEmail: email }).lean();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties' });
  }
}
