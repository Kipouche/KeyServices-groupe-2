import PropertyCard from "./PropertyCard";

const PropertyCards = ({ properties }) => {
    properties = properties.map((property) => {
        return <div key={property.id} className="column is-half-tablet is-one-quarter-desktop is-full-mobile">
            <div>
                <PropertyCard
                    id={property.id}
                    address={property.address}
                    city={property.city}
                    district={property.district}
                    validated={property.validated}
                    price={property.price}>
                </PropertyCard>
            </div>
        </div>
    })
    return <div className="columns is-centered is-multiline">{properties}</div>
}

export default PropertyCards;