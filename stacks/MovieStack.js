import React from 'react';
import MovieScreen from '../pages/MovieScreen';
import Detail from '../pages/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MovieStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Movie" component={MovieScreen} />
            <Stack.Screen name="Detail" component={Detail} />
            
        </Stack.Navigator>
    );
};

export default MovieStack;