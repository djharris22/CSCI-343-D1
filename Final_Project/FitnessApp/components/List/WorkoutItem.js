import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function WorkoutItem(props) {
    const navigation = useNavigation();

    function selectedWorkoutHandler() {
        navigation.navigate("workoutScreen", {
            workoutId: props.id,
        });
    }

    return (
        <View
            style={[
                styles.itemContainer,
                { backgroundColor: props.listIndex % 2 === 0 ? "#ccc" : "#fff" }
            ]}
        >
            <Pressable 
                onPress={selectedWorkoutHandler}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl }} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.headline}>{props.title}</Text>
                    <Text style={styles.space}>
                        Target: {props.targetMuscle} | {props.sets} Sets x {props.reps} Reps
                    </Text>
                    <Text style={styles.space}>
                        Video Example: {props.videoUrl}
                    </Text>
                    <Text style={styles.description}>
                        {props.description}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7,
        overflow: "hidden"
    },
    pressed: {
        opacity: 0.85
    },
    imageContainer: {
        height: 250,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 7
    },
    infoContainer: {
        padding: 10,
        alignItems: "center"
    },
    headline: {
        fontSize: 24,
        fontFamily: "barge",
        color: "#111",
        textAlign: "center"
    },
    space: {
        fontSize: 14,
        fontFamily: "nexaBold",
        color: "#444",
        paddingVertical: 4,
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        width: "100%",
        fontSize: 13,
        fontFamily: "nexa",
        color: "#666",
        paddingBottom: 5
    }
});