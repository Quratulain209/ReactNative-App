import React from "react";
import Products from './src/Pages/Products'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "./src/Pages/LoginForm";
import Home from "./src/Pages/Home";
import Profile from "./src/Pages/Profile";
import { UserProvider } from "./src/Context/UserInfo";


const App = () => {
  const stack = createNativeStackNavigator();

  return (
    <>
    {/* <Products/> */}
      <UserProvider>
        <NavigationContainer>
          <stack.Navigator initialRouteName="Login">

            <stack.Screen name="Login" component={LoginForm} />
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="Profile" component={Profile} />

          </stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </>
  )
}
export default App