
import { Home } from '@/app/navigation/tab/Home';
import MainLayout from '@/components/MainLayout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


//this is the root stack param list which tranfer the another data 
export type RootStackParamList = {
  Home: undefined;
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
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{
        headerShown: true,
        // headerStyle: { backgroundColor: "#999921" },
        // headerTintColor: "#fff",
        // headerTitleStyle: { fontWeight: "bold" },
        // headerTitleAlign: "center",
      }}>
        <Stack.Screen name="Home" component={Home} />
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