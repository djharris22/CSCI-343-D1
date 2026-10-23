import { Pressable, View, StyleSheet, Image, Text} from "react-native";
import { useState } from "react";
import ImageViewModal from "../modal/ImageViewModal"

export default function VacationItem(props){
    const [modalIsVisible, setModalIsVisible] = useState(false);
    function viewImageHandler(){
        setModalIsVisible(true);
    }
    function closeImageHandler(){
        setModalIsVisible(false);
    }

    return(
        <View style={[
            styles.itemContainer,
            { backgroundColor: props.ListIndex % 2 == 0 ? "#ccc" : "#fff"},
        ]}>
            <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
            ]}
            android_ripple={{color: "#0000"}}
            onPress={viewImageHandler}
            >
                <View style={styles.rowContainer}>
                    <Image style={styles.image} source={{uri: props.imageUrl}} />
                    <View style={styles.infoConatiner}> 
                        <Text style={styles.name}>{props.name}</Text>
                        <View>
                        <View style={styles.innerContainer}></View>
                        <Text style={styles.location}>
                            location: {props.location}
                        </Text>
                        <Text style={styles.year}>
                            {props.foundedYear}
                        </Text>
                        </View>
                        <Text style={styles.rating}>Rating: {props.rating} /5</Text>
                        <Text style={styles.cost}>Average Cost: ${props.averageCost.toFixed(2)}</Text>
                    </View>

                </View>
            </Pressable>


        <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        onClose={closeImageHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 3,
        marginBottom: 3,
        borderRadius: 7,
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity:0.5
    }, 
    rowContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    image: {
        width: "25%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 15
    },
    infoConatiner: {
        width: "75%",
        paddingLeft: 20, 
    },
    name: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
    },
    location: {
        width: "85%",
        fontSize: 14
    },
    year: {
        fontSize: 14,
        fontWeight: "bold",
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rating: {
        fontSize: 13,
        fontStyle: 'italic',
    },
    cost: {
        fontSize: 14,
        fontWeight: "bold"
    }
});