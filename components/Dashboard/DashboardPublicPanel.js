import PublicPanel from './PublicPanel';

const DashboardPublicPanel = () => {
  return (
    <nav className="">
      <p className="panel-tabs">
        <a className="is-active">Public</a>
      </p>
      <PublicPanel />
      <div className="panel-block">
        <button className="button is-link is-outlined is-fullwidth">
        Réinitialiser le mot de passe
        </button>
      </div>
    </nav>
  );
};

export default DashboardPublicPanel;
