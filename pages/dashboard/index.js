import Router from 'next/router';
import Header from '../../components/Header';
import DashboardPanel from '../../components/Dashboard/DashboardPanel';

const Dashboard = ({ authenticated, id, role }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="public" />
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
  console.log(json);
  
  if (res.status === 401 && !ctx.req) {
    Router.replace('/login');
  }

  if (res.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  }
  return { authenticated: true, id: json.sub, role: json.message.role };
};

export default Dashboard;
