
import LoginScreen from '@/app/screen/LoginScreen';
import SigupScreen from '@/app/screen/SigupScreen';
import SplashScreen from '@/app/screen/SplashScreen';
import MainLayout from '@/components/MainLayout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


//this is the root stack param list which tranfer the another data 
export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  SigupScreen: undefined;
  
//   About: undefined;
//   Detialform: { id: string; name: string };
//   Effect: undefined;
//   RamdonQuote: undefined;
//   ProductDetial: undefined;
  
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Allscreen = () => {
  return (
    <MainLayout>
      <Stack.Navigator initialRouteName={"SplashScreen"} screenOptions={{
        headerShown: false,
        // headerStyle: { backgroundColor: "#999921" },
        // headerTintColor: "#fff",
        // headerTitleStyle: { fontWeight: "bold" },
        // headerTitleAlign: "center",
      }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SigupScreen" component={SigupScreen} />
        {/* <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Detialform" component={Detialform} options={({route})=>({
            title: route.params.name,
        })}/>
        <Stack.Screen name ="Effect" component={Effect}/>
        <Stack.Screen name= "RamdonQuote" component={RamdonQuote}/>
        <Stack.Screen name= "ProductDetial" component={ProductDetial}/> */}

        </Stack.Navigator>
    </MainLayout>
  )
}

export default Allscreen