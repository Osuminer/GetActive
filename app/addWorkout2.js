import { useState, setState, Component } from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Animated } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import Workout from "../components/Workout/Workout";
import Exercise from "../components/Workout/Exercise";
import ExerciseInput from "../components/Workout/ExerciseInput";


class AddWorkout2 extends Component {
  constructor() {
    super();

    this.state = { valueArray: [], disabled: false }
    this.index = 0;
    this.animatedValue = new Animated.Value(0);
  }

  addMore = () => {
    this.animatedValue.setValue(0);
    let newlyAddedValue = { index: this.index }
    this.setState({ disabled: true, valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }
      ).start(() => {
        this.index = this.index + 1;
        this.setState({ disabled: false });
      });
    });
  }

  router() {
    const [router, setRouter] = useState
  }

  render() {
    const router = useRouter()

    let newArray = this.state.valueArray.map((item, key) => {
        return (
          <View key={key} style={styles.viewHolder}>
            <ExerciseInput />
          </View>
        );
    });

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
              onPress={this.addMore}>
              <Text>Add Exercise...</Text>
              <Image 
                style={styles.image}
                source={icons.plus} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container} >
          <ScrollView>
            <View style={{ flex: 1, padding: 4 }}>
              {
                newArray
              }
            </View>
          </ScrollView>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    viewHolder: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      color: 'white',
      fontSize: 25
    },
    buttonDesign: {
      position: 'absolute',
      right: 25,
      bottom: 25,
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonImage: {
      resizeMode: 'contain',
      width: '100%',
    },
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

export default AddWorkout2;


