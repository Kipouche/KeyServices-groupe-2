import Header from '../components/Header';

const Pricing = ({ authenticated }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section hero container">
        <div className="columns is-vcentered pt-6">
          <div className="column has-text-centered">
            <figure className="is-inline-block">
              <img alt="pricing" src="/pricing.jpg" />
            </figure>
          </div>
          <div className="column">
            <h1 className="title is-1">Tarification</h1>
            <p className="subtitle is-3">
              Découvrez notre tarification simple et transparente.
            </p>
          </div>
        </div>
      </section>
      <section className="section hero container">
        <p className="subtitle has-text-centered py-6">
          Notre système est basé sur une tarification simple, nous vous
          reversons 80% du revenu généré par la location. Ce tarif de base
          correspond à notre offre &quot;Basic&quot;. À cela vous pouvez ajouter
          différentes options telles que détaillées ci-dessous. Vous pouvez
          ainsi vous orienter vers une offre &quot;Standard&quot;, moyennant un
          supplément de 50€ par mois ou vers l&apos;offre premium, moyennant un
          supplément de 150€ par mois selon vos besoins.
        </p>
      </section>
      <section>
        <div className="hero is-link columns is-vcentered has-text-white py-6">
          <nav className="columns column is-11 pricing-nav py-6">
            <div className="column is-multiline is-centered has-text-centered is-mobile box mb-0">
              <h1 className="title is-3">Basic</h1>
              <ul className="pricing-list has-text-left">
                <li className="on">
                  <p>Création de votre annonce sur AirBnB</p>
                </li>
                <li className="on">
                  Application mobile pour gérer vos réservations
                </li>
                <li className="on">
                  Photos professionnelles de votre logement
                </li>
                <li className="on">Assistance 24h/24 et 7j/7</li>
                <li className="off">Accueil des voyageurs</li>
                <li className="off">Récupération des clés en main propre</li>
                <li className="off">États des lieux entrants et sortants</li>
                <li className="off">
                  Ménage éffectué par nos agents d&apos;entretien
                </li>
                <li className="off">Linge de maison et autres</li>
              </ul>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile box ml-4 mr-4 mb-0 pricing-center">
              <h1 className="title is-3">Standard</h1>
              <ul className="pricing-list has-text-left">
                <li className="on">
                  <p>Création de votre annonce sur AirBnB</p>
                </li>
                <li className="on">
                  Application mobile pour gérer vos réservations
                </li>
                <li className="on">
                  Photos professionnelles de votre logement
                </li>
                <li className="on">Assistance 24h/24 et 7j/7</li>
                <li className="on">Accueil des voyageurs</li>
                <li className="on">Récupération des clés en main propre</li>
                <li className="on">États des lieux entrants et sortants</li>
                <li className="off">
                  Ménage éffectué par nos agents d&apos;entretien
                </li>
                <li className="off">Linge de maison et autres</li>
              </ul>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile box">
              <h1 className="title is-3">Premium</h1>
              <ul className="pricing-list has-text-left">
                <li className="on">
                  <p>Création de votre annonce sur AirBnB</p>
                </li>
                <li className="on">
                  Application mobile pour gérer vos réservations
                </li>
                <li className="on">
                  Photos professionnelles de votre logement
                </li>
                <li className="on">Assistance 24h/24 et 7j/7</li>
                <li className="on">Accueil des voyageurs</li>
                <li className="on">Récupération des clés en main propre</li>
                <li className="on">États des lieux entrants et sortants</li>
                <li className="on">
                  Ménage éffectué par nos agents d&apos;entretien
                </li>
                <li className="on">Linge de maison et autres</li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

Pricing.getInitialProps = async (ctx) => {
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

export default Pricing;
