import { useState } from "react";
import { Alert, Button, SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { TextInput } from "react-native-gesture-handler";

const Login = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={styles.view}>
        <Stack.Screen 
          options={{
            headerTitle: "", 
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.lightWhite}}} />

        <Text style={styles.headerText}>Get Active</Text>

        <Text style={styles.text}>Username:</Text>
        <TextInput
          style={styles.textInput} />

        <Text style={styles.text}>Password:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true} />

        <Button 
          style={styles.loginButton}
          title="Login"
          onPress={() => {
            router.push('/blankPost')
          }}/>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    textAlign: 'center',
  },
  view: {
    justifyContent: "center",
    
  },
  textInput: {
		padding: 15,
    margin: 10,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: '#eaeaea',
	  },
  text: {
    fontSize: 18,
    marginTop: 8,
    marginHorizontal: 10,
  },
  loginButton: {
    padding: 15,
    margin: 10,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: '#eaeaea',
  }
});


export default Login;
