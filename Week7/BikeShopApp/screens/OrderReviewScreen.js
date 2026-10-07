import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from '../components/Title';
import Colors from '../constants/colors';
import NavButton from "../components/NavButton";

export default function orderReviewScreen(props){
    const insets = useSafeAreaInsets();
    
    return(
        <ImageBackground
        source={require("../assets/images/Background.png")}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}>

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
                <Title>Order Summary</Title>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>
                        Your order has been placesd with your order details below
                    </Text>
                </View>
                <View style={styles.servesesContainer}>
                    <Text style={styles.serviceTime}>Service Time frame:</Text>
                    <Text style={styles.subserviceTime}>{props.repairTime}</Text>
                    <Text style={styles.serviceTime}>Service Type:</Text>
                    {props.services.map((item) => {
                        if (item.value){
                            return (
                                <Text key={item.id} style={styles.subserviceTime}>
                                    {item.name}
                                </Text>
                            )
                        }
                    })}                  
                </View>
                    <Text style={styles.serviceTime}>Rental Membership fee:</Text>
                    <Text style={styles.subserviceTime}>
                        {props.rentalMembership ? "Membership" : ""}
                    </Text>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
                    <Text style={styles.subTitle}>Sales tax: ${props.price *0.06.toFixed(2)}</Text>
                    <Text style={styles.subTitle}>Total: ${(props.price + props.price *0.06 ).toFixed(2)}</Text>
                </View>
            <View style={styles.buttonContainer}>
                <NavButton onNext={props.onNext}>Submit Order</NavButton>
            </View>                
            </ScrollView>          
        </View>
    </ImageBackground>
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
  backgroundImage: {
    opacity: 0.4,
  },
  scrollContainer: {
    flex: 1,
  },
  subTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  subTitle: {
    fontSize:22,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Note",
    color: Colors.primary500
  },
  servesesContainer: {
    flex: 3,
  },
  serviceTime: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note"
  },
  subserviceTime: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.primary500
  },
  buttonContainer: {
    alignItems: "center",
  }
});