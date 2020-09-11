import PublicPanel from './PublicPanel';

const DashboardPublicPanel = ({ firstname }) => {
  return (
    <nav className="panel">
      <p className="panel-heading">Bonjour, {firstname}</p>
      <p className="panel-tabs">
        <a className="is-active">Publique</a>
      </p>
      <PublicPanel />
    </nav>
  );
};

export default DashboardPublicPanel;
