import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { useState } from "react";
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from "./screens/RecipeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Colors from './constants/colors';

export default function App() {

  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Simple Macaroni and Cheese",
      text: "Ingredients: ½ (8 ounce) box elbow macaroni ⅛ cup butter ⅛ cup all-purpose flour ¼ teaspoon salt ground black pepper to taste 1 cup milk 1 cup shredded Cheddar cheese",
    },
    {
      id: 2,
      title: "Air Fryer Chicken Breast",
      text: "Ingredients:he Spices 1 teaspoon paprika 1/4 teaspoon smoked paprika 1/2 teaspoon garlic powder 1/2 teaspoon onion powder 3/4 teaspoon salt (I use Morton table salt for this because its fine and better for coating) 1 1/2 teaspoons brown sugar 1 teaspoon cornstarch The Chicken 2 teaspoons avocado oil 1 pound boneless skinless chicken breasts  if you have closer to 1.5 pounds in your package, increase the amount of spices above by 1.5x to make sure you have enough seasoning for your chicken",
    },
    {
      id: 3,
      title: "Crispy Black Bean Tacos",
      text: "Ingredients:Crispy Black Bean Tacos 1 (14-ounce) can of black beans, rinsed and drained 1/4 cup of your favorite salsa 1 tablespoon taco seasoning 6 8 small flour tortillas 1/4  1/2 cup olive oil or butter for frying Cilantro Lime Sauce: 1/4 cup avocado oil 1/4 cup water 1/2 cup chopped green onions 1/2 cup cilantro leaves 2 cloves garlic 1/2 teaspoon salt juice of 2 limes 1/2 cup sour cream (sub avocado to keep it dairy free / vegan)",
    },
  ])
  
  function homeScreenHandler() {
    setCurrentScreen("");
  }

  function recipeScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler(){
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText){
    setCurrentRecipes((currentRecipes) => [
      ...currentRecipes,
      {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText},
    ]);
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }

  function deleteRecipeHandler(id){
    setCurrentRecipes ((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  let screen = <HomeScreen onNext={recipeScreenHandler} />;

  if (currentScreen === "recipes"){
    screen = (
      <RecipeScreen onHome={homeScreenHandler} 
      onAdd={addRecipeScreenHandler} 
      onDelete={deleteRecipeHandler}
      currentRecipes={currentRecipes}/>
    );
  }

  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen onCancel={recipeScreenHandler} onAdd={addRecipeHandler} />
    );
  }

  return (
    <>
    <StatusBar style='auto'/>
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
