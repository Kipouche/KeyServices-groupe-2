import Router from 'next/router';
import Header from '../../../components/Header';
import DashboardPanel from '../../../components/Dashboard/DashboardPanel';
import FieldWorkersTable from '../../../components/FieldWorkersTable';

const Profiles = ({ authenticated, profiles, id, role, jwt }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="fieldworkers" firstname={jwt.firstname} />
          <FieldWorkersTable profiles={profiles} />
          <div />
        </div>
      </section>
    </>
  );
};

Profiles.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const host =
    process.env.NODE_ENV !== 'development'
      ? process.env.ROOT_URL
      : 'http://localhost:5000';
  const resAuth = await fetch(`${host}/api/auth`, {
    headers: {
      cookie
    }
  });
  if (resAuth.status === 401 && !ctx.req) {
    Router.replace('/login');
  }

  if (resAuth.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  }
  if (resAuth.status === 200) {
    const jwt = await resAuth.json();
    if (
      jwt.message.role !== 'admin' &&
      jwt.message.role !== 'agent' &&
      !ctx.req
    ) {
      Router.replace('/dashboard');
      return {};
    }

    if (
      jwt.message.role !== 'admin' &&
      jwt.message.role !== 'agent' &&
      ctx.req
    ) {
      ctx.res.writeHead(302, {
        Location: '/dashboard'
      });
      ctx.res.end();
      return {};
    }
    const resProfiles = await fetch(`${host}/api/agent/fieldworker`, {
      headers: {
        cookie
      }
    });
    if (resProfiles.status === 200) {
      const profiles = await resProfiles.json();
      return {
        authenticated: true,
        profiles,
        jwt: jwt.message,
        id: jwt.message.sub,
        role: jwt.message.role
      };
    }
  }
  return { authenticated: false, profiles: [] };
};

export default Profiles;
