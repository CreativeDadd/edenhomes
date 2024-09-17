// app/components/admin/ApproveAgentsSignup.jsx
'use client';
import { useEffect, useState } from 'react';

export default function ApproveAgentsSignup() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function fetchPendingAgents() {
      const res = await fetch('/api/admin/pending-agents');
      const data = await res.json();
      setAgents(data);
    }

    fetchPendingAgents();
  }, []);

  const handleApprove = async (agentId) => {
    await fetch(`/api/admin/approve-agent/${agentId}`, {
      method: 'PATCH',
    });
    setAgents(agents.filter((agent) => agent._id !== agentId));
  };

  const handleReject = async (agentId) => {
    await fetch(`/api/admin/reject-agent/${agentId}`, {
      method: 'DELETE',
    });
    setAgents(agents.filter((agent) => agent._id !== agentId));
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="text-3xl font-bold text-center text-black">Pending Agent Signups</h1>

      <div className="grid grid-cols-1 gap-6 mt-8">
        {agents.map((agent) => (
          <div key={agent._id} className="bg-gray-100 p-4 rounded-lg shadow-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{agent.name}</h3>
              <p className="text-gray-600">{agent.email}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleApprove(agent._id)}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(agent._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
