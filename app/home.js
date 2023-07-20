import { useState } from "react";
import { Alert, Button, SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
// import {ScreenHeaderBtn} from "../components";

const Home = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            // <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
            <Button 
              onPress={() => {
                router.push("/test")
              }}
              title="Test"/>
          ),
          headerRight: () => (
            // <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            <Button 
              onPress={() => {
                router.push("/viewWorkout")
              }}
              title="Workout"/>
          ),
          headerTitle: "Home",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={true}>
        <Button title="<"/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
