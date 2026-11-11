import { View, StyleSheet, FlatList } from "react-native";
import WorkoutItem from "./WorkoutItem";

export default function List(props) {

    function renderWorkoutItem(itemData) {
        const WorkoutItemProps = {
            listIndex: itemData.index,
            id: itemData.item.id,
            title: itemData.item.title,
            category: itemData.item.category,
            targetMuscle: itemData.item.targetMuscle,
            sets: itemData.item.sets,
            reps: itemData.item.reps,
            imageUrl: itemData.item.imageUrl,
            videoUrl: itemData.item.videoUrl,
            description: itemData.item.description,
        };

        return <WorkoutItem {...WorkoutItemProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderWorkoutItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "black"
    }
});