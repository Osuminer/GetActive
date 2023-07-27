import { useState, setState } from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import Workout from "../components/Workout/Workout";
import Exercise from "../components/Workout/Exercise";
import ExerciseInput from "../components/Workout/ExerciseInput";
import { Button } from "react-native-web";
import config from '../config';


const AddWorkout = () => {
  const router = useRouter()
  const [ workoutTitle, setWorkoutTitle ] = useState('');
  const [ exercises, setExercises] = useState([]);
  const [ exerciseTitle, setExerciseTitle] = useState('New Workout');
  const [ sets, setSets ] = useState(0);
  const [ reps, setReps] = useState(0)

  const [ workout, setWorkout ] = useState()

  const sendPostRequest = async ( workout ) => {
    var url = config.baseURL + '/workouts'
    var response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "title": "Insane in the membrane day",
        "exercises": [{
          "title": "read book",
          "sets": 10,
          "reps": 8
        },
        {
          "title": "read math book",
          "sets": 10,
          "reps": 8
        },
        {
          "title": "read english book",
          "sets": 10,
          "reps": 8
        }
        ]
      })
    });
    console.log(response);
  }
  
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
            <ScreenHeaderBtn handlePress={() => {
              setWorkout(new Workout(0, workoutTitle, exercises))
              sendPostRequest( workout )
            }} iconUrl={icons.checkmark} dimension='50%' />
          ),
          headerTitle: "",
        }}
      />

      <View style={styles.view}>
        <TextInput 
          style={styles.titleText}
          value={workoutTitle}
          onChange={setWorkoutTitle}
          maxLength={20}/>
        
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.touchOpac}>
            <Image style={[styles.image, {marginVertical: 15}]} source={icons.plus} />
            <Text>Add Picture</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitleText}>Exercises:</Text>
        <ScrollView style={styles.scroll}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Title"
                placeholderTextColor={'#444444'}
                value={exerciseTitle}
                onChange={setExerciseTitle} />
              <TextInput
                style={styles.textInput}
                placeholder="Sets"
                placeholderTextColor={'#444444'}
                value={sets}
                onChange={setSets} />
              <TextInput
                style={styles.textInput}
                placeholder="Reps"
                placeholderTextColor={'#444444'}
                value={reps}
                onChange={setReps} />
		      </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  descTextInput: {
    height: 300,
    width: 300,
    margin: 8,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: '#eaeaea',
    padding: 10,
  },
  scroll: {
    height: 400,
    width: 300,
    marginHorizontal: 8,
    paddingHorizontal: 10,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 25,
    margin: 5,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: '#eaeaea',
    padding: 10,
  },
  subTitleText: {
    fontSize: 20,
    marginTop: 5,
    textAlign: "left",
  },
  image: {
    width: 30,
    height: 30,
  },
  buttonView: {
    padding: 15,
	  margin: 10,
	  borderRadius: SIZES.small / 1.25,
	  backgroundColor: '#eaeaea',
  },
  touchOpac: {
    alignItems: 'center',
    width: 250,
    margin: 8,
  },
  addExerciseView: {
    width: 300,
    padding: 15,
	  marginTop: 5,
    marginBottom: 8,
	  borderRadius: SIZES.small / 1.25,
	  backgroundColor: '#eaeaea',
  },
  addExerciseTouchOpac: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
		padding: 15,
		  margin: 10,
		  borderRadius: SIZES.small / 1.25,
		  backgroundColor: '#eaeaea',
	  },
});

export default AddWorkout;
