import { useState } from "react";
import { Alert, Button, SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import FooterButton from "../components/FooterButton";


const Settings = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

      {/* Header: Profile icon and Home text */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.backArrow} 
              dimension='70%' 
              handlePress={() => {
                router.push('home')
              }}/>
              
          ),
          headerRight: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.ellipsis} 
              dimension='70%' 
              handlePress={() => {
                router.push()
              }}/>
          ),
          headerTitle: "",
        }}/>


	    {/* Footer Buttons */}
		  <View style={styles.footerView}>
        <FooterButton 
          iconUrl={icons.home} 
          dimension={40}
          handlePress={() => {
            router.push('/home')
          }}/>
        <FooterButton 
          iconUrl={icons.calender} 
          dimension={40}
          handlePress={() => {
            router.push('/calender')
          }}/>
        <FooterButton 
          iconUrl={icons.workout} 
          dimension={40}
          handlePress={() => {
            router.push("/workouts")
          }}/>
        <FooterButton 
          iconUrl={icons.settings} 
          dimension={40}
          handlePress={() => {
            router.push('/settings')
          }}/>
      </View>


    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  footerLine: {
    width: '100%',
	  borderColor: '#ededed',
	  borderWidth: 1,
  },
  footerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});


export default Settings;
