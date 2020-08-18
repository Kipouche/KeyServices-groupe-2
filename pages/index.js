import Header from '../components/Header';

const Index = ({ authenticated }) => {
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
            <h1 className="title is-1">KeyServices</h1>
            <p className="subtitle is-3">
              Hosting guests will no longer require any effort.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="hero is-link columns is-vcentered has-text-white">
          <nav className="columns column is-half">
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-128x128 is-inline-block">
                <img alt="airbnb logo" src="/airbnb-logo.png" />
              </figure>
              <div className="column is-full">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-128x128 is-inline-block">
                <img alt="airbnb logo" src="/airbnb-logo.png" />
              </figure>
              <div className="column is-full">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-128x128 is-inline-block">
                <img alt="airbnb logo" src="/airbnb-logo.png" />
              </figure>
              <div className="column is-full">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="column is-multiline is-centered has-text-centered is-mobile">
              <figure className="image is-128x128 is-inline-block">
                <img alt="airbnb logo" src="/airbnb-logo.png" />
              </figure>
              <div className="column is-full">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section className="section">
        <nav className="level container">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Twitter</p>
              <p className="title">3,456</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Facebook</p>
              <p className="title">1230</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Instagram</p>
              <p className="title">2350</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Linkedin</p>
              <p className="title">789</p>
            </div>
          </div>
        </nav>
      </section>
      <section className="section container">
        <div className="columns is-vcentered">
          <div className="column">
            <figure>
              <img alt="woman" src="/busy_worker4.jpg" />
            </figure>
          </div>
          <div className="column has-text-centered">
            <h1 className="title is-3">Lorem ipsum</h1>
            <p className="subtitle">
              dolor sit amet, consectetur adipiscing elit. Duis interdum quam
              elit, nec lobortis orci sollicitudin non. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Quisque neque odio, tincidunt
              in erat et, laoreet volutpat neque.
            </p>
          </div>
        </div>
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <h1 className="title is-3">Lorem ipsum</h1>
            <p className="subtitle ">
              dolor sit amet, consectetur adipiscing elit. Duis interdum quam
              elit, nec lobortis orci sollicitudin non. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Quisque neque odio, tincidunt
              in erat et, laoreet volutpat neque.
            </p>
          </div>
          <div className="column">
            <figure>
              <img alt="woman" src="/busy_worker2.jpg" />
            </figure>
          </div>
        </div>
        <div className="columns is-vcentered">
          <div className="column">
            <figure>
              <img alt="woman" src="/busy_worker3.jpg" />
            </figure>
          </div>
          <div className="column has-text-centered">
            <h1 className="title is-3">Lorem ipsum</h1>
            <p className="subtitle">
              dolor sit amet, consectetur adipiscing elit. Duis interdum quam
              elit, nec lobortis orci sollicitudin non. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Quisque neque odio, tincidunt
              in erat et, laoreet volutpat neque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
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

  if (res.status === 401 && !ctx.req) {
    return { authenticated: false };
  }

  if (res.status === 401 && ctx.req) {
    return { authenticated: false };
  }
  return { authenticated: true };
};

export default Index;
