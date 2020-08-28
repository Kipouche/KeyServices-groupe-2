import ConvertTime from '../lib/convertTime';
import SelectRole from './SelectRole';

const ProfilesAdminTable = ({ profiles }) => {
  return (
    <div className="column">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>role</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>date of birth</th>
            <th>phone number</th>
            <th>created at</th>
            <th>modify role</th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>role</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>date of birth</th>
            <th>phone number</th>
            <th>created at</th>
            <th>modify role</th>
            <th></th>
          </tr>
        </tfoot>
        <tbody>
          {profiles.map((profile) => {
            return (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.email}</td>
                <td>{profile.role}</td>
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
                  <SelectRole id={profile.id} role={profile.role} />
                </td>
                <td><button className="delete has-background-danger"></button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilesAdminTable;
