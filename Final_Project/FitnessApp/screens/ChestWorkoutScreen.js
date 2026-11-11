import List from "../components/List/List";
import { WORKOUTS } from "../data/dummy_data";

export default function WorldNewsScreen() {
  const type = "Chest";
  const displayedWorkouts = WORKOUTS.filter((WorkoutItem) => {
    return WorkoutItem.type === type;
  })
  return <List items={displayedWorkouts} />
}