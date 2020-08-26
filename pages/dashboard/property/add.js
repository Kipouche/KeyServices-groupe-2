import Router from 'next/router';
import { useState } from 'react';
import Header from '../../../components/Header';
import DashboardPanel from '../../../components/Dashboard/DashboardPanel';

const Add = ({ authenticated, id, role }) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('paris');
  const [district, setDistrict] = useState();
  const [area, setArea] = useState();
  const [room, setRoom] = useState();
  const [bed, setBed] = useState();
  const [bathroom, setBathroom] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/profile/${id}/property`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        address,
        city,
        district: parseInt(district, 10),
        area: parseInt(area, 10),
        room: parseInt(room, 10),
        bed: parseInt(bed, 10),
        bathroom: parseInt(bathroom, 10)
      })
    });
    setLoading(false);
    if (res.status === 200) {
      setError('');
      Router.push('/dashboard/property');
    } else {
      const errorMessage = await res.json();
      setError(errorMessage.message);
    }
  };

  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="public" />
          <div className="column auto">
            <h1 className="title">Property</h1>
            <form onSubmit={handleSubmit} className="is-centered">
              <div className="field is-grouped">
                <div className="control">
                  <label className="label">Address</label>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="input"
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="control is-hidden">
                  <label className="label">City</label>
                  <input
                    hidden
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    className="input"
                    type="hidden"
                    name="city"
                    placeholder="City"
                    required
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <label className="label">District</label>
                  <input
                    onChange={(e) => setDistrict(parseInt(e.target.value, 10))}
                    value={district}
                    className="input"
                    type="number"
                    name="district"
                    placeholder="District"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Area</label>
                  <input
                    onChange={(e) => setArea(parseInt(e.target.value, 10))}
                    value={area}
                    className="input"
                    type="number"
                    name="area"
                    placeholder="Area"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Room</label>
                  <input
                    onChange={(e) => setRoom(parseInt(e.target.value, 10))}
                    value={room}
                    className="input"
                    type="number"
                    name="room"
                    placeholder="Room"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Bed</label>
                  <input
                    onChange={(e) => setBed(parseInt(e.target.value, 10))}
                    value={bed}
                    className="input"
                    type="number"
                    name="bed"
                    placeholder="Bed"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Bathroom</label>
                  <input
                    onChange={(e) => setBathroom(parseInt(e.target.value, 10))}
                    value={bathroom}
                    className="input"
                    type="number"
                    name="bathroom"
                    placeholder="Bathroom"
                    required
                  />
                </div>
              </div>
              {error ? (
                <div className="has-text-danger">
                  <p>{error}</p>
                </div>
              ) : (
                []
              )}
              <div className="field">
                <div className="control">
                  <div className="buttons">
                    <button
                      className={`button is-link has-text-white ${
                        loading ? 'is-loading' : ''
                      }`}
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

Add.getInitialProps = async (ctx) => {
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
    return { authenticated: true, id: jwt.message.sub, role: jwt.message.role };
  }
  return { authenticated: false };
};

export default Add;
