import Router from 'next/router';
import Header from '../../../../../components/Header';
import DashboardPanel from '../../../../../components/Dashboard/DashboardPanel';
import CalendarFieldWorker from '../../../../../components/CalendarFieldWorker';

const Agenda = ({
  authenticated,
  profileId,
  properties,
  todos,
  id,
  role,
  jwt
}) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel
            role={role}
            tab="fieldworker/agenda"
            firstname={jwt.firstname}
          />
          <div className="column columns is-10">
            <CalendarFieldWorker
              properties={properties}
              profileId={profileId}
              todos={todos}
              role={role}
            />
          </div>
        </div>
      </section>
    </>
  );
};

Agenda.getInitialProps = async (ctx) => {
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
  const { profileId } = ctx.query;

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
    const resProperties = await fetch(`${host}/api/agent/property`, {
      headers: {
        cookie
      }
    });
    if (resProperties.status === 200) {
      const properties = await resProperties.json();
      const resTodos = await fetch(
        `${host}/api/fieldworker/profile/${profileId}/todo`,
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
          properties,
          todos,
          profileId,
          id: jwt.message.sub,
          role: jwt.message.role,
          jwt: jwt.message
        };
      }
    }
  }
  return { authenticated: false };
};

export default Agenda;
