import Link from 'next/link';

const PropertyAgentMenu = ({ id, property, profile }) => {
  const firstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  return (
    <div className="box">
      <p>
        Propriétaire: {firstLetterUpperCase(profile.lastname)}{' '}
        {firstLetterUpperCase(profile.firstname)}
      </p>
      <p>Address: {property.address}</p>
      <p>Ville: {firstLetterUpperCase(property.city)}</p>
      <p>
        Code Postal:{' '}
        {`750${
          property.district < 10 ? '0' + property.district : property.district
        }`}
      </p>
      <p>Nombre de pièces: {property.room}</p>
      <p>Nombre de lits: {property.bed}</p>
      <p>Nombre de salle de bain: {property.bathroom}</p>
      <p>Prix par nuit: {property.price}</p>
      <br />
      <div className="buttons">
        <Link
          href="/dashboard/profile/[profileId]/rents"
          as={`/dashboard/profile/${property.user_id}/rents`}
        >
          <a className="button is-fullwidth ">Historique de locations</a>
        </Link>
        <Link
          href="/dashboard/profile/[profileId]/agenda"
          as={`/dashboard/profile/${property.user_id}/agenda`}
        >
          <a className="button is-fullwidth is-primary">Accéder à l'agenda</a>
        </Link>

        <a
          href={`tel:${profile.phonenumber}`}
          className="button is-fullwidth is-link"
        >
          Contacter le propriétaire
        </a>
      </div>
    </div>
  );
};

export default PropertyAgentMenu;
