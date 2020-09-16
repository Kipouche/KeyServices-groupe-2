import Link from 'next/link';
import ConvertTime from '../lib/convertTime';

const ProfilesTable = ({ profiles }) => {
  return (
    <div className="column">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Date de naissance</th>
            <th>Numéro de téléphone</th>
            <th>Créé le</th>
            <th>Accéder au profil</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Date de naissance</th>
            <th>Numéro de téléphone</th>
            <th>Créé le</th>
            <th>Accéder au profil</th>
          </tr>
        </tfoot>
        <tbody>
          {profiles.map((profile) => {
            return (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.email}</td>
                <td>{profile.firstname}</td>
                <td>{profile.lastname}</td>
                <td>
                  {
                    ConvertTime.timeToGMT2(profile.dateofbirth)
                      .toISOString()
                      .split('T')[0]
                  }
                </td>
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
                    href="/dashboard/profile/[profileId]"
                    as={`/dashboard/profile/${profile.id}`}
                  >
                    <a>accéder</a>
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

export default ProfilesTable;
