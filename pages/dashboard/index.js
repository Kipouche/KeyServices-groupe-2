import Router from 'next/router';
import Header from '../../components/Header';
import DashboardPanel from '../../components/DashboardPanel';

const Dashboard = ({ authenticated }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <div className="column is-2">
            <DashboardPanel />
          </div>
          <div className="column auto">
            <p>Dashboard</p>
          </div>
        </div>
      </section>
    </>
  );
};

Dashboard.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const host =
    process.env.NODE_ENV !== 'development'
      ? 'https://keyserviceshost.vercel.app/'
      : 'http://localhost:5000';
  const res = await fetch(`${host}/api/auth`, {
    headers: {
      cookie
    }
  });

  const json = await res.json();
  if (res.status === 401 && !ctx.req) {
    Router.replace('/login');
  }

  if (res.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  }
  return { authenticated: true };
};

export default Dashboard;
