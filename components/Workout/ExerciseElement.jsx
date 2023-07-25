import { Image, TouchableOpacity, Text, Button, StyleSheet, View } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";

import { Stack, useRouter } from "expo-router";

const ExerciseElement = ({ exercise }) => {	
	return (
		<View>
			<Text style={styles.exerciseText}>{exercise}</Text>
			<View style={styles.lineStyle} />
		</View>
  );
};

const styles = StyleSheet.create({
	exerciseText: {
		fontSize: 18,
		margin: 6,
		padding: 6,
	  },
	  lineStyle: {
		width: 300,
		borderColor: '#bbbbbb',
		borderWidth: 1,
	  },
  });

export default ExerciseElement;