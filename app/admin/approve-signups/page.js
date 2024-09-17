// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function ApproveSignups() {
//   const [agents, setAgents] = useState([]);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch unapproved agents
//     const fetchAgents = async () => {
//       try {
//         const res = await fetch('/api/admin/unapproved-agents');
//         console.log(res)
//         if (!res.ok) throw new Error('Failed to fetch agents');
//         const data = await res.json();
//         setAgents(data.agents);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchAgents();
//   }, []);

//   const approveAgent = async (agentId) => {
//     try {
//       const res = await fetch(`/api/admin/approve-agent`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ agentId }),
//       });

//       if (!res.ok) throw new Error('Failed to approve agent');
      
//       // Update UI after approval
//       setAgents(agents.filter(agent => agent._id !== agentId));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div className="container mx-auto p-6 ">
//       <h2 className="text-3xl font-bold text-black mb-6">Approve Agent Signups</h2>
//       {agents.length === 0 ? (
//         <p className="text-gray-600">No pending signups.</p>
//       ) : (
//         <ul className="space-y-4">
//           {agents.map((agent) => (
//             <li key={agent._id} className="p-4 bg-white shadow-md rounded-md">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg font-bold">{agent.name}</h3>
//                   <p className="text-sm text-gray-500">Email: {agent.email}</p>
//                   <p className="text-sm text-gray-500">Phone: {agent.phone}</p>
//                 </div>
//                 <button
//                   onClick={() => approveAgent(agent._id)}
//                   className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
//                 >
//                   Approve
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }







// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function ApproveSignups() {
//   const [agents, setAgents] = useState([]);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch unapproved agents
//     const fetchAgents = async () => {
//       try {
//         const res = await fetch('/api/admin/unapproved-agents');
//         if (!res.ok) throw new Error('Failed to fetch agents');
//         const data = await res.json();
//         setAgents(data.agents);
//       } catch (err) {
//         console.error("Error fetching agents:", err);
//         setError(err.message);
//       }
//     };

//     fetchAgents();
//   }, []);

//   const approveAgent = async (agentId) => {
//     try {
//       const res = await fetch(`/api/admin/approve-agent`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ agentId }),
//       });

//       if (!res.ok) throw new Error('Failed to approve agent');
      
//       // Update UI after approval
//       setAgents(agents.filter(agent => agent._id !== agentId));
//     } catch (err) {
//       console.error("Error approving agent:", err);
//       setError(err.message);
//     }
//   };

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-black mb-6">Approve Agent Signups</h2>
//       {agents.length === 0 ? (
//         <p className="text-gray-600">No pending signups.</p>
//       ) : (
//         <ul className="space-y-4">
//           {agents.map((agent) => (
//             <li key={agent._id} className="p-4 bg-white shadow-md rounded-md">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg font-bold">{agent.name}</h3>
//                   <p className="text-sm text-gray-500">Email: {agent.email}</p>
//                   <p className="text-sm text-gray-500">Phone: {agent.phone}</p>
//                 </div>
//                 <button
//                   onClick={() => approveAgent(agent._id)}
//                   className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
//                 >
//                   Approve
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
















import ApproveAgentsSignup from '@/app/components/admin/ApproveAgentsSignup'

const AgentsApprovalPage = () => {
  return (
    <div>
      <ApproveAgentsSignup />
    </div>
  )
}

export default AgentsApprovalPage