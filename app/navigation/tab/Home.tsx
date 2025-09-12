import MainLayout from '@/components/MainLayout';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootTabParamList } from './TabScreen';

type PropsType = NativeStackScreenProps<RootTabParamList, 'Home'>;

export const Home = ({navigation}: PropsType) => {
  return (
    <MainLayout>
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>

    </MainLayout>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});