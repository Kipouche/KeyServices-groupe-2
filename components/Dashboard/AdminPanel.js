import Link from 'next/link';

const AdminPanel = () => (
  <>
    <Link href="/dashboard/admin/profiles">
      <a className="panel-block">Profiles</a>
    </Link>
  </>
);

export default AdminPanel;
