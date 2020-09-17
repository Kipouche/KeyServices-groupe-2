import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../../../../../../components/Header';
import DashboardPanel from '../../../../../../components/Dashboard/DashboardPanel';

const Add = ({ authenticated, id, role, jwt }) => {
  const router = useRouter();
  const { profileId } = router.query;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('paris');
  const [district, setDistrict] = useState();
  const [area, setArea] = useState();
  const [room, setRoom] = useState();
  const [bed, setBed] = useState();
  const [bathroom, setBathroom] = useState();
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

    const res = await fetch(`/api/agent/profile/${profileId}/property`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        price: parseInt(price, 10),
        description,
        pictures,
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
      const json = await res.json();
      setError('');
      Router.push(`/dashboard/property/${json.id}`);
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
          <DashboardPanel role={role} tab="public" firstname={jwt.firstname} />
          <div className="column auto">
            <h1 className="title">Ajouter une propriété</h1>
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
                  <label className="label">Prix par nuit</label>
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
              <div className="field is-grouped">
                <div className="control">
                  <label className="label">Adresse</label>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="input"
                    type="text"
                    name="address"
                    placeholder="Adresse"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Ville</label>
                  <input
                    disabled
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    className="input"
                    type="text"
                    name="city"
                    placeholder="Ville"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Arrondissement</label>
                  <input
                    onChange={(e) => setDistrict(parseInt(e.target.value, 10))}
                    value={district}
                    className="input"
                    type="number"
                    name="district"
                    placeholder="Arrondissement"
                    required
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <label className="label">Surface</label>
                  <input
                    onChange={(e) => setArea(parseInt(e.target.value, 10))}
                    value={area}
                    className="input"
                    type="number"
                    name="area"
                    placeholder="Surface"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Chambre</label>
                  <input
                    onChange={(e) => setRoom(parseInt(e.target.value, 10))}
                    value={room}
                    className="input"
                    type="number"
                    name="room"
                    placeholder="Chambre"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Lit</label>
                  <input
                    onChange={(e) => setBed(parseInt(e.target.value, 10))}
                    value={bed}
                    className="input"
                    type="number"
                    name="bed"
                    placeholder="Lit"
                    required
                  />
                </div>
                <div className="control">
                  <label className="label">Salle de bain</label>
                  <input
                    onChange={(e) => setBathroom(parseInt(e.target.value, 10))}
                    value={bathroom}
                    className="input"
                    type="number"
                    name="bathroom"
                    placeholder="Salle de bain"
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
                      className={`button is-primary has-text-white ${loading ? 'is-loading' : ''}`}
                      type="submit"
                    >
                      Créer
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
    return {
      authenticated: true,
      id: jwt.message.sub,
      role: jwt.message.role,
      jwt: jwt.message
    };
  }
  return { authenticated: false };
};

export default Add;
