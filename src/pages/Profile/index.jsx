import React, { useContext } from 'react';
import { UserContext } from '../../contexts/user';

function Profile() {
  const { firebaseUser } = useContext(UserContext);

  return (
    <div>
      <p>
        <b>E-mail:</b>
        {' '}
        {firebaseUser.email}
      </p>
      <p>
        <b>Nome:</b>
        {' '}
        {firebaseUser.displayName}
      </p>
    </div>
  );
}

export default Profile;
