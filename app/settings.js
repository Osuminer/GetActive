import { useState } from "react";
import { Alert, Button, SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";


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
                router.push()
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





    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

});


export default Settings;
