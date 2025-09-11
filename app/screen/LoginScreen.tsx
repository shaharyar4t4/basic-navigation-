import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.textContainer}>Wellcome</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputContainertxt}>
          <Text style={styles.txt}>Log</Text>
          <Text style={styles.txt}>In</Text>
        </View>

        <TextInput
        style={styles.input}
        placeholder="Email Address"
        // onChangeText={text => setInputText(text)}
        // value={inputText}
      />
      </View>
    </View>
  )
}

export default LoginScreen

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
    fontSize: 40,
    color: "#fff",
    fontFamily: "Popins-medium",
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
    alignSelf: "center",
    gap: 6,
  },
  txt: {
    fontFamily: "Popins-medium",
    color: "#447055",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
  }, 
   input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
})