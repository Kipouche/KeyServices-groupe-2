import DashboardPublicPanel from './DashboardPublicPanel';
import DashboardAgentPanel from './DashboardAgentPanel';
import DashboardAdminPanel from './DashboardAdminPanel';

const DashboardPanel = ({ role, tab }) => {
  return (
    <div className="column is-3">
      {role === 'member' ? <DashboardPublicPanel /> : []}
      {role === 'agent' ? <DashboardAgentPanel tab={tab} /> : []}
      {role === 'admin' ? <DashboardAdminPanel tab={tab} /> : []}
    </div>
  );
};

export default DashboardPanel;
