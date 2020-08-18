/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Router from 'next/router';
import Header from '../components/Header';

const Register = ({ authenticated }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [dateofbirth, setDateofbirth] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [terms, setTerms] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        firstname,
        lastname,
        dateofbirth,
        phonenumber
      })
    });
    setLoading(false);
    if (res.status === 200) {
      setError('');
      setRegistered(true);
    } else {
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
                <img alt="woman" src="/woman.png" />
              </figure>
            </div>
            <div className="column">
              <div className="">
                <h1 className="title is-3">Join us !</h1>
                {!registered ? (
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label className="label">firstname</label>
                      <div className="control">
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
                    </div>
                    <div className="field">
                      <label className="label">lastname</label>
                      <div className="control">
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
                    <div className="field">
                      <label className="label">email</label>
                      <div className="control">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          className="input"
                          type="email"
                          name="email"
                          placeholder="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">password</label>
                      <div className="control">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          className="input"
                          type="password"
                          name="password"
                          placeholder="password"
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Date of birth</label>
                      <div className="control">
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
                    </div>
                    <div className="field">
                      <label className="label">Phone number</label>
                      <div className="control">
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
                    <div className="field">
                      <div className="control">
                        <label className="checkbox">
                          <input
                            onClick={() => setTerms(!terms)}
                            value={terms}
                            type="checkbox"
                            name="optinNewsletter"
                            required
                          />{' '}
                          I agree to the <a href="/">terms and conditions</a>
                        </label>
                      </div>
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
                            className={`button is-link has-text-white is-fullwidth ${
                              loading ? 'is-loading' : ''
                            }`}
                            type="submit"
                          >
                            register
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="notification is-link">
                    <p>
                      Thank you for joining <b>KeyServices</b>.
                    </p>
                    <p>
                      An email has been sent to your address to verify your
                      account.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Register.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const host =
    process.env.NODE_ENV !== 'development'
      ? 'https://keyserviceshost.vercel.app/'
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

export default Register;
