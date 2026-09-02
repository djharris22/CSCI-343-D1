import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/image/picmyself.jpg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Dylan Harris</Text>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL("mailto:djharris2@coastal.edu")
            }}
          >
            djharris2@coastal.edu
          </Text>
          <Text style={styles.text}
          onPress={() => {
              Linking.openURL("tel:4436841773")
            }}
          >
            443-684-1773
            </Text>
          <Text style={styles.text}
            onPress={() => {
              Linking.openURL("https://github.com/djharris22/CSCI-343-D1.git")
            }}
          >
            Open my GitHub
          </Text>
        </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 2,
    marginTop:15,
    width: "100%",
    justifyContent: "center"
  },
  image: {
    flex: 2,
    height: 200,
    width: "100%",
    resizeMode: "stetch",
    borderColor: "black",
    borderWidth:5
  },
  textContainer:{
    flex: 2,
    width: "100%",
  },
  name: {
    fontSize: 55,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginBottom: 100
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontStyle: "italic",
    marginBottom: 10
  },
});
