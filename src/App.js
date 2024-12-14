import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNav from "./navigation/BottomNav";

const App = () => {
  return (

    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  )
}

export default App;