import { FlatList, StyleSheet, Text, View} from 'react-native';;
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/colors';
import Title from "../components/Title"
import NavButton from '../components/NavButton';
import RecipeItem from '../components/RecipeItem';
import RecipeModal from '../modals/RecipeModal';
import { useState } from 'react';

export default function RecipeScreen(props) {
    const insets = useSafeAreaInsets();

    const [modalRecipeTitle, setModalRecipeTitle] = useState ("");
    const [modalRecipeText, setModalRecipeText] = useState ("");
    const [modalIsVisible, setModalIsVisible] = useState (false);

    function recipemodalHandler(title, text){
      setModalRecipeTitle(title);
      setModalRecipeText(text);
      setModalIsVisible(true);
    }

    function closeRecipeModalHandler(){
      setModalIsVisible(false);
    }
    return (
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
      <View style={styles.titleContainer}>
        <Title>Recipe list</Title>
      </View>

      <View>
        <FlatList 
        data={props.currentRecipes}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
        renderItem={(itemData) => {
          return (
            <RecipeItem
            id={itemData.item.id}
            title={itemData.item.title}
            onView={recipemodalHandler.bind(this, 
              itemData.item.title,
              itemData.item.text
            )}
            onDelete={props.onDelete.bind(this, itemData.item.id)}
            />
          );
        }}
        />
      </View>
      <RecipeModal
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeModalHandler}
      />
        <View style={styles.navButtonContainer}>
          <View style={styles.navButton}>
            <NavButton onNext={props.onHome}>Return Home</NavButton>
          </View>
          <View style={styles.navButton}>
            <NavButton onNext={props.onAdd}>Add new recipes</NavButton>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%"
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  navButton: {
    marginHorizontal: 10
  }

});
