import { useState } from "react";
import { Alert, Button, SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, useColorScheme } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import FooterButton from "../components/FooterButton";
import SettingsTab from "../components/SettingsTab/SettingsTab";

const Settings = () => {
  const router = useRouter()
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? COLORS.lightWhite : COLORS.gray2 }}>

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
        <View style={styles.view}>
        <Text style={styles.titleText}>Settings</Text>
      </View>

        {/* Contains Settings Tabs */}
      <View style={styles.view}>

        {/* Feed Scroll */}
        <ScrollView style={styles.scroll}>
          <SettingsTab title='this is a setting page'/> 
          <SettingsTab title='this is a setting page'/> 
          <SettingsTab title='this is a setting page'/> 
          <SettingsTab title='this is a setting page'/> 
          <SettingsTab title='this is a setting page'/> 
          <SettingsTab title='this is a setting page'/> 
        </ScrollView>
      </View>

        
        {/* Footer Separator */}
      <View style={styles.footerLine} />

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
  scroll: {
    height: 420,
    width: '100%',
    margin: 8,
    borderRadius: SIZES.small / 1.25,
    paddingBottom: 10,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
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
  },
  titleText: {
    fontSize: 25,
    margin: 5,
  },
  postView: {
	  paddingVertical: 5,
	  marginBottom: 10,
	  borderRadius: SIZES.small / 1.25,
	  backgroundColor: '#eaeaea',
	},
});


export default Settings;
