import { useState, setState } from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import Workout from "../components/Workout/Workout";
import Exercise from "../components/Workout/Exercise";
import ExerciseInput from "../components/Workout/ExerciseInput";


const AddWorkout = () => {
  const router = useRouter()
  let workout = new Workout()
  let exerciseList = []
  let index = 0
  // const [exerciseList, setExerciseList] = useState([])
//   const params = useLocalSearchParams()
//   const post = JSON.parse(params.post)

  // getInitialState() {
  //   return { exerciseList: [] }
  // }

  // _addExercise() {
  //   this.state.exerciseList.push(index++)
  //   this.setState({ exerciseList: this.state.exerciseList })
  // }

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
            <ScreenHeaderBtn iconUrl={icons.checkmark} dimension='50%' />
          ),
          headerTitle: "",
        }}
      />

      <View style={styles.view}>
        <TextInput 
          style={styles.titleText}
          defaultValue="New Workout"
          maxLength={20}/>
        
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.touchOpac}>
            <Image style={[styles.image, {marginVertical: 15}]} source={icons.plus} />
            <Text>Add Picture</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.addExerciseView}>
          <TouchableOpacity 
            style={styles.addExerciseTouchOpac}
            onPress={() => {
              exerciseList.push(new Exercise())
              console.log(exerciseList)
            }}>
            <Text>Add Exercise...</Text>
            <Image 
              style={styles.image}
              source={icons.plus} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scroll}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            }}>
          
          {exerciseList.map((exercise) => {
            return (<ExerciseInput key={exerciseList.length()}/>)
          })}



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
    height: 320,
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
});

export default AddWorkout;
