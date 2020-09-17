import Router from 'next/router';
import Header from '../../../../components/Header';
import DashboardPanel from '../../../../components/Dashboard/DashboardPanel';
import RentsTable from '../../../../components/RentsTable';

const Profiles = ({ authenticated, rents, id, role, jwt }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="rents" firstname={jwt.firstname} />
          <RentsTable rents={rents} />
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
    const resRents = await fetch(
      `${host}/api/rent/profile/${profileId}?option=withAddressAndPrice`,
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
        rents,
        jwt: jwt.message,
        id: jwt.message.sub,
        role: jwt.message.role
      };
    }
  }
  return { authenticated: false, profiles: [] };
};

export default Profiles;
