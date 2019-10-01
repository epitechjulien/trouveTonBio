import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image } from 'react-native';

import { EVENTTYPE } from '../../data/event-data';
import EventsGridTile from '../../components/eventtypes/EventsGridTile';

//recupere les données des types d'évènements
const TypesofEventsScreen = props => {
    console.log('2 ',props)
    const renderGridItem = itemData => {
        return (
        <EventsGridTile
            title={itemData.item.title}
            image={itemData.item.image}
            onSelect = {() => {
                props.navigation.navigate({
                    routeName: 'Eventsdetails',
                    params: {
                    eventtypeId: itemData.item.id,
                }
        });
            }} />
            );
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={EVENTTYPE}
            renderItem={renderGridItem}
            numColumns={2}
            />
    );
};

TypesofEventsScreen.navigationOptions = {
    headerTitle: 'Les évènements'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TypesofEventsScreen;