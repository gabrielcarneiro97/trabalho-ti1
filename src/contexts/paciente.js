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

    if(pacienteUnsub) return pacienteUnsub;
  }, [id]);

  const changePaciente = setId;

  const state = {
    id,
    pacienteDb,
    changePaciente,
  };

  return (
    <PacienteContext.Provider value={state}>
      {props.children}
    </PacienteContext.Provider>
  )
}

export default PacienteProvider;
