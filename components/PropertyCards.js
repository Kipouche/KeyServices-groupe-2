import PropertyCard from './PropertyCard';

const PropertyCards = ({ properties }) => {
  properties = properties.map((property) => {
    return (
      <div
        key={property.id}
        className="column is-half-tablet is-one-third-desktop is-full-mobile"
      >
        <div>
          <PropertyCard
            id={property.id}
            title={property.title}
            address={property.address}
            city={property.city}
            district={property.district}
            validated={property.validated}
            price={property.price}
          />
        </div>
      </div>
    );
  });
  return <div className="column columns is-multiline">{properties}</div>;
};

export default PropertyCards;
