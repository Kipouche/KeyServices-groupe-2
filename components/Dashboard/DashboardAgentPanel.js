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
          Public
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
      <div className="panel-block">
        <button
          type="button"
          className="button is-link is-outlined is-fullwidth"
        >
          Réinitialiser le mot de passe
        </button>
      </div>
    </nav>
  );
};

export default DashboardAgentPanel;
