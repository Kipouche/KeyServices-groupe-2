import { useCallback, useState } from 'react';
import Header from '../components/Header';
import PropertyCards from '../components/PropertyCards';
import FilterSearch from '../components/FilterSearch';

const Explore = ({ authenticated, properties }) => {
  const [propertiesState, setProperties] = useState(properties);
  const handleSubmit = useCallback(async ({ area, bed, bathroom, room, district, priceMin, priceMax }) => {
    const res = await fetch(`/api/property?area=${area}&bed=${bed}&bathroom=${bathroom}&room=${room}&district=${district}&priceMin=${priceMin}&priceMax=${priceMax}`, {
      method: 'GET',
      header: { 'Content-Type': 'application/json' },
    });
    if (res.status === 200) {
      const json = await res.json();
      setProperties(json);
    }
  }, []);

  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <div className="column is-3">
            <FilterSearch handleSubmit={handleSubmit} />
          </div>
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
  let authenticated = false;
  if (resAuth.status === 200) {
    authenticated = true;
  }
  let properties = [];
  const resProperties = await fetch(`${host}/api/property`);
  if (resProperties.status === 200) {
    properties = await resProperties.json();
  }
  return { authenticated, properties };
};

export default Explore;
