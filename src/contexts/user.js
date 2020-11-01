import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

export const UserContext = React.createContext();

function UserProvider(props) {
  const [firebaseUser, setFirebaseUser] = useState(firebase.auth().currentUser);
  const [isAuth, setIsAuth] = useState(!!firebase.auth().currentUser);
  const [dbUser, setDbUser] = useState(null);
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    let userDocUnsub = null;
    const authUnsub = firebase.auth().onAuthStateChanged(async (currentUser) => {
      const db = firebase.firestore();

      const usersCollection = db.collection('users');
      const userDoc = usersCollection.doc(currentUser.uid);

      userDocUnsub = userDoc.onSnapshot(async (doc) => {
        const userDocData = doc.data();

        if (!userDocData) {
          const newDbUser = {
            email: currentUser.email,
            pacientes: [],
          };
          await usersCollection.doc(currentUser.uid).set(newDbUser);
        } else {
          setDbUser(userDocData);
        }
      });

      setFirebaseUser(currentUser);
      setIsAuth(!!currentUser);
    });

    return () => {
      authUnsub();
      if (userDocUnsub) userDocUnsub();
    }
  }, []);

  const state = {
    isAuth,
    firebaseUser,
    dbUser,
  };

  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;
