import { StyleSheet, Text, View, Image} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/colors';
import Title from "../components/Title"
import NavButton from '../components/NavButton';

export default function HomeScreen(props) {
  const insets =useSafeAreaInsets();
  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
    <View style={styles.titleContainer}>
      <Title>Cook Book</Title>
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/images/frontImage.jpg")}
        style={styles.image} />
    </View>
      <View style={styles.NavButtonContainer}>
        <NavButton onNext={props.onNext}>Go to Recipes</NavButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%"
  },
  titleContainer: {
    flex:1,
    justifyContent: "center",
    alignContent:"center",
    marginVertical: 20
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.accent500
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "stretch"
  },
  NavButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
