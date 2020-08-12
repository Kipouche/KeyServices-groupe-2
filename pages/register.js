/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
const Register = () => {
    return (
        <section className="section container">
            <div className="container is-mobile">
                <div className="columns is-vcentered">
                    <div className="column has-text-centered">
                        <figure className="is-inline-block">
                            <img alt="woman" src="/woman.png" />
                        </figure>
                    </div>
                    <div className="column">
                        <div className="">
                        <h1 className="title is-3">Join us !</h1>
                        <form method="POST" action="api/auth/register">
                                <div className="field">
                                    <label className="label">firstname</label>
                                    <div className="control">
                                        <input className="input" type="text" name="firstname" placeholder="firstname" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">lastname</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="lastname"
                                            placeholder="lastname"
                                            required
                                        />
                                    </div>
                                </div>
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
                                    <label className="label">Date of birth</label>
                                    <div className="control">
                                        <input className="input" type="date" name="dateofbirth" placeholder="jj/mm/aaaa" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Phone number</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            pattern="(0|\+33)[1-9]( *[0-9]{2}){4}"
                                            type="tel"
                                            name="phonenumber"
                                            placeholder="phone number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <label className="checkbox">
                                            <input type="checkbox" name="optinNewsletter" /> I agree to the{' '}<a href="#">terms and conditions</a>
                                        </label>
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

export default Register;
