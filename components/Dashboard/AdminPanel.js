import Link from 'next/link';

const AdminPanel = () => (
  <>
    <Link href="/dashboard/admin/profile/list">
      <a className="panel-block">profiles</a>
    </Link>
    <Link href="/dashboard/admin/profile/create">
      <a className="panel-block">Users</a>
    </Link>
  </>
);

export default AdminPanel;
