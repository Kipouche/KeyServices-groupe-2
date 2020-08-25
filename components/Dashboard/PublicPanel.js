import Link from 'next/link';

const PublicPanel = () => (
  <>
    <Link href="/dashboard/profile">
      <a className="panel-block">Profile</a>
    </Link>
    <Link href="/dashboard/property/add">
      <a className="panel-block">Add Property</a>
    </Link>
    <Link href="/dashboard/property">
      <a className="panel-block">My Properties</a>
    </Link>
    <Link href="/dashboard/rentals">
      <a className="panel-block">Rentals</a>
    </Link>
    <Link href="/explore">
      <a className="panel-block">Explore</a>
    </Link>
  </>
);

export default PublicPanel;
