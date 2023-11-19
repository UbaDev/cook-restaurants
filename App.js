import RootNavigation from "./src/navigation/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootNavigation />
        
      </NavigationContainer>
    </>
  );
}
