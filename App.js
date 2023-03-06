import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigation/RootNavigator";

import LoadingScreen from "./src/screens/LoadingScreen";

import store from "./src/redux/store";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <Provider store={store}>
    {loading ? (<LoadingScreen />) : (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    )}
  </Provider>;
};

export default App;
