import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TvScreen from '../pages/TvScreen';
import TvDetail from '../pages/TvDetail';

const Stack = createNativeStackNavigator()


const TvStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="tv" component={TvScreen} />
            <Stack.Screen name="TvDetail" component={TvDetail} />
            
        </Stack.Navigator>
    );
};

export default TvStack;