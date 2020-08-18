import Link from 'next/link';

const DashboardPanel = () => {
  return (
    <nav className="">
      <p className="panel-tabs">
        <a className="is-active">Public</a>
        <a>Agent</a>
        <a>Admin</a>
      </p>
      <Link href="/dashboard/profile">
        <a className="panel-block">Profile</a>
      </Link>
      <Link href="/dashboard/profile">
        <a className="panel-block">My Properties</a>
      </Link>
      <Link href="/dashboard/rentals">
        <a className="panel-block">Rentals</a>
      </Link>
      <Link href="/explore">
        <a className="panel-block">Explore</a>
      </Link>
      <div className="panel-block">
        <button className="button is-link is-outlined is-fullwidth">
          Reset Password
        </button>
      </div>
    </nav>
  );
};

export default DashboardPanel;
