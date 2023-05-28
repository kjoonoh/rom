import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import MovieStack from './stacks/MovieStack';
import TvStack from './stacks/TvStack';
import SearchScreen from './stacks/SearchScreen';


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
          component={MovieStack}
          
        />
        <Tab.Screen 
          name="Tv"
          component={TvStack}
          
        />
        <Tab.Screen 
          name="Search"
          component={SearchScreen}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default App;