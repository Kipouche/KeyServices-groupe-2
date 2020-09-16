import { useState } from 'react';
import Router from 'next/router';
import Header from '../../../../../../../components/Header';
import DashboardPanel from '../../../../../../../components/Dashboard/DashboardPanel';

const CheckList = ({ authenticated, profileId, propertyId, role, jwt }) => {
  const [entree, setEntree] = useState(1);
  const [salon, setSalon] = useState(1);
  const [cuisine, setCuisine] = useState(1);
  const [salleamanger, setSalleAManger] = useState(1);
  const [chambres, setChambres] = useState(1);
  const [salledebain, setSalleDeBain] = useState(1);
  const [toilettes, setToilettes] = useState(1);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `/api/fieldworker/profile/${profileId}/property/${propertyId}/checklist`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          entree,
          salon,
          cuisine,
          salleamanger,
          chambres,
          salledebain,
          toilettes,
          message
        })
      }
    );
    if (res.status === 200) {
      const json = await res.json();
      setError('');
      Router.push(`/dashboard/property/${propertyId}`);
    } else {
      // const errorMessage = await res.json();
      // setError(errorMessage.message);
    }
  };

  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        <div className="columns">
          <DashboardPanel role={role} tab="profil" firstname={jwt.firstname} />
          <div className="column columns auto">
            <form onSubmit={handleSubmit} className="is-centered">
              <h1 className="title">Etat des lieux</h1>
              <label className="label">
                Entrée
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select
                        name="note"
                        onChange={(e) =>
                          setEntree(parseInt(e.target.value, 10))}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
              </label>
              <label className="label">
                Salon
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select
                        name="note"
                        onChange={(e) => setSalon(parseInt(e.target.value, 10))}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
              </label>
              <label className="label">
                Cuisine
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select
                        name="note"
                        onChange={(e) =>
                          setCuisine(parseInt(e.target.value, 10))}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
              </label>
              <label className="label">
                Salle à manger
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select
                        name="note"
                        onChange={(e) =>
                          setSalleAManger(parseInt(e.target.value, 10))}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
              </label>
              <label className="label">
                Chambres
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select
                        name="note"
                        onChange={(e) =>
                          setChambres(parseInt(e.target.value, 10))}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
              </label>
              <label className="label">
                Salle de bain
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select
                        name="note"
                        onChange={(e) =>
                          setSalleDeBain(parseInt(e.target.value, 10))}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
              </label>
              <label className="label">
                Toilettes
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select
                        name="note"
                        onChange={(e) =>
                          setToilettes(parseInt(e.target.value, 10))
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
              </label>
              <label className="label">
                Message
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Entrez votre message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>
                <div className="control">
                  <button className="button is-link">Envoyer</button>
                </div>
              </label>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

CheckList.getInitialProps = async (ctx) => {
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
    const { profileId, propertyId } = ctx.query;
    return {
      authenticated: true,
      profileId,
      propertyId,
      role: jwt.message.role,
      jwt: jwt.message
    };
  }
  return { authenticated: false };
};

export default CheckList;
