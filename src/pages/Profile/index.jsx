import React, { useContext } from 'react';
import PacienteProvider, { PacienteContext } from '../../contexts/paciente';
import { UserContext } from '../../contexts/user';
import PacienteSelector from './components/PacienteSelector';

function Profile() {
  const state = useContext(UserContext);
  const { firebaseUser } = state;

  console.log(state);

  return (
    <PacienteProvider>
      <div>
        <PacienteSelector />
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
    </PacienteProvider>
  );
}

export default Profile;
