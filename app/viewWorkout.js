import { useState } from "react";
import { Button, SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {ScreenHeaderBtn} from "../components";

const ViewWorkout = () => {
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
            <Button title="..."/>
          ),
          headerTitle: "Workout Title",
        }}
      />

      <View>
        <Image 
          source={images.profile}
          resizeMode='cover'
          style={{
            width: '60%',
            height: '60%',
            borderRadius: SIZES.small / 1.25,
            justifyContent: "center",
            alignItems: "center",
            }}/>
      </View>
      <ScrollView>
        <Text>This is the Workout page</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewWorkout;
