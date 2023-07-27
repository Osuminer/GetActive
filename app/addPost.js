import { useState, useCallback } from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";

let workoutData = [
  {
    id: 1,
    title:'1'
  },
  {
    id: 2,
    title:'2'
  },
  {
    id: 3,
    title:'3'
  }
]

const Item = ({ workout, onPress, backgroundColor}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.touchOpac, {backgroundColor}]}>

      <Text>{workout.title}</Text>
    </TouchableOpacity>
)


const AddPost = () => {
  const router = useRouter()

  const [ selectedId, setSelectedId ] = useState();

  const renderItem = (workout) => {
    const backgroundColor = workout.id === selectedId ? '#6e3b6e' : '#f9c2ff'
    console.log(workout.id)

    return (
      <Item
        workout={workout}
        onPress={() => setSelectedId(workout.id)}
        backgroundColor={backgroundColor}/>
    )
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
              	router.push("/home")
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
          defaultValue="New Post"
          maxLength={20}/>
        
        <FlatList
          data={workoutData}
          renderItem={renderItem}
          keyExtractor={workout => workout.id}
          extraData={selectedId}/>

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
    height: 300,
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
    marginTop: 5,
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
  }
});

export default AddPost;
