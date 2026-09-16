import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Movie from './components/Movie';

export default function App() {
  const [MovieItems, setMovieItems] = useState([
    {
      name:"The Shawshank Redemption",
      image: require("./assets/images/shawshank.jpg"),
      rating: "9.3",
      id:1
    },
    {
      name:"The Godfather",
      image: require("./assets/images/godfather.jpg"),
      rating: "9.2",
      id:2
    },
    {
      name:"The Dark Knight",
      image: require("./assets/images/darknight.jpg"),
      rating: "9.1",
      id:3
    },
    {
      name:"The Godfather Part II",
      image: require("./assets/images/godfather2.jpg"),
      rating: "9.0",
      id:4
    },
    {
      name:"The Lord of the Rings: The Return of the King",
      image: require("./assets/images/lordofrings.jpg"),
      rating: "9.0",
      id:5
    },
    {
      name:"12 Angry Men",
      image: require("./assets/images/angrymen.jpg"),
      rating: "9.0",
      id:6
    },
    {
      name:"Schindler's List",
      image: require("./assets/images/schindlerslist.jpg"),
      rating: "9.0",
      id:7
    },
    {
      name:"Pulp Fiction",
      image: require("./assets/images/pulpfiction.jpg"),
      rating: "8.8",
      id:8
    },
    {
      name:"The Good, the Bad and the Ugly",
      image: require("./assets/images/goodbadugly.jpg"),
      rating: "8.8",
      id:9
    },
    {
      name:"Forrest Gump",
      image: require("./assets/images/forrestgump.jpg"),
      rating: "8.8",
      id:10
    },    
  ])
  return (
    <>
    <StatusBar style='dark'/>
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Top 10 Movies
        </Text>
      </View>
      <View style={styles.listContainer}>

      <FlatList 
        alwaysBounceVertical={false}
        showVerticalScollIndicators={false}
        data={MovieItems}
        keyExtractor={(item, index) => (item.id)}
        renderItem={(itemData) => {
          return <Movie
            name={itemData.item.name}
            image={itemData.item.image}
            rating={itemData.item.rating}
          />
        }}
      />        
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#f8fc02',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold"
  },
  listContainer: {
    flex: 8,
    width: "90%"
  }
});
