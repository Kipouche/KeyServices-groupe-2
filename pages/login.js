import Router from 'next/router';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

const Login = ({ authenticated }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Prefetch the dashboard page as the user will go there after the login
    Router.prefetch('/dashboard');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    setLoading(false);
    if (res.status === 200) {
      setError('');
      Router.push('/dashboard');
    }
    if (res.status === 401) {
      const json = await res.json();
      setError(json.message);
    }
  };

  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section container">
        <div className="container is-mobile">
          <div className="columns is-vcentered">
            <div className="column has-text-centered is-hidden-mobile">
              <figure className="is-inline-block">
                <img alt="woman" src="/man.png" />
              </figure>
            </div>
            <div className="column">
              <div className="">
                <h1 className="title is-3">Nous sommes heureux de vous revoir !</h1>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">E-mail
                    <div className="control">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Entrez votre adresse mail"
                        required
                      />
                    </div>
                    </label>
                  </div>
                  <div className="field">
                    <label className="label">Mot de passe
                    <div className="control">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Entrez votre mot de passe"
                        required
                      />
                    </div>
                    </label>
                  </div>
                  {error ? (
                    <div className="has-text-danger">
                      <p>Error: {error}</p>
                    </div>
                  ) : (
                    []
                  )}
                  <div className="field">
                    <div className="control">
                      <div className="buttons">
                        <button
                          className={`button is-primary has-text-white is-fullwidth ${
                            loading ? 'is-loading' : ''
                          }`}
                          type="submit"
                        >
                          Se connecter
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Login.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const host =
    process.env.NODE_ENV !== 'development'
      ? process.env.ROOT_URL
      : 'http://localhost:5000';
  const res = await fetch(`${host}/api/auth`, {
    headers: {
      cookie
    }
  });

  if (res.status === 200 && !ctx.req) {
    Router.replace('/dashboard');
  }

  if (res.status === 200 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/dashboard'
    });
    ctx.res.end();
  }
  return { authenticated: false };
};

export default Login;
