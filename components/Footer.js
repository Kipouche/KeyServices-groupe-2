import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div style={{ display: 'flex' }} className="column">
            <figure
              className="image"
              style={{ margin: 'auto 0', width: '80%' }}
            >
              <img alt="logo white KeyServices" src="/logoblanc.png" />
            </figure>
          </div>
          <div className="column">
            <h3>À propos de KeyServices</h3>
            <p>
              <Link href="/pricing">
                <a>Tarif</a>
              </Link>
            </p>
            <p>
              <Link href="/whoarewe">
                <a>Qui sommes nous ?</a>
              </Link>
            </p>
            <p>
              <Link href="/legalite#ml">
                <a>Mentions légales</a>
              </Link>
            </p>
            <p>
              <Link href="/legalite#cgu">
                <a>Conditions générales d&apos;utilisation</a>
              </Link>
            </p>
          </div>
          <div className="column">
            <h3>Contact</h3>
            <p>
              <a href="mailto:keyservices.contact@keyservices.com">
                keyservices.contact@keyservices.com
              </a>
            </p>
            <p>
              <a href="tel:+33199173032">01 99 17 30 32</a>
            </p>
            <p>138 Boulevard Diderot 75012 Paris</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
