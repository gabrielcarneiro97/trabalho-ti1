import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

export const UserContext = React.createContext();

function UserProvider(props) {
  const [firebaseUser, setFirebaseUser] = useState(firebase.auth().currentUser);
  const [isAuth, setIsAuth] = useState(!!firebase.auth().currentUser);
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => firebase.auth().onAuthStateChanged(async () => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    const usersCollection = db.collection('users');
    const userDoc = await usersCollection.doc(currentUser.uid).get();
    const userDocData = userDoc.data();

    if (!userDocData) {
      const newDbUser = {
        pacientes: [],
      };
      await usersCollection.doc(currentUser.uid).set(newDbUser);
      setDbUser(newDbUser);
    } else {
      setDbUser(userDocData);
    }

    setFirebaseUser(currentUser);
    setIsAuth(!!currentUser);
  }), []);

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
