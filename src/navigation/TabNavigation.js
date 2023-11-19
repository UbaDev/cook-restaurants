import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AwesomeIcon from "react-native-vector-icons/FontAwesome"
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeNavigator from './StackNavigation'

const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarLabel: "",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: "8%",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} options={{
        headerShown: false,
        
      }}/>

      <Tab.Screen name="Search" component={SearchScreen} />

      <Tab.Screen name="Favorites" component={FavoritesScreen} />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const setIcon = (route, routeStatus) => {
  let iconName = "";
  let color = "#C5CBD3";
  let iconSize = 24; 
  if (routeStatus.focused) {
    color = "#EF9F27";
  }

  if (route.name === "Home") {
    iconName = "home";
  }
  if (route.name === "Search") {
    iconName = "compass";
  }
  if (route.name === "Favorites") {
    iconName = "heart";
  }
  if (route.name === "Profile") {
    iconName = "user";
  }
  return <AwesomeIcon name={iconName} color={color} size={iconSize} />;
};
