import React, { useState } from 'react';
import firebase from 'firebase';

export const PacienteContext = React.createContext();

function PacienteProvider(props) {
  const [id, setId] = useState(null);

  const changePaciente = setId;

  const state = {
    id,
  };
  const setters = {
    setId,
  };
  const methods = {
    changePaciente,
  };

  return (
    <UserContext.Provider value={{ state, setters, methods }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default PacienteProvider;
