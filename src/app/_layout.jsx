import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";

// export const unstable_settings = {
//   initialRouteName: "home",
// };

function Layout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": PoppinsRegular,
    "Poppins-Medium": PoppinsMedium,
    "Poppins-Bold": PoppinsBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
}

export default Layout;
