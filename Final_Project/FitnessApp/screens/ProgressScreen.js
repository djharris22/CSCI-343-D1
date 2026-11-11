import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import WorkoutModal from "../modal/workoutModal"; 

export default function ProgressScreen(props) {
  const insets = useSafeAreaInsets();
  

  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Progress</Title>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.buttonContainer}>
          <NavButton onNext={() => setModalIsVisible(true)}>
            input workout
          </NavButton>
        </View>
      </ScrollView>
      <WorkoutModal
        visible={modalIsVisible}
        title="Workout Log"
        text="Here is your logged workout information..."
        onClose={() => setModalIsVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 30,
    borderColor: Colors.primary500,
    alignSelf: "center",
    alignItems: "center",
  },
});