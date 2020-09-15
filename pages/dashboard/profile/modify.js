import Router from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import DashboardPanel from '../../../components/Dashboard/DashboardPanel';

const Profile = ({ authenticated, profile, id, role, jwt }) => {
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const [error, setError] = useState('');
  const [firstname, setFirstname] = useState(profile ? profile.firstname : '');
  const [lastname, setLastname] = useState(profile ? profile.lastname : '');
  const [dateofbirth, setDateofbirth] = useState(
    profile ? profile.dateofbirth : ''
  );
  const [phonenumber, setPhonenumber] = useState(
    profile ? profile.phonenumber : ''
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
          <DashboardPanel role={role} tab="modify" firstname={jwt.firstname} />
          <div className="column auto">
            <h1 className="title">Profil</h1>
            <form onSubmit={handleSubmit} className="is-centered">
              <div className="field is-grouped">
                <div className="control">
                  <label className="label">Prénom</label>
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    className="input"
                    type="text"
                    name="firstname"
                    placeholder="Prénom"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Nom</label>
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    className="input"
                    type="text"
                    name="lastname"
                    placeholder="Nom"
                    required
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <label className="label">Date de naissance</label>
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
                  <label className="label">Numéro de téléphone</label>
                  <input
                    onChange={(e) => setPhonenumber(e.target.value)}
                    value={phonenumber}
                    className="input"
                    pattern="(0|\+33)[1-9]( *[0-9]{2}){4}"
                    type="tel"
                    name="phonenumber"
                    placeholder="Numéro de téléphone"
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
                  <p>Votre profil a été mis à jour</p>
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
                      Mettre à jour
                    </button>
                    <Link href="/dashboard/password">
                      <button
                        type="button"
                        className="button is-link is-outlined"
                      >
                        Modifier Mot de Passe
                      </button>
                    </Link>
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
    const resProfile = await fetch(`${host}/api/profile/${jwt.message.sub}`, {
      headers: {
        cookie
      }
    });
    if (resProfile.status === 200) {
      const profile = await resProfile.json();
      return {
        authenticated: true,
        profile: profile[0],
        id: jwt.message.sub,
        role: jwt.message.role,
        jwt: jwt.message
      };
    }
  }
  return { authenticated: false };
};

export default Profile;
