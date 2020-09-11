const PropertyProfileCard = ({ property }) => {
  return (
    <div className="columns box mb-5 px-0 py-0">
      <div className="column is-2 is-narrow">
        <figure className="image is-square">
          {property.validated ? (
            <img
              style={{ objectFit: 'cover' }}
              src={`/pictures/${property.id}_0.jpg`}
              alt="property"
            />
          ) : (
            <img
              style={{ objectFit: 'cover' }}
              src="/property/1_1.jpg"
              alt="property"
            />
          )}
        </figure>
      </div>
      <div className="column">
          <p>{property.title}</p>
          <p>Adresse: {property.address}</p>
          <p>Complément d'adresse: </p>
      </div>
    </div>
  );
};

export default PropertyProfileCard;
