import { useState } from 'react';

import PublicPanel from './PublicPanel';
import AgentPanel from './AgentPanel';
import AdminPanel from './AdminPanel';

const DashboardAgentPanel = () => {
  const [panel, setPanel] = useState('public');

  return (
    <nav className="">
      <p className="panel-tabs">
        <a
          onClick={() => setPanel('public')}
          type="button"
          className={panel === 'public' ? 'is-active' : ''}
        >
          Public
        </a>
        <a
          onClick={() => setPanel('agent')}
          type="button"
          className={panel === 'agent' ? 'is-active' : ''}
        >
          Agent
        </a>
        <a
          onClick={() => setPanel('admin')}
          type="button"
          className={panel === 'admin' ? 'is-active' : ''}
        >
          Admin
        </a>
      </p>
      {panel === 'public' ? <PublicPanel /> : []}
      {panel === 'agent' ? <AgentPanel /> : []}
      {panel === 'admin' ? <AdminPanel /> : []}
      <div className="panel-block">
        <button
          type="button"
          className="button is-link is-outlined is-fullwidth"
        >
          Reset Password
        </button>
      </div>
    </nav>
  );
};

export default DashboardAgentPanel;
