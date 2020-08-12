const Login = () => {
  return (
    <section className="section container">
      <div className="section container is-mobile">
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <figure className="is-inline-block">
              <img alt="woman" src="/man.png" />
            </figure>
          </div>
          <div className="column">
            <div className="">
              <h1 className="title is-3">Welcome back !</h1>
              <form method="POST" action="api/auth/login">
                <div className="field">
                  <label className="label">email</label>
                  <div className="control">
                    <input className="input" type="email" name="email" placeholder="email" required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <div className="buttons">
                      <button className="button is-link has-text-white is-fullwidth" type="submit">register</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
