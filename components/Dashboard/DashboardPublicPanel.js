import PublicPanel from './PublicPanel';

const DashboardPublicPanel = () => {
  return (
    <nav className="">
      <p className="panel-tabs">
        <a className="is-active">Publique</a>
      </p>
      <PublicPanel />
    </nav>
  );
};

export default DashboardPublicPanel;
