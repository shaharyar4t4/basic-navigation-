import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../navigation/stack/allScreen';

type PropsType = NativeStackScreenProps<RootStackParamList, "SigupScreen">;

const SigupScreen = ({navigation}: PropsType) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.textContainer}>Create your Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputContainertxt}>
          <Text style={styles.txt}>Sign </Text>
          <Text style={styles.txt}>Up</Text>
        </View>
        <TextInput
        style={styles.input}
        placeholder="Full Name"
        // onChangeText={text => setInputText(text)}
        // value={inputText}
      />

        <TextInput
        style={styles.input}
        placeholder="Email Address"
        // onChangeText={text => setInputText(text)}
        // value={inputText}
      />
       <TextInput
        style={styles.input}
        placeholder="Password"
        // onChangeText={text => setInputText(text)}
        // value={inputText}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{flexDirection:"row", gap:5, marginTop:15}}>
         <Text style={styles.siguptxt}>Back to</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("LoginScreen")}}>
        <Text style={styles.siguptxts}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default SigupScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    height: "25%",
    backgroundColor: "#447055",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Popins-Medium",
  },
  inputContainer: {
    width: "90%",
    height: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: "rgba(189, 252, 213, 0.6)", // 👈 alpha 0.6 for opacity
  },
  inputContainertxt: {
    flexDirection: "row",
    gap: 6,
  },
  txt: {
    fontFamily: "Popins-Medium",
    color: "#447055",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  }, 
   input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
 btn: {
  marginTop: 9,
  width: "80%",
  height: 45,
  backgroundColor: "#447055",
  borderRadius: 25,
  justifyContent: "center", // 👈 centers text vertically
  alignItems: "center",     // 👈 centers text horizontally
},
  btntxt:{
    color:"#fff",
    fontSize:18,
    textAlign:"center",
    marginTop:5,
    fontFamily: "Popins-Medium",
  },
  siguptxt:{
    color:"#447055",
  },
  siguptxts:{
        color:"#447055",
        textDecorationLine:"underline",
        fontWeight:"bold",
  }
})