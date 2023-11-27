import AppNavigation from "./AppNavigation"; 
import AuthScreen from "../screens/auth/AuthScreen";
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/db';

export default function RootNavigation() {

  const [user, setUser] = useState(null);
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;

  }, []);

  return user ? <AppNavigation /> : <AuthScreen />;

}
