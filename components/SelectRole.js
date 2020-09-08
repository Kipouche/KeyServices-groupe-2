import { useState } from 'react';

const SelectRole = ({ id, role }) => {
  const [roleState, setRoleState] = useState(role);
  const handleSelect = (e) => {
    setRoleState(e.target.value);
    console.log(e.target.value);
    
    console.log(role);

    const res = fetch(`/api/admin/profile/${id}/role`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        role: e.target.value
      })
    });
    if (res.status === 200) {
      console.log('profile updated');
    }
  };

  return (
    <div className="select">
      <select name="role" value={roleState} onChange={handleSelect}>
        <option value="member">Membre</option>
        <option value="agent">Agent</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default SelectRole;
