import React, { useState } from 'react';
import firebase from 'firebase';

export const UserContext = React.createContext();

function UserProvider(props) {
  const [user, setUser] = useState(firebase.auth().currentUser);

  firebase.auth().onAuthStateChanged(() => {
    setUser(firebase.auth().currentUser);
  });

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;
