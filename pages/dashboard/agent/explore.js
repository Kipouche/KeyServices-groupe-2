import Router from 'next/router';
import { useCallback, useState } from 'react';
import Header from '../../../components/Header';
import PropertyCards from '../../../components/PropertyCards';
import FilterSearch from '../../../components/FilterSearch';
import DashboardPanel from '../../../components/Dashboard/DashboardPanel';

const Explore = ({ authenticated, properties, role, jwt }) => {
  const [propertiesState, setProperties] = useState(properties);
  const handleSubmit = useCallback(
    async ({ area, bed, bathroom, room, district, priceMin, priceMax }) => {
      const res = await fetch(
        `/api/agent/property?area=${area}&bed=${bed}&bathroom=${bathroom}&room=${room}&district=${district}&priceMin=${priceMin}&priceMax=${priceMax}`,
        {
          method: 'GET',
          header: { 'Content-Type': 'application/json' }
        }
      );
      if (res.status === 200) {
        const json = await res.json();
        setProperties(json);
      }
    },
    []
  );

  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="explore" firstname={jwt.firstname} />
          <FilterSearch handleSubmit={handleSubmit} />
          <PropertyCards properties={propertiesState} />
        </div>
      </section>
    </>
  );
};

Explore.getInitialProps = async (ctx) => {
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
    let properties = [];
    const resProperties = await fetch(`${host}/api/agent/property`);
    if (resProperties.status === 200) {
      properties = await resProperties.json();
      return {
        authenticated: true,
        properties,
        jwt: jwt.message,
        id: jwt.message.sub,
        role: jwt.message.role
      };
    }
  }
  return { authenticated: false };
};

export default Explore;
