import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 200,
    height: 200,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
