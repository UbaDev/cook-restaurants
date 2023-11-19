import AppNavigation from "./AppNavigation"; 
import SplashScreen from "../screens/SplashScreen";
import AuthScreen from "../screens/auth/AuthScreen";

export default function RootNavigation() {
  const  user  = 'null';

  return user ? <AppNavigation /> : <AuthScreen />;
}
