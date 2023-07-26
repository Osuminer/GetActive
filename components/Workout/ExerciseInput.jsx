import { Image, TouchableOpacity, Text, Button, StyleSheet, View, TextInput } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";

import { Stack, useRouter } from "expo-router";

const ExerciseInput = () => {	
	return (
		<View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput
              style={styles.textInput}
              placeholder="Title"
              placeholderTextColor={'#444444'} />
            <TextInput
              style={styles.textInput}
              placeholder="Sets"
              placeholderTextColor={'#444444'}/>
            <TextInput
              style={styles.textInput}
              placeholder="Reps"
              placeholderTextColor={'#444444'} />
		</View>
  );
};

const styles = StyleSheet.create({
	textInput: {
		padding: 15,
		  margin: 10,
		  borderRadius: SIZES.small / 1.25,
		  backgroundColor: '#eaeaea',
	  },
  });

export default ExerciseInput;