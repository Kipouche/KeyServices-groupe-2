import Router from 'next/router';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

const Contact = ({ authenticated }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Prefetch the dashboard page as the user will go there after the login
    Router.prefetch('/index');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/contact/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name,
        subject,
        message
      })
    });
    setLoading(false);
    if (res.status === 200) {
      setError('');
      Router.push('/index');
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
                <img alt="man" src="/man.png" />
              </figure>
            </div>
            <div className="column">
              <div className="">
                <h1 className="title is-1">Contactez nous !</h1>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">Nom</label>
                    <div className="control">
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Nom"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Adresse e-mail</label>
                    <div className="control">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Objet</label>
                    <div className="control">
                      <input
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        className="input"
                        type="text"
                        name="objet"
                        placeholder="Objet"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <input
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="input"
                        type="textarea"
                        name="message"
                        placeholder="Message"
                        required
                      />
                    </div>
                  </div>
                  {error ? (
                    <div className="has-text-danger">
                      <p>
                        Error:
                        {error}
                      </p>
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
                          Envoi
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

Contact.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const host =
    process.env.NODE_ENV !== 'development'
      ? process.env.ROOT_URL
      : 'http://localhost:5000';
  const res = await fetch(`${host}/contact/contact`, {
    headers: {
      cookie
    }
  });

  if (res.status === 200 && !ctx.req) {
    Router.replace('/index');
  }

  if (res.status === 200 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/index'
    });
    ctx.res.end();
  }
  return { authenticated: false };
};

export default Contact;
