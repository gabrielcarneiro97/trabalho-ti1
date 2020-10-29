import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

export const UserContext = React.createContext();

function UserProvider(props) {
  const [firebaseUser, setFirebaseUser] = useState(firebase.auth().currentUser);
  const [isAuth, setIsAuth] = useState(!!firebase.auth().currentUser);

  useEffect(() => firebase.auth().onAuthStateChanged(() => {
    const { currentUser } = firebase.auth();
    setFirebaseUser(currentUser);
    setIsAuth(!!currentUser);
  }), []);


  const state = {
    isAuth,
    firebaseUser,
  };

  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;
