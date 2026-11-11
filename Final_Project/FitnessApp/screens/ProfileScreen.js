import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import Colors from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen(props) {
    const insets = useSafeAreaInsets();

    return (
        <LinearGradient
            colors={[Colors.primary800, Colors.accent500, Colors.primary800]}
            style={styles.gradientContainer}
        >
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
                    <Title>My Profile</Title>
                </View>

                <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
                    <View style={styles.buttonContainer}>
                        <NavButton onNext={props.onSaveProfile}>Save Info</NavButton>
                    </View>
                </ScrollView>            
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 30,
    borderColor: Colors.primary500,
    alignSelf: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  fieldContainer: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontFamily: "Note",
    fontSize: 26,
    color: Colors.primary500,
    marginBottom: 6,
  },
  placeholderBox: {
    borderWidth: 1,
    borderColor: Colors.primary500,
    borderRadius: 6,
    padding: 12,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  placeholderText: {
    color: Colors.primary300,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.primary500,
    borderRadius: 6,
    padding: 12,
    color: Colors.primary500,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    fontSize: 18,
    fontFamily: "Note",
  },
  radioGroup: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  radioGroupLabel: {
    fontSize: 18,
    color: Colors.primary500,
    fontFamily: "Note",
  },
  checkBoxContainer: {
    width: '100%',
  },
  checkBox: {
    padding: 3,
  },
  checkboxText: {
    textDecorationLine: "none",
    color: Colors.primary500,
    fontFamily: "Note",
    fontSize: 20,
  },
  innerIcon: {
    borderRadius: 0,
    borderColor: Colors.primary500,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  }
});