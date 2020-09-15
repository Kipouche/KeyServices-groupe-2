import ConvertTime from '../lib/convertTime';
import Link from 'next/link';

const PropertyTables = ({ properties }) => {

  return (
    <div className="column">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>adresse</th>
            <th>Ville</th>
            <th>Arrondissement</th>
            <th>m²</th>
            <th>Lit</th>
            <th>Salle de bain</th>
            <td></td>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Id</th>
            <th>adresse</th>
            <th>Ville</th>
            <th>Arrondissement</th>
            <th>m²</th>
            <th>Lit</th>
            <th>Salle de bain</th>
            <td></td>
          </tr>
        </tfoot>
        <tbody>
          {properties.map((property) => {
            return (
              <tr key={property.id}>
                <td>{property.id}</td>
                <td>{property.address}</td>
                <td>{property.city}</td>
                <td>{property.district}</td>
                <td>{property.area}</td>
                <td>{property.bed}</td>
                <td>{property.bathroom}</td>
                <td>
                  <Link
                    href="/dashboard/agent/property/[propertyId]/complete"
                    as={`/dashboard/agent/property/${property.id}/complete`}
                  >
                    <a>compléter</a>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTables;
