import { useState } from "react";
import { Button, SafeAreaView, ScrollView, View, Text, Image, TextInput, StyleSheet } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import WorkoutImage from "../components/WorkoutImage/WorkoutImage";


const ViewPost = () => {
  const router = useRouter()
  const params = useLocalSearchParams()
  const post = JSON.parse(params.post)

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
        <Text style={styles.titleText}>{post.title}</Text>

        <WorkoutImage iconUrl={images.defaultImage} dimension='80%'/>

        <Text style={styles.subTitleText}>Description:</Text>
        <ScrollView style={styles.scroll}>
          <Text>{post.description}</Text>
        </ScrollView>

        <Text style={styles.subTitleText}>Workout:</Text>
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
    height: 130,
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
  subTitleText: {
    fontSize: 20,
    marginTop: 5,
    textAlign: "left",
  },
});

export default ViewPost;
