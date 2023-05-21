import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import MovieScreen from './pages/MovieScreen';
import TvScreen from './pages/TvScreen';
import TvStack from './stacks/TvStack';

const Tab = createBottomTabNavigator()

const App = () => {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen 
          name="Movie"
          // component={MovieScreen}
          component={TvStack}
        />
        <Tab.Screen 
          name="Tv"
          component={TvScreen}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default App;