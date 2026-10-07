import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import Colors from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen(props) {
    //set safe area screen boundries
    const insets = useSafeAreaInsets();

    return (
        <LinearGradient
        colors={[Colors.primary800, Colors.accent500, Colors.primary800]}
        style ={styles.container}>
        <View style={[styles.container,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left, 
                paddingRight: insets.right,
            },
        ]}
        >
            <View style={styles.titleContainer}>
                <Title>Coastal Cycle Co.</Title>
            </View>
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.radionContainer}>
                <Text style={styles.radioHeader}> Service Time</Text>
                <RadioGroup
                radioButtons={props.repairTimeRadioButtons}
                onPress={props.onSetRepairTimeId}
                selectedId={props.repairTimeId}
                layout="row"
                containerStyle={styles.radioGroup}
                labelStyle={styles.radioGroupLabel}
                />
            </View>
            <View>
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.checkboxheader}> Type of Service</Text>
                    <View style={styles.checkBoxContainer}>
                        {props.services.map((item) => {
                            return(
                                <BouncyCheckbox
                                key={item.id}
                                text={item.name}
                                onPress={props.onSetServices.bind(this, item.id)}
                                textStyle={{
                                    textDecorationLine: "none",
                                    color: Colors.primary500,
                                    fontFamily: "Note",
                                    fontSize: 20
                                }}
                                innerIconStyle={{
                                    borderRadius: 0,
                                    borderColor: Colors.primary500
                                }}
                                iconStyle={{borderRadius: 0}}
                                fillColor={Colors.primary500}
                                style={styles.checkBox}
                                />
                            );
                        })}
                    </View>
                </View>
            </View>
            <View style={styles.rowConatainer}>
                <View style={styles.addOnsContainer}>
                    <View style={styles.addOnsSubContainer}>
                        <Text style={styles.addOnslabel}>Join Newspaper</Text>
                        <Switch 
                        onValueChange={props.onSetNewsletter}
                        value={props.newsletter}
                        thumbColor={
                            props.newsletter ? Colors.primary500 : Colors.primary300
                        }
                        trackColor={{false: "#767577", true: "#c9ff35" }}
                        />
                    </View>
                    <View style={styles.addOnsSubContainer}>
                        <Text style={styles.addOnslabel}>Become a Member</Text>
                        <Switch 
                        onValueChange={props.onSetRentalMembership}
                        value={props.rentalMembership}
                        thumbColor={
                            props.rentalMembership ? Colors.primary500 : Colors.primary300
                        }
                        trackColor={{false: "#767577", true: "#c9ff35" }}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onNext={props.onNext}>Submit Order</NavButton>
            </View>
        </ScrollView>            
        </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 30,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 30,
    borderColor: Colors.primary500
  },
  scrollContainer: {
    flex: 1,
  },
  radionContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
    fontFamily: "Note",
  },
  radioGroup: {
    paddingBottom: 30,
  },
  radioGroupLabel: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note",
  },
  checkboxheader: {
    fontFamily: "Note",
    fontSize: 30,
    color: Colors.primary500,
  },
  checkBox: {
    padding: 3,
  },
  addOnsContainer: {
    justifyContent: "space-between"
  }, 
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  addOnslabel: {
    color: Colors.primary500,
    fontSize: 30,
    fontFamily: "Note",
  },
  buttonContainer: {
    alignItems: "center",
  }
});