// // app/agents/[agentId]/dashboard/page.jsx
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AgentDashboard({ params }) {
//   const { agentId } = params; // Get agentId from URL
//   const [agentData, setAgentData] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchAgentData() {
//       const response = await fetch(`/api/agents/${agentId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setAgentData(data);
//       } else {
//         router.push('/404'); // Redirect to 404 if agent not found
//       }
//     }

//     fetchAgentData();
//   }, [agentId, router]);

//   if (!agentData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Welcome {agentData.name}!</h1>
//       <p>Email: {agentData.email}</p>
//       {/* Add more dashboard details here */}
//     </div>
//   );
// }





// 'use client'
// // app/agents/[agentId]/dashboard/page.jsx
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AgentDashboard({ params }) {
//   const { agentId } = params; // Get agentId from URL
//   const [agentData, setAgentData] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchAgentData() {
//       const response = await fetch(`/api/agents/${agentId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setAgentData(data); 
//       } else {
//         router.push('/404'); // Redirect to 404 if agent not found
//       }
//     }

//     fetchAgentData();
//   }, [agentId, router]);

//   if (!agentData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4  mt-16">
//       <h1 className="text-2xl font-bold">Welcome {agentData.name}!</h1>
//       <p>Email: {agentData.email}</p>
//       {/* Add more dashboard details here */}
//     </div>
//   );
// }












// // app/agents/[agentId]/dashboard/page.jsx
// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import AddProperty from '@/app/components/AddProperty';

// export default function AgentDashboard({ params }) {
//   const { agentId } = params; // Get agentId from URL
//   const [agentData, setAgentData] = useState(null);
//   const [showModal, setShowModal] = useState(false); // Control modal visibility
//   const [notifications, setNotifications] = useState([]); // Notifications for property submissions
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchAgentData() {
//       const response = await fetch(`/api/agents/${agentId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setAgentData(data);
//         fetchNotifications(); // Fetch property submission status
//       } else {
//         router.push('/404'); // Redirect to 404 if agent not found
//       }
//     }

//     async function fetchNotifications() {
//       const notifResponse = await fetch(`/api/agents/${agentId}/notifications`);
//       const notifData = await notifResponse.json();
//       setNotifications(notifData);
//     }

//     fetchAgentData();
//   }, [agentId, router]);

//   const handleLogout = () => {
//     // Clear session data (you can use session management or NextAuth logout)
//     router.push('/login'); // Redirect to login after logout
//   };

//   const closeModal = () => setShowModal(false);

//   if (!agentData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4 mt-16">
//       <h1 className="text-2xl font-bold">Welcome {agentData.name}!</h1>
//       <p>Email: {agentData.email}</p>

//       {/* Logout Button */}
//       <button
//         className="bg-red-500 text-white px-4 py-2 rounded mt-4"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>

//       {/* Add Property Button */}
//       <button
//         className="bg-[#FF7F50] text-white px-4 py-2 rounded mt-4"
//         onClick={() => setShowModal(true)}
//       >
//         Add Property
//       </button>

//       {/* Modal for adding property */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
//             <h3 className="text-2xl font-bold mb-4">Add New Property</h3>
//             <AddProperty closeModal={closeModal} agentId={agentId} />
//           </div>
//         </div>
//       )}

//       {/* Property Notifications */}
//       <h2 className="mt-8 text-xl font-bold">Property Submission Status</h2>
//       <ul className="mt-4">
//         {notifications.length > 0 ? (
//           notifications.map((notif) => (
//             <li key={notif.id} className="bg-gray-100 p-4 rounded mt-2">
//               <p>
//                 <strong>{notif.title}</strong> - {notif.status}
//               </p>
//             </li>
//           ))
//         ) : (
//           <p>No property submissions yet.</p>
//         )}
//       </ul>
//     </div>
//   );
// }

















'use client';
// app/agents/[agentId]/dashboard/page.jsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AddProperty from '@/app/components/AddProperty'; // Now it will be used
import Link from 'next/link';

export default function AgentDashboard({ params }) {
  const { agentId } = params; // Get agentId from URL
  const [agentData, setAgentData] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control AddProperty modal
  const router = useRouter();

  useEffect(() => {
    async function fetchAgentData() {
      const response = await fetch(`/api/agents/${agentId}`);
      if (response.ok) {
        const data = await response.json();
        setAgentData(data); 
      } else {
        router.push('/404'); // Redirect to 404 if agent not found
      }
    }

    fetchAgentData();
  }, [agentId, router]);

  // Function to handle logout
  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' }); // Assume there's a logout endpoint
    router.push('/auth/signin'); // Redirect to login page after logout
  };

  // Function to handle modal open/close
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  if (!agentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 mt-16">
      <h1 className="text-2xl font-bold">Welcome {agentData.name}!</h1>
      <p>Email: {agentData.email}</p>

      <button 
        className="bg-red-500 text-white p-2 rounded-md mt-4" 
        onClick={handleLogout}>
        Logout
      </button>

      <button
  
        className="bg-blue-500 text-white p-2 rounded-md mt-4 ml-4"
        onClick={openModal}>
        Add New Property
      </button>

      {showModal && (
        <div className=" bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <AddProperty /> {/* AddProperty component shown inside modal */}
            <button
              className="bg-gray-300 text-black p-2 rounded-md mt-4"
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
