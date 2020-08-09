const Login = () => {
  return (
    <section className="section">
      <h1 className="title">
        Login
      </h1>
      <form method="POST" action="api/auth/login">
        <div className="field">
          <label className="label">email</label>
          <div className="control">
            <input className="input" type="email" name="email" placeholder="email" />
          </div>
        </div>
        <div className="field">
          <label className="label">password</label>
          <div className="control">
            <input className="input" type="password" name="password" placeholder="password" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="buttons">
              <button className="button is-primary" type="submit">login</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login;