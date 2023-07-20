import { Stack } from "expo-router";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

// export const unstable_settings = {
//   // Ensure any route can link back to `/`
//   initialRouteName: "home",
// };

const Layout = () => {
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  )
};

export default Layout;
