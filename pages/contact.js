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
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // Prefetch the dashboard page as the user will go there after the login
    Router.prefetch('/');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/contact/', {
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
      setSent(true);
    }
    if (res.status === 400) {
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
                <h1 className="title is-1">Contactez-nous !</h1>
                {!sent ? (
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label className="label">
                        Nom
                        <div className="control">
                          <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="input"
                            type="text"
                            name="name"
                            placeholder="Entrez votre nom"
                            required
                          />
                        </div>
                      </label>
                    </div>
                    <div className="field">
                      <label className="label">Adresse e-mail
                      <div className="control">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          className="input"
                          type="email"
                          name="email"
                          placeholder="Entrez votre e-mail"
                          required
                        />
                      </div>
                      </label>
                    </div>
                    <div className="field">
                      <label className="label">Objet
                      <div className="control">
                        <input
                          onChange={(e) => setSubject(e.target.value)}
                          value={subject}
                          className="input"
                          type="text"
                          name="objet"
                          placeholder="Entrez la nature de votre demande"
                          required
                        />
                      </div>
                      </label>
                    </div>
                    <div className="field">
                      <label className="label">Message
                      <div className="control">
                        <input
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          className="textarea"
                          type="text"
                          name="message"
                          placeholder="Entrez votre message"
                          required
                        />
                      </div>
                      </label>
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
                            className={`button is-primary has-text-white is-fullwidth ${
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
                ) : (
                  <div className="notification is-link">
                    <h1>Merci de nous avoir contactés !</h1>
                    <p>
                      Nous nous efforçons de vous répondre dans les plus brefs
                      délais.
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

Contact.getInitialProps = async (ctx) => {
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

  if (res.status === 401 && !ctx.req) {
    return { authenticated: false };
  }

  if (res.status === 401 && ctx.req) {
    return { authenticated: false };
  }
  return { authenticated: true };
};

export default Contact;
