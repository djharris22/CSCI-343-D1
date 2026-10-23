import { FlatList, Text, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { VACATION_LOCATIONS, COUNTRIES } from "../data/dummy-data";
import VacationItem from "../components/VacationItem";


export default function VacationOverviewScreen(props) {
    const CountryId = props.route.params.countryId;

    useLayoutEffect(() => {
        const Country = COUNTRIES.find((Country) => Country.id === CountryId);
        props.navigation.setOptions({title: Country ? Country.name : null});
    }, [CountryId, props.navigation]);

    const displayedVacation = VACATION_LOCATIONS.filter((VacationItem) => {
        return VacationItem.countryId === CountryId;
    })
    
    function renderVacationItem(itemData){
        const vacationItemProps = {
        name: itemData.item.name,
        imageUrl: itemData.item.imageUrl,
        location: itemData.item.location,
        averageCost: itemData.item.averageCost,
        foundedYear: itemData.item.foundedYear,
        rating: itemData.item.rating,
        };
        return <VacationItem {...vacationItemProps} />
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={displayedVacation}
            keyExtractor={(item) => item.id}
            renderItem={renderVacationItem} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})