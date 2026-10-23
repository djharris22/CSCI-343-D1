import {View, FlatList} from "react-native";
import StateGridTile from "../components/StateGridTile";
import {COUNTRIES} from "../data/dummy-data";

export default function HomeScreen(props) {
    function renderCountyItem(itemData){
        function pressHandler(){
            props.navigation.navigate("VacationOverview", {
            countryId: itemData.item.id,
            });
        }
        return(
            <StateGridTile 
            name={itemData.item.name}
            color={itemData.item.color}
            onPress={pressHandler}
            />
        );
    }

    return(
        <View>
            <FlatList
            data={COUNTRIES}
            keyExtractor={(item) => {return item.id;}}
            renderItem={renderCountyItem}
            numColumns={2}
            />
        </View>
    );
}