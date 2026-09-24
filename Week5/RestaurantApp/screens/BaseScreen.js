import { StyleSheet, Text, View, Image, Linking, Button} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from "../components/Title";
import Colors from '../constants/colors';

export default function BaseScreen(props) {
    const insets = useSafeAreaInsets();

  return (
    <View style={[
        styles.rootContainer,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }
    ]}>
        <View style={styles.titleContainer}>
            <Title>Hook and Barrel</Title>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../assets/images/restaurant.jpg")}/>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}
            onPress={() => Linking.openURL("https://hookandbarrelrestaurant.com/")}>
                www.hookandbarrel.com
            </Text>
            <Text style={styles.infoText}
            onPress={() => Linking.openURL("tel:8438395888")}>
                843-839-5888
            </Text>
            <Text style={styles.infoText}
            onPress={() => Linking.openURL("https://maps.app.goo.gl/oaYjKoYMmqMrEhfc9")}>
                8014 N. Kings Hwy., Myrtle Beach, SC 29572
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="View Menu" onPress={props.onNext} color="#9ea023"/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  imageContainer: {
    flex: 4
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center"
  },
  infoText: {
    fontSize: 30,
    textAlign: 'center',
    padding:7,
    fontFamily: "squealer",
    color: Colors.primary500
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150
  }
});
