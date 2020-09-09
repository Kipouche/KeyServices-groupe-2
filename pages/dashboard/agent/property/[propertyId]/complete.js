import Router from 'next/router';
import { useState } from 'react';
import Header from '../../../../../components/Header';
import DashboardPanel from '../../../../../components/Dashboard/DashboardPanel';

const Complete = ({ authenticated, id, role, propertyId }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const onChangePicture = async (e) => {
    const tmp = await Promise.all(
      [...e.target.files].map((file) => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onload = (event) => {
            resolve(event.target.result);
          };
          reader.readAsDataURL(file);
        });
      })
    );
    setPictures(tmp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/agent/property/${propertyId}/complete`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        price: parseInt(price, 10),
        pictures
      })
    });

    setLoading(false);
    if (res.status === 200) {
      setError('');
      //Router.push('/dashboard/property');
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
            <h1 className="title">Compléter bien</h1>
            <form onSubmit={handleSubmit} className="is-centered">
              <div className="field">
                <div className="control">
                  <label className="label">Titre</label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="input"
                    type="text"
                    name="title"
                    placeholder="Titre"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Prix</label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className="input"
                    type="number"
                    name="price"
                    placeholder="Prix"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Description du bien</label>
                  <textarea
                    rows="10"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="textarea"
                    name="description"
                    placeholder="Description"
                    required
                  />
                </div>
                <div className="control file">
                  <label className="file-label">
                    <input
                      className="file-input"
                      onChange={onChangePicture}
                      type="file"
                      name="pictures"
                      multiple
                    />
                    <span className="file-cta">
                      <span className="file-label">Choisir une photo...</span>
                    </span>
                  </label>
                </div>
              </div>
              <div className="columns">
                {pictures.map((picture) => (
                  <div key="ok" className="column is-2">
                    <figure className="image is-16by9 is-128x128">
                      <img src={picture} alt="preview" />
                    </figure>
                  </div>
                ))}
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
                      Envoi
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

Complete.getInitialProps = async (ctx) => {
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
    if (
      jwt.message.role !== 'admin' &&
      jwt.message.role !== 'agent' &&
      !ctx.req
    ) {
      Router.replace('/dashboard');
      return {};
    }

    if (
      jwt.message.role !== 'admin' &&
      jwt.message.role !== 'agent' &&
      ctx.req
    ) {
      ctx.res.writeHead(302, {
        Location: '/dashboard'
      });
      ctx.res.end();
      return {};
    }
    const { propertyId } = ctx.query;
    return {
      authenticated: true,
      id: jwt.message.sub,
      propertyId,
      role: jwt.message.role
    };
  }
  return { authenticated: false, properties: [] };
};

export default Complete;
