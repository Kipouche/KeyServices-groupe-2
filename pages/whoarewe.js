/* eslint-disable prettier/prettier */
import Header from '../components/Header';

const WhoAreWe = ({ authenticated }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section hero container">
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <figure className="is-inline-block">
              <img alt="woman" src="/woman_2_cropped.png" />
            </figure>
          </div>
          <div className="column">
            <h1 className="title is-1">Notre histoire</h1>
            <p className="column">
              L'histoire de KeyServices commence avec Pierrick Humbert, un
              jeune homme ambitieux de 21 ans né à Paris le 23 janvier
              1999. Son idée d’entreprise de conciergerie privée a germée dans son
              esprit lorsque ses parents avaient prévus de louer via Airbnb leur
              appartement pendant leurs vacances à La Baule. En revenant de
              leurs vacances, lui et ses parents se sont rendus compte que leur
              location s’est très mal passée.
            </p>
            <p className="column">
              Pierrick, qui faisait une école de commerce à ce moment là se
              rappelle d’une conversation avec une camarade sur l’émergence d’un
              nouveau marché : la conciergerie privée. Aujourd’hui KeyServices
              emploie 20 salariés dans leur locaux du 12ème arrondissement, elle propose actuellement des services divers
              tels que l’accueil des voyageurs, le ménage le check out, la
              communication avec les voyageurs et bien sûr la création des
              annonces. Plus tard, Pierrick est rejoint par Arnaud et Marinette.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="hero is-link columns is-vcentered has-text-white py-5">
          <nav className="columns column is-9">
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-128x128 is-inline-block">
                <img
                  className="is-rounded"
                  alt="pierrick"
                  src="/whoarewe/pierrick.jpg"
                />
              </figure>
              <div className="column is-full">
                <p className="title is-6">Pierrick Humbert</p>
                <p className="has-text-black">
                  Pierrick a 21 ans, il est le PDG de KeyServices, depuis tout petit il a la chance de voyager, de par ses parents puis de lui même. Il a deux passions dans sa vie, KeyServices et sa famille.
                </p>
              </div>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-128x128 is-inline-block">
                <img
                  className="is-rounded"
                  alt="arnaud"
                  src="/whoarewe/arnaud.jpg"
                />
              </figure>
              <div className="column is-full">
                <p className="title is-6">Arnaud Solange</p>
                <p className="has-text-black">
                  Arnaud est le directeur de la communication chez KeyServices, dans la vie c'est un homme dynamique et travailleur.
                  Il a travaillé pour de prestigieuses agences de communication et a choisi de rejoindre KeyServices pour se lancer un nouveau défi.
                </p>
              </div>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-128x128 is-inline-block">
                <img
                  className="is-rounded"
                  alt="marinette"
                  src="/whoarewe/marinette.jpg"
                />
              </figure>
              <div className="column is-full">
                <p className="title is-6">Marinette Micheline</p>
                <p className="has-text-black">Marinette est notre responsable marketing, cette mère de deux enfants est aussi la maman poule de KeyServices, toujours souriante et serviable elle est un des meilleurs atouts de KeyServices.</p>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

WhoAreWe.getInitialProps = async (ctx) => {
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

export default WhoAreWe;
