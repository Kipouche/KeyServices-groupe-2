import Link from 'next/link';

const PropertyFieldWorkerMenu = ({ id, property, profile }) => {
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
          href="/dashboard/fieldworker/profile/[profileId]/property/[propertyId]/checklist"
          as={`/dashboard/fieldworker/profile/${id}/property/${property.id}/checklist`}
        >
          <a className="button is-fullwidth ">Faire l'état des lieux</a>
        </Link>
        <a
          href="mailto:keyservices.contact@keyservices.com"
          className="button is-fullwidth is-primary"
        >
          Envoyer un rapport à l'agent immobilier
        </a>
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

export default PropertyFieldWorkerMenu;
