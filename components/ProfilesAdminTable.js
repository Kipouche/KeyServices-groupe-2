import { useState } from 'react';
import ConvertTime from '../lib/convertTime';
import SelectRole from './SelectRole';

const ProfilesAdminTable = ({ profiles }) => {
  const [profilesState, setProfilesState] = useState(profiles);
  const deleteProfile = (id) => {
    const res = fetch(`/api/admin/profile/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status !== 200) {
      const index = profilesState.findIndex((profile) => {
        return id === profile.id;
      });
      const tmp = [...profilesState];
      tmp.splice(index, 1);
      setProfilesState(tmp);
    }
  };
  return (
    <div className="column">
      <table className="table is-fullwidth">
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
          {profilesState.map((profile) => {
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
                <td>
                  <button
                    className="delete has-background-danger"
                    type="button"
                    onClick={(e) => deleteProfile(profile.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilesAdminTable;