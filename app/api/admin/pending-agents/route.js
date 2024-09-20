// import connectToDatabase from '@/app/lib/mongodb';
// import Agent from '@/app/models/Agent';

// export default async function handler(req, res) {
//   await connectToDatabase();

//   try {
//     const pendingAgents = await Agent.find({ isApproved: false }).lean();
//     res.status(200).json(pendingAgents);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching pending agents' });
//   }
// }





// /app/api/admin/pending-agents/route.js
import connectToDatabase from '@/app/lib/mongodb';
import Agent from '@/app/models/Agent';

export async function GET() {
  await connectToDatabase();

  try {
    const pendingAgents = await Agent.find({ isApproved: false }).lean();
    return new Response(JSON.stringify(pendingAgents), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching pending agents' }), { status: 500 });
  }
}
