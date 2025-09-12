import MainLayout from '@/components/MainLayout';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { RootStackParamList } from '../navigation/stack/allScreen';



export const About = () => {
  return (
    <MainLayout>
            <View style={styles.container}>
                <Text>About Screen</Text>
            </View>

    </MainLayout>
  )
}
export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});