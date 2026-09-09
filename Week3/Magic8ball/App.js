import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Button, TextInput, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useState} from 'react'
export default function App() {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [userpromt, setuserprompt] = useState("");
  const [magicResponse, setmagicReponse] = useState("");

  function startEightBallhandler () {
    setmodalIsVisible(true);
  }
  function endEightBallhandler () {
    setmodalIsVisible(false);
  }
  function onBallRoll(){
    const randomNum = Math.floor(Math.random() * responses.length);
    setmagicReponse(responses[randomNum]);
    setmodalIsVisible(false);
  }
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic Eight Ball</Text>
        </View>

        <View style={styles.rollButtonContainer}>
          <Pressable 
            android_ripple={{color: "orange"}}
            onPress={startEightBallhandler}
            style={({pressed}) => {
              return pressed && styles.pressedButton;
            }}
          >
            <View style={styles.rollButton}>
              <Text style={styles.rollButtonText}>Roll Eight ball</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.eightballContainer}>
          <View style={styles.eightball}>
            <Text style={styles.eighballtext}>8</Text>
          </View>
        </View>

        <View style ={styles.promptContainer}>
          <Text style ={styles.resultText}>User Entered: {userpromt}</Text>
        </View>

        <View style ={styles.resultContainer}>
          <Text style ={styles.resultText}>The Magic Eight Ball Result is: {magicResponse}</Text>
        </View>

        <Modal visible ={modalIsVisible}>
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>please enter magic eight ball prompt:</Text>
            <TextInput
              style={styles.TextInput}
              placeholder = "Enter a fortune"
              onChangeText = {setuserprompt}
              value = {userpromt}
              ketboardType = "default"
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='Roll 8 ball' onPress={onBallRoll}/>
              </View>
              <View style={styles.button}>
                <Button title="cancel" color="black" onPress={endEightBallhandler} />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c599c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'black',
    width: "90%",
    margin: 20,
    borderWidth: 3, 
    borderColor: "white",
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center"
  },
  rollButton:{
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
  rollButtonContainer: {
    flex: 1,
    justifyContent: "center"
  },
  rollButtonText: {
    color: "black",
    padding: 0,
    fontSize: 25,
    textAlign: "center"
  },
  pressedButton: {
    opacity: 0.5,
  },
  eightballContainer: {
    flex: 1,
    width: 150,
    height: 100,
    borderRadius: 100,
    justifyContent:"center",
    backgroundColor: "black"
  },
  eightball: {
    fontSize: 40,
    color:"white",
    paddingVertical: 0,
    margin: 30,
  },
  eighballtext: {
    color: "white",
    fontSize: 60,
    textAlign:"center",
  },
  promptContainer:{
    marginTop: 40,
  },
  resultContainer: {
    flex: 2,
    marginTop: 60,
  },
  resultText: {
    fontSize: 25,
    color: "white",
    textAlign: "center"
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "navy",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "pink",
    backgroundColor: "white",
    borderRadius: 6,
    width: "90%",
    padding: 12,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: "30%",
    marginHorizontal: 8
  }
});