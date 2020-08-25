import Router from 'next/router';
import Header from '../../../components/Header';
import DashboardPanel from '../../../components/Dashboard/DashboardPanel';
import ProfilesTable from '../../../components/ProfilesTable';

const Profiles = ({ authenticated, profiles, id, role }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="agent" />
          <ProfilesTable profiles={profiles} />
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
      ? 'https://keyserviceshost.vercel.app/'
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
    const resProfiles = await fetch(`${host}/api/agent/profile`, {
      headers: {
        cookie
      }
    });
    if (resProfiles.status === 200) {
      const profiles = await resProfiles.json();
      return {
        authenticated: true,
        profiles,
        id: jwt.message.sub,
        role: jwt.message.role
      };
    }
  }
  return { authenticated: false, users: [] };
};

export default Profiles;
