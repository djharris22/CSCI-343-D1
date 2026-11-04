import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import NewsItem from "../components/List/NewsItem";
import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";
import Colors from "../constants/colors";

export default function BookmarksScreen() {
  const favoriteNewsIds = useSelector((state) => state.favoriteNews.ids);
  const favoriteNews = NEWS.filter((NewsItem) => {
    return favoriteNewsIds.includes(NewsItem.id);
  });
  if (favoriteNews.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>you have no bookmarked news articles</Text>
      </View>
    );
  } else {
    return <List items={favoriteNews} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary300,
  }
});
