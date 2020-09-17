import { useState } from 'react';

const SelectRole = ({ id, role }) => {
  const [roleState, setRoleState] = useState(role);
  const handleSelect = (e) => {
    setRoleState(e.target.value);
    const res = fetch(`/api/admin/profile/${id}/role`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        role: e.target.value
      })
    });
  };

  return (
    <div className="select">
      <select name="role" value={roleState} onChange={handleSelect}>
        <option value="member">Membre</option>
        <option value="fieldworker">Agent de Terrain</option>
        <option value="agent">Agent</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default SelectRole;
