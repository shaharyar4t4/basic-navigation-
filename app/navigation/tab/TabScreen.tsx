import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import About from './About';
import { Home } from './Home';
import Profile from './profile';


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Home: undefined;
    About: undefined;
    Profile: undefined;
};
const TabScreen = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home}
                options={
                    { tabBarLabel: 'Home' }
                } />
            <Tab.Screen name="About" component={About}
                options={
                    { tabBarLabel: 'About' }
                }
            />
            <Tab.Screen name="Profile" component={Profile}
                options={
                    { tabBarLabel: 'Profile' }
                }
            />
        </Tab.Navigator>
    )
}

export default TabScreen