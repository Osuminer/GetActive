import { Image, TouchableOpacity, Text, Button, StyleSheet, View } from "react-native";
// import { COLORS, icons, images, SIZES } from '../constants';

const FooterButton = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
		<Image
			style={styles.btnImg(dimension)} 
			source={iconUrl} />
	</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	btnImg: (dimension) => ({
		width: dimension,
		height: dimension,
	  }),
  });

export default FooterButton;