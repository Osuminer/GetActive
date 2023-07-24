import { useState } from "react";
import { Alert, Button, SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import PostSmallView from "../components/Post/PostSmallView";
import FooterButton from "../components/FooterButton";

import Post from '../components/Post/Post'

const Home = () => {
  const router = useRouter()

  let post1 = new Post(
                  id=1, 
                  title='test1', 
                  workout='', 
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis. Lectus urna duis convallis convallis tellus. Aliquet nibh praesent tristique magna sit amet purus gravida. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. ')

  let post2 = new Post(
                  id=2, 
                  title='test2', 
                  workout='', 
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis. Lectus urna duis convallis convallis tellus. Aliquet nibh praesent tristique magna sit amet purus gravida. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. ')

  const feed = [post1, post2];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

      {/* Header: Profile icon and Home text */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.profile} 
              dimension='70%' 
              handlePress={() => {
                router.push("/test")
              }}/>
              
          ),
          headerRight: () => (
            <Text style={styles.homeHeader}>Home</Text>
          ),
          headerTitle: "",
        }}/>

      {/* Contains Add Post and scrollable feed */}
      <View style={styles.view}>

        {/* Add Post Button */}
        <View style={styles.addPostView}>
          <TouchableOpacity 
            style={styles.addPostTouchOpac}
            onPress={() => {
              router.push("/test")
            }}>
            <Text>Add Post...</Text>
            <Image 
              style={styles.image}
              source={icons.plus} />
          </TouchableOpacity>
        </View>
        
        {/* Feed Scroll */}
        <ScrollView style={styles.scroll}>
          {feed.map((post) => {
              return (<PostSmallView post={post} />)
          })}
        </ScrollView>
      </View>
      

      {/* Footer Separator */}
      <View style={styles.footerLine} />

      {/* Footer Buttons */}
      <View style={styles.footerView}>
        <FooterButton 
          iconUrl={icons.home} 
          dimension={40}/>
        <FooterButton 
          iconUrl={icons.calender} 
          dimension={40}/>
        <FooterButton 
          iconUrl={icons.workout} 
          dimension={40}
          handlePress={() => {
            router.push("/viewWorkout")
          }}/>
        <FooterButton 
          iconUrl={icons.settings} 
          dimension={40}/>
      </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  homeHeader: {
    fontSize: 25,
    margin: 8,
  },
  scroll: {
    height: 425,
    width: 340,
    marginTop: 8,
    marginHorizontal: 8,
    paddingHorizontal: 10,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
  addPostView: {
    width: 320,
    padding: 15,
	  marginTop: 40,
    marginBottom: 8,
	  borderRadius: SIZES.small / 1.25,
	  backgroundColor: '#eaeaea',
  },
  image: {
    width: 25,
    height: 25,
  },
  addPostTouchOpac: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLine: {
    width: '100%',
	  borderColor: '#ededed',
	  borderWidth: 1,
  },
  footerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});


export default Home;
