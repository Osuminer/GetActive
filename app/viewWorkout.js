import { Button, SafeAreaView, ScrollView, View, Text, Image, TextInput, StyleSheet } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import WorkoutImage from "../components/WorkoutImage/WorkoutImage";
import ExerciseElement from "../components/Workout/ExerciseElement";

const ViewWorkout = () => {
  const router = useRouter()
  const params = useLocalSearchParams()
  const workout = JSON.parse(params.workout)

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
              	router.push("/workouts")
                }}/>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.ellipsis} dimension='60%' />
          ),
          headerTitle: "",
        }}
      />

      <View style={styles.view}>
        <Text style={styles.titleText}>{workout.title}</Text>

        <WorkoutImage iconUrl={images.defaultImage} dimension='100%'/>

        <ScrollView style={styles.scroll}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            }}>
          
          {workout.exercises.map((exercise) => {
            return (<ExerciseElement exercise={exercise} />)
          })}

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