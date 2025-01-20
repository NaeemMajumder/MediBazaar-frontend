import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // google registration
  const registerWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // facebook registration
  const registerWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // gitHub registration
  const registerWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  // E-mail registration
  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn / Login
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignOut / Logout
  const signOutUser = () => {
    return signOut(auth);
  };

  // update user profile
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const handleError = (error)=>{
    alert(error.message)
  }


  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    registerWithEmail,
    registerWithFacebook,
    registerWithGitHub,
    registerWithGoogle,
    signInUser,
    signOutUser,
    updateUserProfile,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
