import {Button, ImageBackground, Platform, Pressable, StyleSheet, Text, View, Modal, useWindowDimensions, ScrollView,} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import Title from "../components/Title";
import Colors from "../constants/colors";
import WheelPicker from "react-native-wheely";
import NavButton from "../components/NavButton";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  function onChangeCheckIn(event, selectedDate) {
    if (Platform.OS === "android") {
      hideCheckInPicker();
    }

    if (selectedDate) {
      setCheckIn(selectedDate);
    }
  }

  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event, selectedDate) {
    if (Platform.OS === "android") {
      hideCheckOutPicker();
    }

    if (selectedDate) {
      setCheckOut(selectedDate);
    }
  }

  const guestCounts = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ];

  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuest, setShowNumGuests] = useState(false);

  function showNumGuestPicker() {
    setShowNumGuests(true);
  }

  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  const campsiteCounts = [1, 2, 3, 4, 5];

  const [numCampsite, setNumCampsite] = useState(0);
  const [showCampsite, setShowCampsite] = useState(false);

  function showCampsitePicker() {
    setShowCampsite(true);
  }

  function hideCampsitePicker() {
    setShowCampsite(false);
  }

  function onChangeCampsite(index) {
    setNumCampsite(index);
  }

  const [results, setResults] = useState("");

  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res +  `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res +  `Number of Campsites:\t\t${campsiteCounts[numCampsite]}\n`;
    setResults(res);
  }

  const {width, height} =useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.1
  };
  const dateTextFlex ={
    fontSize: width * 0.05,
  };
  return (
    <ImageBackground
      source={require("../assets/images/camping.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
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
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.scrollMainContainer}>
        <View style={styles.titleContainer}>
          <Title>Riviera Retreat</Title>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.dateContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>Check In</Text>

            <Pressable onPress={showCheckInPicker}>
              <Text style={[styles.dateText, dateTextFlex]}>{checkIn.toDateString()}</Text>
            </Pressable>
          </View>

          <View style={styles.dateContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out</Text>
            <Pressable onPress={showCheckOutPicker}>
              <Text style={[styles.dateText, dateTextFlex]}>{checkOut.toDateString()}</Text>
            </Pressable>
          </View>
        </View>

        {showCheckIn && Platform.OS === "android" && (
          <DateTimePicker
            testID="dateTimePicker1"
            value={checkIn}
            mode="date"
            display="default"
            minimumDate={new Date()}
            onChange={onChangeCheckIn}
          />
        )}

        {showCheckIn && Platform.OS === "ios" && (
          <Modal
            visible={showCheckIn}
            animationType="slide"
            transparent={true}
            supportedOrientations={["portrait", "landscape"]}
            onRequestClose={hideCheckInPicker}
          >
            <View style={styles.centeredModalView}>
              <View style={styles.modalView}>
                <DateTimePicker
                  value={checkIn}
                  mode="date"
                  display="spinner"
                  minimumDate={new Date()}
                  onChange={onChangeCheckIn}
                />

                <Button
                  title="Confirm"
                  onPress={hideCheckInPicker}
                />
              </View>
            </View>
          </Modal>
        )}

        {showCheckOut && Platform.OS === "android" && (
          <DateTimePicker
            testID="dateTimePicker2"
            value={checkOut}
            mode="date"
            display="default"
            minimumDate={checkIn}
            onChange={onChangeCheckOut}
          />
        )}

        {showCheckOut && Platform.OS === "ios" && (
          <Modal
            visible={showCheckOut}
            animationType="slide"
            transparent={true}
            supportedOrientations={["portrait", "landscape"]}
            onRequestClose={hideCheckOutPicker}
          >
            <View style={styles.centeredModalView}>
              <View style={styles.modalView}>
                <DateTimePicker
                  value={checkOut}
                  mode="date"
                  display="spinner"
                  minimumDate={checkIn}
                  onChange={onChangeCheckOut}
                />

                <Button
                  title="Confirm"
                  onPress={hideCheckOutPicker}
                />
              </View>
            </View>
          </Modal>
        )}

        <View style={styles.rowContainer}>
          <Text style={[styles.dateLabel, dateLabelFlex]}>Number of Guests:</Text>
          <Pressable onPress={showNumGuestPicker}>
            <View style={styles.dateTextContainer}>
              <Text style={[styles.dateText, dateTextFlex]}>{guestCounts[numGuests]}</Text>
            </View>
          </Pressable>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showNumGuest}
          supportedOrientations={["landscape", "portrait"]}
          onRequestClose={hideNumGuestsPicker}
        >
          <View style={styles.centeredModalView}>
            <View style={styles.modalView}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Enter Number of Guests:</Text>
              <WheelPicker
                selectedIndex={numGuests}
                options={guestCounts}
                onChange={onChangeNumGuests}
                containerStyle={{ width: 200 }}
              />
              <Button
                title="Confirm"
                onPress={hideNumGuestsPicker}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.rowContainer}>
          <Text style={[styles.dateLabel, dateLabelFlex]}>
            Number of Campsites:
          </Text>

          <Pressable onPress={showCampsitePicker}>
            <View style={styles.dateTextContainer}>
              <Text style={[styles.dateText, dateTextFlex]}>
                {campsiteCounts[numCampsite]}
              </Text>
            </View>
          </Pressable>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showCampsite}
          supportedOrientations={["landscape", "portrait"]}
          onRequestClose={hideCampsitePicker}
        >
          <View style={styles.centeredModalView}>
            <View style={styles.modalView}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Enter Number of Campsites:</Text>
              <WheelPicker
                selectedIndex={numCampsite}
                options={campsiteCounts}
                onChange={onChangeCampsite}
                containerStyle={{ width: 200 }}
              />
              <Button
                title="Confirm"
                onPress={hideCampsitePicker}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.buttonContainer}>
          <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
        </View>
        <View style={styles.resultsContainer}>
          <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
        </View>
        </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },

  backgroundImage: {
    opacity: 0.45,
  },

  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
    width: 750,
    maxWidth: "90%",

  },
  scrollContainer:{
    flex: 1,
    width: 3000,
    maxWidth: "100%"
  },
  scrollMainContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },

  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
    marginHorizontal: 10,
  },

  dateLabel: {
    fontFamily: "camp",
    color: Colors.primary500,
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },

  dateTextContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },

  dateText: {
    fontSize: 20,
    color: Colors.primary800,
    fontWeight: "bold",
  },

  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    padding: 35,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonContainer: {
    alignItems: "center",
  },

  resultsContainer: {
  },

  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "camp",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});