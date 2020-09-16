import Router from 'next/router';
import Header from '../../../../../components/Header';
import DashboardPanel from '../../../../../components/Dashboard/DashboardPanel';
import TodosTable from '../../../../../components/TodosTable';

const Profiles = ({ authenticated, todos, id, role, jwt }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="fieldworker/history" firstname={jwt.firstname} />
          <TodosTable todos={todos} />
          <div />
        </div>
      </section>
    </>
  );
};

Profiles.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const { profileId } = ctx.query;
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
      jwt.message.role !== 'fieldworker' &&
      !ctx.req
    ) {
      Router.replace('/dashboard');
      return {};
    }

    if (
      jwt.message.role !== 'admin' &&
      jwt.message.role !== 'agent' &&
      jwt.message.role !== 'fieldworker' &&
      ctx.req
    ) {
      ctx.res.writeHead(302, {
        Location: '/dashboard'
      });
      ctx.res.end();
      return {};
    }
    const resTodos = await fetch(
      `${host}/api/fieldworker/profile/${profileId}/todo?option=withAddress`,
      {
        headers: {
          cookie
        }
      }
    );
    if (resTodos.status === 200) {
      const todos = await resTodos.json();
      return {
        authenticated: true,
        todos,
        jwt: jwt.message,
        id: jwt.message.sub,
        role: jwt.message.role
      };
    }
  }
  return { authenticated: false, profiles: [] };
};

export default Profiles;
