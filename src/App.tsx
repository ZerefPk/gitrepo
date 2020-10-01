import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar,   } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
const image = 'assets/github.png';
import Routes from './routes';
const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar  barStyle="dark-content"  translucent/>

    <Routes/>
  </NavigationContainer>
);
export default App;
