import { StyleSheet, Text, View, Modal } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/colors';
import NavButton from '../components/NavButton';

export default function WorkoutModal(props) {
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={props.visible} animationType='slide'>
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
        <View style={styles.NavButtonContainer}>
          <NavButton onNext={props.onClose}>Back to Progress</NavButton>
        </View>
      </View>  
    </Modal>
  );    
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.accent800,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "paperNoteSketch",
        color: Colors.primary300
    },
    textContainer: {
        flex: 5,
        width: "90%",
        borderWidth: 3,
        borderColor: Colors.primary500,
        padding: 10
    },
    text: {
        color: Colors.primary300,
        fontSize: 20,
        fontFamily: "paperNote"
    },
    NavButtonContainer: {
        marginTop: 10,
        flex: 1,
    },
});