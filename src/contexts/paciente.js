import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

export const PacienteContext = React.createContext();

function PacienteProvider(props) {
  const [id, setId] = useState(null);
  const [pacienteDb, setPacienteDb] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    const pacientesCollection = db.collection('pacientes');
    let pacienteUnsub = null;

    if (id) {
      const pacienteDoc = pacientesCollection.doc(id);

      pacienteUnsub = pacienteDoc.onSnapshot((doc) => {
        const pacienteData = doc.data();
        setPacienteDb(pacienteData);
      });
    }

    return pacienteUnsub;
  }, [id]);

  const changePaciente = setId;

  const state = {
    id,
    pacienteDb,
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
