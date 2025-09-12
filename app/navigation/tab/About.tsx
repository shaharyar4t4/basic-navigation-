import MainLayout from '@/components/MainLayout';
import React from 'react';
import { Text, View } from 'react-native';
// import { RootStackParamList } from '../navigation/stack/allScreen';


// type PropsType = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const About = () => {
  return (
    <MainLayout>
            <View>
                <Text>About Screen</Text>
            </View>

    </MainLayout>
  )
}
export default About