import { Image, TouchableOpacity, Text, Button, StyleSheet, View } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";

import { Stack, useRouter } from "expo-router";
import rightChevron from '../../constants/images';
const SettingsTab = ({ title, route }) => {
	const router = useRouter()
	
	return (
    <View style={styles.postView}>
        <Text style={styles.postTitle}>{title}</Text>
        <Image 
            style={styles.image}
            source={images.rightChevron} />
	</View>
  );
};

const styles = StyleSheet.create({
	postLineStyle: {
	  width: 320,
	  borderColor: '#cdcdcd',
	  borderWidth: 1,
	},
	view: {
	  justifyContent: "center",
	  alignItems: "center",
	},
	postView: {
      flexDirection: 'row',
	  paddingVertical: 5,
	  marginBottom: 10,
	  backgroundColor: '#eaeaea',
	},
	postText: {
	  fontSize: 14,
	  margin: 10,
	},
	postTitle: {
	  fontSize: 20,
	  marginTop: 10,
	  alignItems: 'flex-start'
	},
	replyButton: {
	  fontSize: 14,
	  textAlign: "center",
	  margin: 10,
	},
    image: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
		width: 10,
		height: 10,
		borderRadius: SIZES.small / 1.25,
	},
  });

export default SettingsTab;