import { StyleSheet, View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import Title from "../components/Title";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title style={styles.hometitle}>FitPro</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/fitnessImage.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  hometitle: {
    justifyContent: "flex-end"
  },
  imageContainer: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "40%",
    resizeMode: "contain"
  },
});