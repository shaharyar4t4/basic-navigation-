import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
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
                    {
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: () => (
                            <Feather name="home" size={24} color="black" />

                        ),
                    }
                } />
            <Tab.Screen name="About" component={About}
                options={
                    {
                        tabBarLabel: 'About',
                        headerShown: false,
                        tabBarIcon: () => (

                            <Entypo name="documents" size={24} color="black" />),
                    }
                }
            />
            <Tab.Screen name="Profile" component={Profile}
                options={
                    { tabBarLabel: 'Profile',
                        headerShown: false,
                        tabBarIcon: () => (
                            <AntDesign name="user" size={24} color="black" />
                        ),
                     }
                }
            />
        </Tab.Navigator>
    )
}

export default TabScreen