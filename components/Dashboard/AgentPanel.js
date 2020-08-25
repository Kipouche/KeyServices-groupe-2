import Link from 'next/link';

const AgentPanel = () => (
  <>
    <Link href="/dashboard/agent/property/all">
      <a className="panel-block">All Properties</a>
    </Link>
    <Link href="/dashboard/agent/property/unvalidated">
      <a className="panel-block">Unvalidated Properties</a>
    </Link>
    <Link href="/dashboard/agent/profiles">
      <a className="panel-block">Profiles</a>
    </Link>
  </>
);

export default AgentPanel;
