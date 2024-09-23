// // app/api/agents/me/route.js

// import { getSession } from 'next-auth/react'; // Assuming you use next-auth for authentication
// import connectToDatabase from '@/app/lib/mongodb'; // Replace this with your database connection

// export async function GET(req) {
//   try {
//     // Get session (you can also use other authentication methods)
//     const session = await getSession({ req });
    
//     if (!session) {
//       return new Response(JSON.stringify({ error: 'Unauthorized' }), {
//         status: 401,
//       });
//     }

//     // Assuming `session.user.email` stores the agent's email or ID
//     const agent = await connectToDatabase.collection('agents').findOne({ email: session.user.email });

//     if (!agent) {
//       return new Response(JSON.stringify({ error: 'Agent not found' }), {
//         status: 404,
//       });
//     }

//     // Return the agent's data (like agentId)
//     return new Response(JSON.stringify({ agentId: agent._id, ...agent }), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: 'Something went wrong' }), {
//       status: 500,
//     });
//   }
// }
