import React, { useContext } from 'react';
import { UserContext } from '../../contexts/user';

function Profile() {
  const state = useContext(UserContext);
  const { firebaseUser } = state;

  console.log(state);

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
