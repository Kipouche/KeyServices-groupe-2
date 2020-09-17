import Router from 'next/router';
import Header from '../../../../../components/Header';
import DashboardPanel from '../../../../../components/Dashboard/DashboardPanel';
import CalendarAgent from '../../../../../components/CalendarAgent';

const Agenda = ({
  authenticated,
  profileId,
  properties,
  rents,
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
            tab="agent/agenda"
            firstname={jwt.firstname}
          />
          <div className="column columns auto">
            <CalendarAgent
              properties={properties}
              profileId={profileId}
              rents={rents}
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
      const resRents = await fetch(
        `${host}/api/agent/profile/${profileId}/rent`,
        {
          headers: {
            cookie
          }
        }
      );
      if (resRents.status === 200) {
        const rents = await resRents.json();
        return {
          authenticated: true,
          properties,
          rents,
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
