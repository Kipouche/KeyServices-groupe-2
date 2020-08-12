import Link from 'next/link';

/*
 * Added this to toggle the is-active class. See:
 *
 * https://bulma.io/documentation/components/navbar/#navbar-menu
 * https://github.com/jgthms/bulma/issues/856
 */

const toggleStyles = () => {
  document.querySelector('#burger').classList.toggle('is-active');
  document.querySelector('#navbarmenu').classList.toggle('is-active');
};

const Header = () => {
  return (
    <header>
      <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img alt="logo" src="/logo.png" />
            </a>
          </Link>
          <button
            id="burger"
            type="button"
            onClick={toggleStyles}
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarmenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div id="navbarmenu" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/pricing">
              <a className="navbar-item">Pricing</a>
            </Link>
            <Link href="/contact">
              <a className="navbar-item">Contact us</a>
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/register">
                  <a className="button is-link has-text-white">
                    <strong>Register</strong>
                  </a>
                </Link>
                <Link href="/login">
                  <a className="button is-link is-outlined">Log in</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
