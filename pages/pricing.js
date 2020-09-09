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
          reversons 80% du revenu généré par votre location.
        </p>
      </section>
      <section className="section container">
        <h1 className="title is-2 has-text-centered pt-6">
          Comment ça <nobr>marche ?</nobr>
        </h1>
        <p className="subtitle has-text-centered py-6">
          Vous nous confiez votre bien, nous nous chargeons du reste. 
          Un photographe professionnel viendra chez vous afin de 
          photographier votre bien sous ses meilleurs angles. 
          Nous publierons ensuite des annonces sur les sites de locations
           les plus réputés. Vous choisissez via votre espace client les 
           dates auxquelles vous souhaitez louer votre bien. Une fois 
           votre logement réservé, un mail vous sera envoyé, nous nous 
           occupons du ménage, de l'état des lieux entrants ainsi que 
           de la remise des clés. Une fois la location terminée nous 
           récupérons les clés, effectuons un état des lieux sortant, 
           le ménage puis un versement automatique équivalement à 80% 
           des revenus générés sera effectué sur votre <nobr>compte en banque.</nobr>
        </p>
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
