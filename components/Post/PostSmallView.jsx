import { Image, TouchableOpacity, Text, Button, StyleSheet, View } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";

import { Stack, useRouter } from "expo-router";

const PostSmallView = ({ post }) => {
	const router = useRouter()
	
	return (
    <View style={styles.postView}>
		<TouchableOpacity
			onPress={() => {
				router.push({pathname: "/viewPost", 
							 params: {post: JSON.stringify(post)}})
			}}>
			<Text style={styles.postTitle}>{post.title}</Text>
			<Text style={styles.postText}>{post.description}</Text>
		</TouchableOpacity>
		<View style={styles.postLineStyle} />
		<Button 
		style={styles.replyButton}
		title="Reply" 
		color="#000000"/>
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
	  paddingVertical: 5,
	  marginBottom: 10,
	  borderRadius: SIZES.small / 1.25,
	  backgroundColor: '#eaeaea',
	},
	postText: {
	  fontSize: 14,
	  margin: 10,
	},
	postTitle: {
	  fontSize: 20,
	  marginTop: 10,
	  textAlign: "center"
	},
	replyButton: {
	  fontSize: 14,
	  textAlign: "center",
	  margin: 10,
	}
  });

export default PostSmallView;