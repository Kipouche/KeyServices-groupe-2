import Router from 'next/router';
import { useState } from 'react';
import Header from '../../components/Header';
import DashboardPanel from '../../components/Dashboard/DashboardPanel';

const Profile = ({ authenticated, id, role, jwt }) => {
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const [error, setError] = useState('');
  const [actualPassword, setActualPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (newPassword !== confirmPassword){
      setError('Les mots de passes ne sont pas identiques');
      setValidate(false);
    }

    const res = await fetch(`/api/profile/${id}/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        actualPassword,
        newPassword
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
          <DashboardPanel role={role} tab="public" firstname={jwt.firstname} />
          <div className="column">
            <h1 className="title">Changer le mot de passe</h1>
            <form onSubmit={handleSubmit} className="is-centered">
              <div className="field is-grouped">
                <div className="control">
                  <label className="label">Actuel</label>
                  <input
                    onChange={(e) => setActualPassword(e.target.value)}
                    value={actualPassword}
                    className="input"
                    type="password"
                    name="actualPassword"
                    placeholder="mot de passe actuel"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Nouveau</label>
                  <input
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    className="input"
                    type="password"
                    name="newPassword"
                    placeholder="nouveau mot de passe"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Confirmer</label>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    className="input"
                    type="password"
                    name="confirmPassword"
                    placeholder="confirmer mot de passe"
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
                  <p>Le mot de passe a été modifié</p>
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
                      Enregister
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
    return {
      authenticated: true,
      id: jwt.message.sub,
      role: jwt.message.role,
      jwt: jwt.message
    };
  }
  return { authenticated: false };
};

export default Profile;
