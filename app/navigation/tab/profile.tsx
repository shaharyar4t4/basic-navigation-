import MainLayout from '@/components/MainLayout';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { RootStackParamList } from '../navigation/stack/allScreen';


// type PropsType = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Profile = () => {
  return (
    <MainLayout>
            <View style={styles.container}>
                <Text>Profile Screen</Text>
            </View>

    </MainLayout>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
