import Link from 'next/link';

const DashboardPanel = ({ role, tab, firstname }) => {
  const firstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  firstname = firstLetterUpperCase(firstname);

  return (
    <div className="column is-2">
      <aside className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <Link href="/dashboard/profile">
              <a className={tab === 'profil' ? 'is-active' : ''}>Profil</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile/modify">
              <a className={tab === 'modify' ? 'is-active' : ''}>Modifier Profil</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/rentals">
              <a className={tab === 'rentals' ? 'is-active' : ''}>Locations</a>
            </Link>
          </li>
        </ul>
        {role === 'agent' || role === 'admin' ? (
          <>
            <p className="menu-label">Agent</p>
            <ul className="menu-list">
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
            </ul>{' '}
          </>
        ) : (
          []
        )}
        {role === 'admin' ? (
          <>
            <p className="menu-label">Administration</p>
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
