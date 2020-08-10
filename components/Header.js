import Link from 'next/link'

/*
 * Added this to toggle the is-active class. See:
 * 
 * https://bulma.io/documentation/components/navbar/#navbar-menu
 * https://github.com/jgthms/bulma/issues/856
 */

const toggleStyles = (event) => {
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('#navbarmenu').classList.toggle('is-active')
}

const Header = () => {
    return <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <img src="/logo.png" />
                </a>
                <a id="burger" onClick={toggleStyles}
                    role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarmenu" className="navbar-menu">
                <div className="navbar-start">
                    <Link href="/">
                        <a className="navbar-item">Home</a>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link href="/register">
                                <a className="button is-primary">
                                    <strong>Register</strong>
                                </a>
                            </Link>
                            <Link href="/login">
                                <a className="button is-light">Log in</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
}

export default Header