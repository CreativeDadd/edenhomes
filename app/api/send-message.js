import connectToDatabase from '@/app/lib/mongodb';
import Message from '@/app/models/Message';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { recipient, message } = req.body;

    try {
      const newMessage = new Message({
        recipient,
        message,
      });
      await newMessage.save();

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
