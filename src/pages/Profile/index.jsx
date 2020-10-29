import React, { useContext } from 'react';
import { UserContext } from '../../contexts/user';

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>
        <b>E-mail:</b> {user.email}
      </p>
      <p>
        <b>Nome:</b> {user.displayName}
      </p>
    </div>
  );
}

export default Profile;
