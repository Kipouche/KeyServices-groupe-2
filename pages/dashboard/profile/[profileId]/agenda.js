import Router from 'next/router';
import Header from '../../../../components/Header';
import DashboardPanel from '../../../../components/Dashboard/DashboardPanel';
import Calendar from '../../../../components/Calendar';

const Profile = ({
  authenticated,
  profile,
  properties,
  periods,
  id,
  role,
  jwt
}) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="agenda" firstname={jwt.firstname} />
          <div className="column columns auto">
            <Calendar properties={properties} periods={periods} />
          </div>
        </div>
      </section>
    </>
  );
};

Profile.getInitialProps = async (ctx) => {
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
    const resProfile = await fetch(`${host}/api/profile/${profileId}`, {
      headers: {
        cookie
      }
    });
    if (resProfile.status === 200) {
      const profile = await resProfile.json();
      const resProperties = await fetch(
        `${host}/api/profile/${profileId}/property`,
        {
          headers: {
            cookie
          }
        }
      );
      if (resProperties.status === 200) {
        const properties = await resProperties.json();
        const resPeriods = await fetch(
          `${host}/api/profile/${profileId}/period`,
          {
            headers: {
              cookie
            }
          }
        );
        if (resPeriods.status === 200) {
          const periods = await resPeriods.json();
          return {
            authenticated: true,
            profile: profile[0],
            properties,
            periods,
            id: jwt.message.sub,
            role: jwt.message.role,
            jwt: jwt.message
          };
        }
      }
    }
  }
  return { authenticated: false };
};

export default Profile;
