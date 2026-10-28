import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function NewsItem(props){
    const navigation = useNavigation();
    function selectedNewshandler(){
        navigation.navigate("NewsDetail", {
            NewsId: props.id,
        });
    }

    return (
        <View
        style={[
            styles.itemContainer,
            {backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff"}
        ]}
        >
            <Pressable onPress={selectedNewshandler}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl }}/>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.headline}>{props.headline}</Text>
                    <Text style={styles.space}>
                        {props.date} | {props.author} | {props.agency}
                    </Text>
                    <Text style={styles.description}>
                        {props.description}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7
    },
    imageContainer: {
        height: 300,
    },
    image: {
        height:"100%",
        resizeMode: "cover",
        borderRadius: 7
    },
    infoContainer: {
        flex: 1,
        alignItems: "center"
    },
    headline: {
        fontSize: 30,
        fontFamily: "playfairbold"
    },
    space: {
        fontSize: 20,
        fontFamily: "playfair",
        paddingBottom: 5
    },
    description: {
        textAlign: "center",
        width: "100%",
        fontSize: 15,
        fontFamily: "playfair",
        paddingBottom: 5
    }
});