import Link from 'next/link';

const PublicPanel = () => (
  <>
    <Link href="/dashboard/profile">
      <a className="panel-block">Profil</a>
    </Link>
    <Link href="/dashboard/property/add">
      <a className="panel-block">Ajouter un bien</a>
    </Link>
    <Link href="/dashboard/property">
      <a className="panel-block">Mes biens</a>
    </Link>
    <Link href="/dashboard/rentals">
      <a className="panel-block">Locations</a>
    </Link>
    <Link href="/explore">
      <a className="panel-block">Explorer</a>
    </Link>
  </>
);

export default PublicPanel;
