import { useState } from 'react';

import PublicPanel from './PublicPanel';
import AgentPanel from './AgentPanel';

const DashboardAgentPanel = ({ tab, firstname }) => {
  const [panel, setPanel] = useState(tab);

  return (
    <nav className="panel">
      <p className="panel-heading">Bonjour, {firstname}</p>
      <p className="panel-tabs">
        <a
          onClick={() => setPanel('public')}
          type="button"
          className={panel === 'public' ? 'is-active' : ''}
        >
          Publique
        </a>
        <a
          onClick={() => setPanel('agent')}
          type="button"
          className={panel === 'agent' ? 'is-active' : ''}
        >
          Agent
        </a>
      </p>
      {panel === 'public' ? <PublicPanel /> : []}
      {panel === 'agent' ? <AgentPanel /> : []}
    </nav>
  );
};

export default DashboardAgentPanel;
