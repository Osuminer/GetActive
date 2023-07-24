import { useState } from "react";
import { Button, SafeAreaView, ScrollView, View, Text, Image, TextInput, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import WorkoutImage from "../components/WorkoutImage/WorkoutImage";

const ViewWorkout = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.backArrow} 
              dimension='60%' 
              handlePress={() => {
              	router.push("/home")
                }}/>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.ellipsis} dimension='60%' />
          ),
          headerTitle: "",
        }}
      />

      <View style={styles.view}>
        <Text style={styles.titleText}>Workout Title</Text>

        <WorkoutImage iconUrl={images.defaultImage} dimension='100%'/>

        <ScrollView style={styles.scroll}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            }}>
          <Text style={styles.exerciseText}>Bench Press - 4x10</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.exerciseText}>Push Ups - 3x20</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.exerciseText}>Push Ups - 3x20</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.exerciseText}>Push Ups - 3x20</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.exerciseText}>Push Ups - 3x20</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.exerciseText}>Push Ups - 3x20</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.exerciseText}>Push Ups - 3x20</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.exerciseText}>Push Ups - 3x20</Text>
          <View style={styles.lineStyle} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    height: 320,
    width: 300,
    margin: 8,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: '#eaeaea',
    padding: 10,
  },
  exerciseText: {
    fontSize: 18,
    margin: 6,
    padding: 6,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
  lineStyle: {
    width: 300,
    borderColor: '#bbbbbb',
    borderWidth: 1,
  },
  titleText: {
    fontSize: 25,
    margin: 5,
  },
});

export default ViewWorkout;
