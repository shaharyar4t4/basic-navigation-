import MainLayout from '@/components/MainLayout';
import React from 'react';
import { Text, View } from 'react-native';
// import { RootStackParamList } from '../navigation/stack/allScreen';


// type PropsType = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = () => {
  return (
    <MainLayout>
            <View>
                <Text>Home Screen</Text>
            </View>

    </MainLayout>
  )
}
