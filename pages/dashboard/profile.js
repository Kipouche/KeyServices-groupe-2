import Router from 'next/router';
import { useState } from 'react';
import Header from '../../components/Header';
import DashboardPanel from '../../components/DashboardPanel';

const Profile = ({ authenticated, profile, id }) => {
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const [error, setError] = useState('');
  const [firstname, setFirstname] = useState(profile.firstname);
  const [lastname, setLastname] = useState(profile.lastname);
  const [dateofbirth, setDateofbirth] = useState(profile.dateofbirth);
  const [phonenumber, setPhonenumber] = useState(profile.phonenumber);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(id);

    const res = await fetch(`/api/profile/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname,
        lastname,
        dateofbirth,
        phonenumber
      })
    });
    setLoading(false);
    if (res.status === 200) {
      setError('');
      setValidate(true);
    } else {
      const errorMessage = await res.json();
      setError(errorMessage.message);
      setValidate(false);
    }
  };

  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <div className="column is-3">
            <DashboardPanel />
          </div>
          <div className="column auto">
            <h1 className="title">Profile</h1>
            <form onSubmit={handleSubmit} className="is-centered">
              <div className="field is-grouped">
                <div className="control">
                  <label className="label">firstname</label>
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    className="input"
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">lastname</label>
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    className="input"
                    type="text"
                    name="lastname"
                    placeholder="lastname"
                    required
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <label className="label">Date of birth</label>
                  <input
                    onChange={(e) => setDateofbirth(e.target.value)}
                    value={dateofbirth}
                    className="input"
                    type="date"
                    name="dateofbirth"
                    placeholder="jj/mm/aaaa"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Phone number</label>
                  <input
                    onChange={(e) => setPhonenumber(e.target.value)}
                    value={phonenumber}
                    className="input"
                    pattern="(0|\+33)[1-9]( *[0-9]{2}){4}"
                    type="tel"
                    name="phonenumber"
                    placeholder="phone number"
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
              {validate ? (
                <div className="has-text-success">
                  <p>Your profile has been updated</p>
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
                      update
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

Profile.getInitialProps = async (ctx) => {
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
    const resProfile = await fetch(`${host}/api/profile/${jwt.message.sub}`, {
      headers: {
        cookie
      }
    });
    if (resProfile.status === 200) {
      const profile = await resProfile.json();
      return { authenticated: true, profile: profile[0], id: jwt.message.sub };
    }
  }
  return { authenticated: false };
};

export default Profile;
