import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.console";
import toast from "react-hot-toast";

export const AuthContext = createContext("");
const googleProvider = new GoogleAuthProvider(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //google signup
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //signOut
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth)
      .then((res) => {
        toast.success("Logged Out Successfully!!!");
        //console.log(res);
      })
      .catch((err) => {
        // console.log(err.code);
      });
  };
  //auth state change
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const authInfo = {
    loading,
    googleLogin,
    user,
    userSignOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
