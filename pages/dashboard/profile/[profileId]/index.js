import Router from 'next/router';
import Link from 'next/link';
import Header from '../../../../components/Header';
import DashboardPanel from '../../../../components/Dashboard/DashboardPanel';
import ProfileCard from '../../../../components/ProfileCard';
import PropertyProfileCard from '../../../../components/PropertyProfileCard';

const Profile = ({ authenticated, profile, properties, id, role, jwt }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="profil" firstname={jwt.firstname} />
          <div className="column columns auto">
            <div className="column is-4">
              <ProfileCard
                profile={profile}
                displayChangePicture={id === profile.id}
              />
            </div>
            <div className="column mt-3">
              <h2 className="subtitle">Propriétés</h2>
              {properties.map((property) => {
                return (
                  <Link
                    key={property.id}
                    href={`/dashboard/property/${property.id}`}
                  >
                    <a>
                      <PropertyProfileCard property={property} />
                    </a>
                  </Link>
                );
              })}
              {role === 'agent' || role === 'admin' ? (
                <Link href={`/dashboard/agent/profile/${profile.id}/property/add`}>
                  <a className="button is-primary is-outlined">
                    Ajouter une propriété
                  </a>
                </Link>
              ) : (
                []
              )}
            </div>
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
        return {
          authenticated: true,
          profile: profile[0],
          properties,
          id: jwt.message.sub,
          role: jwt.message.role,
          jwt: jwt.message
        };
      }
    }
  }
  return { authenticated: false };
};

export default Profile;
