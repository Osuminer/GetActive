import { useEffect, useState, useCallback } from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";

import config from '../config';

let workoutData = [
  {
    id: 1,
    title:'Chest Day'
  },
  {
    id: 2,
    title:'Back Day'
  },
  {
    id: 3,
    title:'Leg Day'
  },
  {
    id: 4,
    title:'Test Day'
  }
]

const Item = ({ workout, onPress, backgroundColor}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.workoutTouchOpac, {backgroundColor}]}>

      <Text>{workout.title}</Text>
    </TouchableOpacity>
)


const AddPost = () => {
  const router = useRouter()
  const [ isLoading, setLoading ] = useState(true);
  const [ title, setTitle ] = useState('New Post');
  const [ description, setDescription ] = useState('');
  const [ workouts, setWorkouts ] = useState([]);
  const [ selectedId, setSelectedId ] = useState();


  const getWorkouts = async () => {
    try {
      const t = config.baseURL + '/workouts'
      console.log(t)
      const response = await fetch(t);
      const json = await response.json();
      setWorkouts(json);
      // console.log(json)
    } catch( error ) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const sendPostRequest = async ( post ) => {
    var url = config.baseURL + '/posts'
    var response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "title": post.title,
        "description": post.description,
        "workoutId": post.workoutId
      })
    });
  }

  const renderItem = (workout) => {
    const backgroundColor = workout.item.id === selectedId ? '#ababab' : '#eaeaea'

    return (
      <Item
        workout={workout.item}
        onPress={() => setSelectedId(workout.item.id)}
        backgroundColor={backgroundColor}/>
    )
  }

  useEffect(() => {
    getWorkouts();
  }, []);

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
            <ScreenHeaderBtn 
            iconUrl={icons.checkmark} 
            dimension='50%'
            handlePress={() => sendPostRequest( { title: title, description: description, workoutId: selectedId })} />
          ),
          headerTitle: "",
        }}
      />

      <View style={styles.view}>
        <TextInput 
          style={styles.titleText}
          defaultValue={title}
          onChangeText={setTitle}
          maxLength={20}/>
        

        <Text style={styles.subTitleText}>Workout:</Text>


        <FlatList
          style={styles.workoutFlatList}
          data={workouts}
          renderItem={renderItem}
          keyExtractor={workout => workout.id}
          extraData={selectedId}/>

        <View style={styles.lineStyle} />

        <Text style={styles.subTitleText}>Description:</Text>
        
        <TextInput 
          style={styles.descTextInput}
          multiline
          placeholder="Description"/>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  descTextInput: {
    height: 200,
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
  titleText: {
    fontSize: 25,
    margin: 5,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: '#eaeaea',
    padding: 10,
  },
  subTitleText: {
    fontSize: 20,
    marginTop: 45,
    textAlign: "left",
  },
  image: {
    width: 30,
    height: 30,
    marginVertical: 15,
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
  workoutTouchOpac: {
    alignItems: 'center',
    width: 300,
    marginHorizontal: 8,
    marginVertical: 5,
    padding: 15,
    borderRadius: SIZES.small / 1.25,
  },
  lineStyle: {
		width: 330,
		borderColor: '#bbbbbb',
		borderWidth: 1,
  },
  workoutFlatList: {
    height: 150,
  }
});

export default AddPost;
