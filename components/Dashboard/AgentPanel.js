import Link from 'next/link';

const AgentPanel = () => (
  <>
    <Link href="/dashboard/agent/property/all">
      <a className="panel-block">Tous les biens</a>
    </Link>
    <Link href="/dashboard/agent/property/unvalidated">
      <a className="panel-block">Biens invalides</a>
    </Link>
    <Link href="/dashboard/agent/profiles">
      <a className="panel-block">Profils</a>
    </Link>
  </>
);

export default AgentPanel;
