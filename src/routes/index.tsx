import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';


import Home from '../pages/Home';
import User from '../pages/User';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
  screenOptions={{
    headerShown: false,
    cardStyle: {backgroundColor: '#e5e5e5'},


  }}

  >
    <App.Screen  name="Home" component={Home}/>
      <App.Screen  name="User" component={User}/>

  </App.Navigator>

);

export default AppRoutes;
