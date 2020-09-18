import Link from 'next/link';
import ConvertTime from '../lib/convertTime';

const FieldWorkersTable = ({ profiles }) => {
  const firstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  return (
    <div className="column">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Numéro de téléphone</th>
            <th>Créé le</th>
            <th>Accéder à l'agenda</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Numéro de téléphone</th>
            <th>Créé le</th>
            <th>Accéder à l'agenda</th>
          </tr>
        </tfoot>
        <tbody>
          {profiles.map((profile) => {
            return (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td style={{ textOverflow: 'ellipsis' }}>{profile.email}</td>
                <td>{firstLetterUpperCase(profile.firstname)}</td>
                <td>{firstLetterUpperCase(profile.lastname)}</td>
                <td>{profile.phonenumber}</td>
                <td>
                  {
                    ConvertTime.timeToGMT2(profile.created_at)
                      .toISOString()
                      .split('T')[0]
                  }
                </td>
                <td>
                  <Link
                    href="/dashboard/fieldworker/profile/[profileId]/agenda"
                    as={`/dashboard/fieldworker/profile/${profile.id}/agenda`}
                  >
                    <a className="button is-outlined is-primary">accéder</a>
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

export default FieldWorkersTable;
