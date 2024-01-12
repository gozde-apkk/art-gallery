import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

import {app} from "../../firebase.js";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser =(email, password) => {
   return  createUserWithEmailAndPassword(auth, email, password)

  } 

  const signUpWithGmail = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }


  const login = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  const logout = ()=> {
    return signOut(auth)
  }


  const updateuserProfile = ({name, photoURL}) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
        setUser(currentUser);
        setLoading(false);
    }else {
        //..........
    }
    return unsubscribe
    })
  })
  const authInfo = {
    user,
    createUser,
    signUpWithGmail ,
    login,
    logout,
    updateuserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
