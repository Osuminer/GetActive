import { Image, TouchableOpacity } from "react-native";

import styles from "./workoutimage.style";

const WorkoutImage = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default WorkoutImage;
