import Router from 'next/router';
import Header from '../../components/Header';
import DashboardPanel from '../../components/Dashboard/DashboardPanel';

const Dashboard = ({ authenticated, id, role, jwt }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="public" firstname={jwt.firstname} />
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
      ? process.env.ROOT_URL
      : 'http://localhost:5000';
  const res = await fetch(`${host}/api/auth`, {
    headers: {
      cookie
    }
  });

  const jwt = await res.json();
  if (res.status === 401 && !ctx.req) {
    Router.replace('/login');
  }

  if (res.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  }
  if (!ctx.req) {
    Router.replace('/dashboard/profile');
  }

  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/dashboard/profile'
    });
    ctx.res.end();
  }
  return { authenticated: true, id: jwt.sub, role: jwt.message.role, jwt: jwt.message };
};

export default Dashboard;
