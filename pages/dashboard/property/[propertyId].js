import Router from 'next/router';
import Header from '../../../components/Header';
import DashboardPanel from '../../../components/Dashboard/DashboardPanel';

const Property = ({ authenticated, id, property, role }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="public" />
          <div className="column auto">
            <figure className="image is-3by1">
              <img
                style={{ objectFit: 'cover' }}
                src={`/pictures/${property.id}_1.jpg`}
                alt="preview"
              />
            </figure>
            <div className="section">
              <h1 className="title">{property.title}</h1>
              <p>{property.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Property.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const { propertyId } = ctx.query;
  const host =
    process.env.NODE_ENV !== 'development'
      ? process.env.ROOT_URL
      : 'http://localhost:5000';
  const res = await fetch(`${host}/api/auth`, {
    headers: {
      cookie
    }
  });

  const json = await res.json();
  if (res.status === 401 && !ctx.req) {
    Router.replace('/login');
  }

  if (res.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  }
  const resProperty = await fetch(`${host}/api/property/${propertyId}`);
  if (resProperty.status === 200) {
    const property = await resProperty.json();
    return {
      authenticated: true,
      id: json.sub,
      property,
      role: json.message.role
    };
  }
  if (!ctx.req) {
    Router.replace('/dashboard');
  }

  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/dashboard'
    });
    ctx.res.end();
  }
};

export default Property;
