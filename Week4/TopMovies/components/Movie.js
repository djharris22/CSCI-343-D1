import { StyleSheet, Text, View, Image } from 'react-native';

export default function Movie(Props) {
    return(
      <View style={styles.itemContainer}>
        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemTitle}>{Props.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.image} 
            source={Props.image}
          />
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{Props.rating}/10</Text>
        </View>
      </View>    
);
}
const styles = StyleSheet.create({
itemContainer: {
    marginBottom: 20,
  },
  itemTitleContainer: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  ratingContainer: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 5
  },
  rating: {
    fontSize: 30,
    textAlign: "center"
  }
}
)