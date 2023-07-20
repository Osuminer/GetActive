import { useState } from "react";
import { Button, SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
// import {ScreenHeaderBtn} from "../components";

const Test = () => {
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
					router.push("/home")
				}}
				title="Home"/>
          ),
          headerRight: () => (
            // <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            <Button title=">"/>
          ),
          headerTitle: "Test",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={true}>
        <Text>This is the test page</Text>
		<Image source={images.profile}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Test;
