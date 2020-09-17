import Link from 'next/link';

const DashboardPanel = ({ role, tab, firstname }) => {
  const firstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  firstname = firstLetterUpperCase(firstname);

  return (
    <div className="column is-2">
      <aside className="menu">
        <p className="menu-label has-text-weight-semibold has-text-dark">General</p>
        <ul className="menu-list">
          <li>
            <Link href="/dashboard/profile">
              <a className={tab === 'profil' ? 'is-active' : ''}>Profil</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile/modify">
              <a className={tab === 'modify' ? 'is-active' : ''}>
                Modifier Profil
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile/agenda">
              <a className={tab === 'agenda' ? 'is-active' : ''}>Agenda</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile/rents">
              <a className={tab === 'rents' ? 'is-active' : ''}>Locations</a>
            </Link>
          </li>
        </ul>
        {role === 'agent' || role === 'admin' ? (
          <>
            <p className="menu-label has-text-weight-semibold has-text-dark">Agent</p>
            <ul className="menu-list">
              <li>
                <Link href="/dashboard/agent/agenda">
                  <a className={tab === 'agent/agenda' ? 'is-active' : ''}>
                    Agenda Airbnb
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/agent/profiles">
                  <a className={tab === 'clients' ? 'is-active' : ''}>
                    Clients
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/agent/explore">
                  <a className={tab === 'explore' ? 'is-active' : ''}>
                    Explorer
                  </a>
                </Link>
              </li>
            </ul>
          </>
        ) : (
          []
        )}
        {role === 'agent' || role === 'admin' || role === 'fieldworker' ? (
          <>
            <p className="menu-label has-text-weight-semibold has-text-dark">Agent de Terrain</p>
            <ul className="menu-list">
              <li>
                <Link href="/dashboard/fieldworker/agenda">
                  <a
                    className={tab === 'fieldworker/agenda' ? 'is-active' : ''}
                  >
                    Agenda
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/fieldworker/history">
                  <a
                    className={tab === 'fieldworker/history' ? 'is-active' : ''}
                  >
                    Historique
                  </a>
                </Link>
              </li>
            </ul>
          </>
        ) : (
          []
        )}
        {role === 'admin' ? (
          <>
            <p className="menu-label has-text-weight-semibold has-text-dark">Administration</p>
            <ul className="menu-list">
              <li>
                <Link href="/dashboard/admin/profiles">
                  <a className={tab === 'profils' ? 'is-active' : ''}>
                    Profils
                  </a>
                </Link>
              </li>
            </ul>
          </>
        ) : (
          []
        )}
      </aside>
    </div>
  );
};

export default DashboardPanel;
