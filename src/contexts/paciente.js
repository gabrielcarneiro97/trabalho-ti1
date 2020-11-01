import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase';
import { UserContext } from './user';

export const PacienteContext = React.createContext();

function PacienteProvider(props) {
  const [id, setId] = useState(null);
  const [pacienteDb, setPacienteDb] = useState(null);

  const { dbUser } = useContext(UserContext);

  useEffect(() => {
    if (dbUser && dbUser.pacientes.length > 0 && !id) {
      setId(dbUser.pacientes[0] || null);
    }
  }, [dbUser]);

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
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}

export default PacienteProvider;
