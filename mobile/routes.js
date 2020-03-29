import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const appStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes(){
    return(
        <NavigationContainer >
            <appStack.Navigator screenOptions= {{ headerShown:false}}>
                <appStack.Screen name="Incidents" component={Incidents}/>
                <appStack.Screen name="Detail" component={Detail}/>

            </appStack.Navigator>

        </NavigationContainer>
    );
}