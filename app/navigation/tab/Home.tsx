import MainLayout from '@/components/MainLayout';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const Home = () => {
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