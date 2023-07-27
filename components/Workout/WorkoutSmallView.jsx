import { Image, TouchableOpacity, Text, Button, StyleSheet, View } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";

import { Stack, useRouter } from "expo-router";

const WorkoutSmallView = ({ workout }) => {
	const router = useRouter()
	
	return (
    <View style={styles.postView}>
      <TouchableOpacity
        onPress={() => {
          router.push({pathname: "/viewWorkout", 
                params: {workout: JSON.stringify(workout)}})
        }}>
        <Image 
          style={styles.image}
          source={images.defaultImage} />
        <Text style={styles.postTitle}>{workout.title}</Text>
      </TouchableOpacity>
	</View>
  );
};

const styles = StyleSheet.create({
	view: {
	  justifyContent: "center",
	  alignItems: "center",
	},
	postView: {
	  paddingVertical: 5,
	  marginHorizontal: 40,
    marginBottom: 20,
    justifyContent: "center",
	  alignItems: "center",
	},
	postText: {
	  fontSize: 14,
	  margin: 10,
	},
	postTitle: {
	  fontSize: 20,
	  marginTop: 10,
	  textAlign: "center",

	},
	image: {
		width: 90,
		height: 90,
		borderRadius: SIZES.small / 1.25,
	},
  });

export default WorkoutSmallView;