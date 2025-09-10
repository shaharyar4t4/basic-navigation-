import MainLayout from '@/components/MainLayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/stack/allScreen';


type PropsType = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: PropsType) => {
  return (
    <MainLayout>
            <View>
                <Text>Home Screen</Text>
            </View>

    </MainLayout>
  )
}
