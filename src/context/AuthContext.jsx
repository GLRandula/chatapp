import React, { createContext, useState, useContext, useEffect } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

// create context
const AuthContext = createContext();
// Provider Context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signin with google
  // const signinWithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithRedirect(auth, provider)
  // }
  // Sign in with Google (Popup version)
  const signinWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setCurrentUser(result.user); // ✅ Ensure currentUser updates instantly
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // signout
  // const logout = () => signOut(auth);
  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      console.log("User signed out");
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle,
    logout
  }

  // set currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // return unsubscribe;
    return () => unsubscribe();
  }, []);

  return (
    // <AuthContext.Provider value={value}>
    //   {!loading && children}
    // </AuthContext.Provider>
    <AuthContext.Provider value={{ currentUser, signinWithGoogle, logout }}>
      {!loading && children} {/* Ensure content is shown only after loading */}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}