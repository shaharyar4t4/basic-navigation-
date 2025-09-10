import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';

import { Animated, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/stack/allScreen';

type PropsType = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;


const SplashScreen = ({ navigation }: PropsType) => {


    const fadeAnim = new Animated.Value(0); // For fade-in animation

    useEffect(() => {
        // Fade in animation
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();

        // Navigate after 3 seconds
        const timer = setTimeout(() => {
            navigation.replace("LoginScreen"); // Replace with your screen name
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
     <View style={styles.container}>
      <Animated.View style={[styles.innerContainer, { opacity: fadeAnim }]}>
        <Text style={styles.appnametxt}>GO</Text>
        <Text style={styles.appsecnametxt}>GREEN</Text>
      </Animated.View>
    </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#447055",
        justifyContent: "center",
        alignItems: "center",
    },
    innerContainer: {
        flexDirection: "row",
        gap: 5,
    },
    appnametxt: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Poppins-Medium",
    },
    appsecnametxt: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#96d6af",
        fontFamily: "Poppins-Medium",
    }

})