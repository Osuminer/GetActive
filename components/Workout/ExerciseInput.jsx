import { Image, TouchableOpacity, Text, Button, StyleSheet, View, TextInput } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";

import { Stack, useRouter } from "expo-router";
import { useState } from "react";

const ExerciseInput = () => {	
  const [ title, setTitle] = useState('');
  const [ sets, setSets ] = useState(0);
  const [ reps, setReps] = useState(0)

	return (
		<View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput
              style={styles.textInput}
              placeholder="Title"
              placeholderTextColor={'#444444'}
              value={title}
              onChange={setTitle} />
            <TextInput
              style={styles.textInput}
              placeholder="Sets"
              placeholderTextColor={'#444444'}
              value={sets}
              onChange={setSets} />
            <TextInput
              style={styles.textInput}
              placeholder="Reps"
              placeholderTextColor={'#444444'}
              value={reps}
              onChange={setReps} />
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