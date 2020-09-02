import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2>KeyServices</h2>
          </div>
          <div className="column">
            <h3>À propos de KeyServices</h3>
            <p>
              <a>Tarifs</a>
            </p>
            <p>
              <a>Qui sommes-nous ?</a>
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
              <a href="mailto:keyservices.contact@keyservices.com">keyservices.contact@keyservices.com</a>
            </p>
            <p>
              <a href="tel:+330000000000">00 00 00 00 00</a>
            </p>
            <p>138 Boulevard Diderot 75012 Paris</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
