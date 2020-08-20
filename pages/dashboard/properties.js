import Header from '../../components/Header';
import DashboardPanel from '../../components/DashboardPanel';

const Properties = ({ authenticated, properties, id }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <div className="column is-3">
            <DashboardPanel />
          </div>
          <div className="columns">
            {properties.map((property) => {
              return (
                <div className="column">
                  <p>
                    <strong>Address</strong>
                    {property.address}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

Properties.getInitialProps = async (ctx) => {
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
    const resProperties = await fetch(
      `${host}/api/profile/${jwt.message.sub}/property`,
      {
        headers: {
          cookie
        }
      }
    );
    if (resProperties.status === 200) {
      const properties = await resProperties.json();
      return { authenticated: true, properties, id: jwt.message.sub };
    }
  }
  return { authenticated: false, properties: [] };
};

export default Properties;
