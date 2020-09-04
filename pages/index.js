import Header from '../components/Header';

const Index = ({ authenticated }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section hero container">
        <div className="columns is-vcentered py-6">
          <div className="column has-text-centered">
            <figure className="is-inline-block">
              <img alt="woman" src="/woman_2_cropped.png" />
            </figure>
          </div>
          <div className="column">
            <h1 className="title is-1">KeyServices</h1>
            <p className="subtitle is-3">
              Louer votre bien n&apos;aura jamais été aussi simple.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="hero is-link columns is-vcentered has-text-white py-5">
          <nav className="columns column is-three-quarters">
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-64x64 is-inline-block">
                <img alt="airbnb logo" src="/airbnb.png" />
              </figure>
              <div className="column is-full mt-3">
                <p>
                  Votre bien parmis les mieux placés grâce à notre partenariat
                  avec airbnb.
                </p>
              </div>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-64x64 is-inline-block">
                <img alt="airbnb logo" src="/smart-key.png" />
              </figure>
              <div className="column is-full mt-3">
                <p>
                  Nous nous occupons de la reception et de la remise des clés.
                </p>
              </div>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-64x64 is-inline-block">
                <img alt="airbnb logo" src="/clean.png" />
              </figure>
              <div className="column is-full mt-3">
                <p>
                  Ne vous embêtez plus avec le ménage, notre équipe
                  d&apos;entretien est là pour vous.
                </p>
              </div>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-64x64 is-inline-block">
                <img alt="airbnb logo" src="/fix.png" />
              </figure>
              <div className="column is-full mt-3">
                <p>
                  Un problème avec votre location ? Une question ? Notre équipe
                  reste à votre écoute 24h/24 et 7j/7.
                </p>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section className="section container">
        <h1 className="title is-2 has-text-centered pt-6">
          Pourquoi nous choisir ?
        </h1>
        <div className="columns is-variable is-8 is-vcentered py-5">
          <div className="column">
            <figure>
              <img alt="woman" src="/busy_worker4.jpg" />
            </figure>
          </div>
          <div className="column has-text-centered">
            <h1 className="title is-3">La transparence</h1>
            <p className="subtitle">
              Grace à notre mode de fonctionnement 100% transparent, vous pouvez
              connaître toutes les informations liées à votre bien à tout
              moment. Les dates de location, commentaires des locataires, sites
              sur lesquels sont visiblent&nbsp;
              <nobr>votre bien, ...</nobr>
              <br />
              Tout est disponible votre espace client.
            </p>
          </div>
        </div>
        <div className="columns is-variable is-8 is-vcentered py-5">
          <div className="column has-text-centered">
            <h1 className="title is-3">L&apos;expertise</h1>
            <p className="subtitle ">
              Une équipe d&apos;expert se tiens à votre disposition pour
              répondre à vos attentes à tous moments. De la simple information à
              la résolution d&apos;un problème complexe, il y aura toujours
              quelqu&apos;un pour vous écoutez.
            </p>
          </div>
          <div className="column">
            <figure>
              <img alt="woman" src="/busy_worker2.jpg" />
            </figure>
          </div>
        </div>
        <div className="columns is-variable is-8 is-vcentered py-5">
          <div className="column">
            <figure>
              <img alt="woman" src="/busy_worker3.jpg" />
            </figure>
          </div>
          <div className="column has-text-centered">
            <h1 className="title is-3">La tranquilité</h1>
            <p className="subtitle">
              Ne soyez plus stressé par la location de votre bien. Vous
              n&apos;avez qu&apos;à renseigner les dates durant lesquelles vous
              souhaitez le louer, nous nous chargeons du reste. Vous serez
              informé de l&apos;évolution de la location à tout moment.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title is-2 has-text-centered">
          Rejoignez-nous sur les réseaux
        </h1>
        <nav className="level container">
          <div className="column is-multiline is-centered has-text-centered is-mobile">
            <figure className="image is-64x64 is-inline-block">
              <img alt="airbnb logo" src="/twitter.png" />
            </figure>
            <div className="mt-4">
              <p className="heading">Twitter</p>
              <p className="title">3,456</p>
            </div>
          </div>
          <div className="column is-multiline is-centered has-text-centered is-mobile">
            <figure className="image is-64x64 is-inline-block">
              <img alt="airbnb logo" src="/facebook.png" />
            </figure>
            <div className="mt-4">
              <p className="heading">Facebook</p>
              <p className="title">1230</p>
            </div>
          </div>
          <div className="column is-multiline is-centered has-text-centered is-mobile">
            <figure className="image is-64x64 is-inline-block">
              <img alt="airbnb logo" src="/instagram.png" />
            </figure>
            <div className="mt-4">
              <p className="heading">Instagram</p>
              <p className="title">2350</p>
            </div>
          </div>
          <div className="column is-multiline is-centered has-text-centered is-mobile">
            <figure className="image is-64x64 is-inline-block">
              <img alt="airbnb logo" src="/linkedin.png" />
            </figure>
            <div className="mt-4">
              <p className="heading">Linkedin</p>
              <p className="title">789</p>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
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

export default Index;
