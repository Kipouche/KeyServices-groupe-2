import { useState } from 'react';

import PublicPanel from './PublicPanel';
import AgentPanel from './AgentPanel';

const DashboardAgentPanel = ({ tab }) => {
  const [panel, setPanel] = useState(tab);

  return (
    <nav className="">
      <p className="panel-tabs is-boxed">
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
