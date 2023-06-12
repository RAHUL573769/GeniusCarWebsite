import React, { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/FirebaseInit";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);
  const signInWithGoogle = (auth, provider) => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    auth,
    signInWithGoogle
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
