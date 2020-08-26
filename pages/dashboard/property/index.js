import Router from 'next/router';

import Header from '../../../components/Header';
import DashboardPanel from '../../../components/Dashboard/DashboardPanel';
import PropertyCards from '../../../components/PropertyCards';

const Properties = ({ authenticated, properties, id, role }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="public" />
          <PropertyCards properties={properties} />
        </div>
      </section>
    </>
  );
};

Properties.getInitialProps = async (ctx) => {
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
      return {
        authenticated: true,
        properties,
        id: jwt.message.sub,
        role: jwt.message.role
      };
    }
  }
  return { authenticated: false, properties: [] };
};

export default Properties;
