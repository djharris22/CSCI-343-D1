import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from "../components/Title";
import { useState } from 'react';
import MenuItem from '../components/MenuItem';
import Colors from '../constants/colors';

export default function MenuScreen(props) {
   const insets = useSafeAreaInsets();

   const [menuItems, setMenuItems] = useState([
    {
        name: "FISH BITES",
        image: require("../assets/images/fishBites.jpg"),
        price: "$13",
        id: 1,
    },
    {
        name: "*SEAFOOD TOWER",
        image: require("../assets/images/seaFoodTower.jpg"),
        price: "$market price",
        id: 2,
    },
    {
        name: "PAN-SEARED SCALLOPS",
        image: require("../assets/images/scallops.jpg"),
        price: "$market price",
        id: 3,
    },
    {
        name: "OCEAN FETTUCCINE",
        image: require("../assets/images/fettuccine.jpg"),
        price: "$36",
        id: 4,
    },
    {
        name:  "BRAISED BEEF SHORT RIB",
        image: require("../assets/images/Beef.jpg"),
        price: "$42",
        id: 5,
    },
   ])
  return (
    <View style={[
        styles.rootContainer,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }
    ]}>
        <View style={styles.titleContainer}>
            <Title>Menu</Title>
        </View>
        <View style={styles.listContainer}>
            <FlatList 
            data={menuItems}
            keyExtractor={(item, index) => {
                return item.id
            }}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => {
                return (
                    <MenuItem
                    name={itemData.item.name}
                    image={itemData.item.image}
                    price={itemData.item.price}/>
                );

            }}
            />
        </View>
        <View>
            <Button title="Main Page" onPress={props.onNext} color="#9ea023"/>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  listContainer: {
    backgroundColor: Colors.accent500,
    flex: 7,
    width: 380
  }
});
