import AddProperty from '@/components/AddProperty';
import { useState, useEffect } from 'react';

export default function AgentDashboard() {
  const [agentId, setAgentId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch the agent ID from the API we just created
    const fetchAgentId = async () => {
      try {
        const response = await fetch('/api/agents/me');
        const data = await response.json();

        if (response.ok) {
          setAgentId(data.agentId);
        } else {
          console.error('Error fetching agent data:', data.error);
        }
      } catch (error) {
        console.error('Failed to fetch agent data:', error);
      }
    };

    fetchAgentId();
  }, []);

  const handleAddPropertyClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="agent-dashboard">
      <button onClick={handleAddPropertyClick}>Add New Property</button>

      {showModal && agentId && (
        <div className="modal">
          <AddProperty closeModal={closeModal} agentId={agentId} />
        </div>
      )}
    </div>
  );
}
