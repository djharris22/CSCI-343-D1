import { StyleSheet, Text, View, Image } from "react-native";
import { NEWS } from "../data/dummy_data";
import { useState, useLayoutEffect } from "react";
import { Colors } from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function NewsDetailScreen(props) {
  const favoriteNewsIds = useSelector((state) => state.favoriteNews.ids);
  const dispatch = useDispatch();

  const newsId = props.route.params.NewsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);

  const newsIsFavorite = favoriteNewsIds.includes(newsId);

  function changeFavoriteStatusHandler() {
    if (newsIsFavorite) {
      dispatch(removeFavorite({ id: newsId }));
    } else {
      dispatch(addFavorite({ id: newsId }));
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Show more articles",
      headerRight: () => {
        return (
          <BookmarkButton
            isFavorite={newsIsFavorite}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeFavoriteStatusHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>

        <Text style={styles.space}>
          {selectedNews.date} | {selectedNews.author} | {selectedNews.agency}
        </Text>

        <Text style={styles.fullArticle}>{selectedNews.fullArticle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  headline: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5,
    width: "90%",
  },
  space: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5,
    width: "90%",
  },
  fullArticle: {
    color: Colors.primary300,
    fontSize: 15,
    fontFamily: "playfairBold",
    paddingBottom: 5,
    textAlign: "justify",
    width: "85%",
  },
});
