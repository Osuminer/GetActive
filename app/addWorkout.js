import { useState } from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import Workout from "../components/Workout/Workout";
import Exercise from "../components/Workout/Exercise";
import ExerciseElement from "../components/Workout/ExerciseElement";
import config from '../config';


const AddWorkout = () => {
  const router = useRouter()
  const [ workoutTitle, setWorkoutTitle ] = useState('');
  const [ exercises, setExercises] = useState([]);

  const [ exerciseTitle, setExerciseTitle] = useState('');
  const [ sets, setSets ] = useState('0');
  const [ reps, setReps] = useState('0');

  const [ workout, setWorkout ] = useState()

  const addExercise = ( title, sets , reps ) => {
    console.log(workoutTitle)
    console.log(exercises)
    setExercises(exercises => [...exercises, { title: title, sets: sets, reps: reps}])
  }

  const sendPostRequest = async ( workout ) => {
    var url = config.baseURL + '/workouts'
    var response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "title": workoutTitle,
        "exercises": exercises
      })
    });
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
          placeholder="New Workout"
          placeholderTextColor={'#444444'}
          defaultValue={workoutTitle}
          onChangeText={workoutTitle => setWorkoutTitle(workoutTitle)}
          maxLength={10}/>
        
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.touchOpac}>
            <Image style={[styles.image, {marginVertical: 15}]} source={icons.plus} />
            <Text>Add Picture</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.subTitleText}>Exercises:</Text>

        {/* Text Inputs for exercise to be added */}
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            placeholderTextColor={'#444444'}
            defaultValue={exerciseTitle}
            onChangeText={newExerciseTitle =>  { console.log(newExerciseTitle); setExerciseTitle(newExerciseTitle) } } />
          <TextInput
            style={styles.textInput}
            placeholder="Sets"
            placeholderTextColor={'#444444'}
            keyboardType="numeric"
            defaultValue={sets}
            onChangeText={newSet => { console.log(newSet); setSets(newSet)}} />
          <TextInput
            style={styles.textInput}
            placeholder="Reps"
            placeholderTextColor={'#444444'}
            keyboardType="numeric"
            defaultValue={reps}
            onChangeText={newRep => { console.log(newRep); setReps(newRep) } } />
        </View>

        {/* Button to add exercise to array */}
        <Button 
          style={styles.submitButton}
          // onPress={() => addExercise('test', 1, 2)}
          onPress={() => addExercise( exerciseTitle, sets, reps )}
          title="Add Exercise">
        </Button>

        <View style={styles.lineStyle}/>

        {/* Scroll View for finalized exercises */}
        <ScrollView style={styles.scroll}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            }}>
          
          {exercises.map((exercise) => {
            return (<ExerciseElement key={exercise.id} exercise={exercise} />)
          })}

          {/* {exercises.map((exercise) => {
            return (<Text key={exercise.id}>{exercise.title} </Text>)
          })} */}

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
    height: 200,
    width: 300,
    marginHorizontal: 8,
    marginTop: 12,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: '#eaeaea',
    padding: 10,
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
  submitButton: {
    width: 300,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
  },
  lineStyle: {
		width: 330,
		borderColor: '#bbbbbb',
		borderWidth: 1,
  },
});

export default AddWorkout;
