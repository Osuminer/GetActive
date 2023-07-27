import { useEffect, useState } from "react";
import { Alert, Button, SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import PostSmallView from "../components/Post/PostSmallView";
import FooterButton from "../components/FooterButton";

import Post from '../components/Post/Post'
import config from '../config';

const Home = () => {
  const router = useRouter()
  const [isLoading, setLoading] = useState(true);
  const [ posts, setPosts ] = useState([]);

  const getWorkouts = async () => {
    try {
      const t = config.baseURL + '/posts'
      console.log(t)
      const response = await fetch(t);
      const json = await response.json();
      setPosts(json);
      // console.log(json)
    } catch( error ) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWorkouts();
  }, []);

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
              router.push("/addPost")
            }}>
            <Text>Add Post...</Text>
            <Image 
              style={styles.image}
              source={icons.plus} />
          </TouchableOpacity>
        </View>
        
        {/* Feed Scroll */}
        <ScrollView style={styles.scroll}>
<<<<<<< HEAD
          {feed.map((post) => {
            return (<PostSmallView post={post} key={post.id} />)
=======
          {posts.map((post) => {
            return (<PostSmallView key={post.id} post={post} />)
>>>>>>> 2731a3e (Integrated with the API)
          })}
        </ScrollView>
      </View>
      

      {/* Footer Separator */}
      <View style={styles.footerLine} />

      {/* Footer Buttons */}
      <View style={styles.footerView}>
        <FooterButton 
          iconUrl={icons.home} 
          dimension={40}
          handlePress={() => {
            router.push('/home')
          }}/>
        <FooterButton 
          iconUrl={icons.calender} 
          dimension={40}
          handlePress={() => {
            router.push('/calender')
          }}/>
        <FooterButton 
          iconUrl={icons.workout} 
          dimension={40}
          handlePress={() => {
            console.log(router)
            router.push("/workouts")
          }}/>
        <FooterButton 
          iconUrl={icons.settings} 
          dimension={40}
          handlePress={() => {
            router.push('/settings')
          }}/>
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
