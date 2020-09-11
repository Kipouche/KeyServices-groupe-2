import Router from 'next/router';
import GoogleMapReact from 'google-map-react';
import Header from '../../../components/Header';
import DashboardPanel from '../../../components/Dashboard/DashboardPanel';

const Property = ({ authenticated, id, property, role }) => {
  const handleApiLoaded = (map, maps, address) => {
    const geocoder = new maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        const marker = new maps.Marker({
          position: results[0].geometry.location,
          map,
          animation: maps.Animation.DROP,
          title: { address },
          label: 'A'
        });
        return marker;
      }
      return `Geocode was not successful for the following reason: ${status}`;
    });
  };

  const defaultProps = {
    center: {
      lat: 48.8,
      lng: 2.4
    },
    zoom: 11
  };
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
            <div className="container is-fluid">
              <GoogleMapReact
                style={{ height: `500px` }}
                bootstrapURLKeys={{
                  key: 'AIzaSyCOCwLWsDgniFY8vUK0igKTk_qB1WtGCCk'
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                  handleApiLoaded(
                    map,
                    maps,
                    `${property.address} ${property.district}`
                  )
                }
              />
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
