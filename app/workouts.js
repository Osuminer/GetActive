import { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import FooterButton from "../components/FooterButton";

import Workout from '../components/Workout/Workout';
import WorkoutSmallView from "../components/Workout/WorkoutSmallView";
import { FlatList } from "react-native-gesture-handler";

import config from '../config';

const Workouts = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [ workouts, setWorkouts ] = useState([]);
  // console.log(config)
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
              iconUrl={icons.backArrow}
              dimension="70%"
              handlePress={() => {
                router.push("/home");
              }}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.plus}
              dimension="70%"
              handlePress={() => {
                router.push("/addWorkout");
              }}
            />
          ),
          headerTitle: "",
        }}
      />

      {/* Header */}
      <View style={styles.view}>
        <Text style={styles.titleText}>Workouts</Text>
      </View>

      <FlatList
        data={workouts}
        numColumns={2}
        renderItem={(workout) => <WorkoutSmallView workout={workout.item} /> }
        style={{height: 430}}
        contentContainerStyle={{ paddingVertical: 20, alignItems: 'left'}}/>

      {/* Footer Separator */}
      <View style={styles.footerLine} />

      {/* Footer Buttons */}
      <View style={styles.footerView}>
        <FooterButton 
          iconUrl={icons.home} 
          dimension={40} 
          handlePress={() => {
            router.push("/home");
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
            router.push("/workouts");

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
    backgroundColor: "#eaeaea",
  },
  image: {
    width: 25,
    height: 25,
  },
  addPostTouchOpac: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerLine: {
    width: "100%",
    borderColor: "#ededed",
    borderWidth: 1,
  },
  footerView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titleText: {
    fontSize: 25,
    margin: 5,
  },
});

export default Workouts;
