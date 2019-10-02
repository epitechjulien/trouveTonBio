import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Platform } from 'react-native';

import { EVENTTYPE } from '../../data/event-data';
import EventsGridTile from '../../components/eventtypes/EventsGridTile';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

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
                    routeName: 'EventsList',
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

TypesofEventsScreen.navigationOptions = navData => {
    const eventId = navData.navigation.getParam('eventId');
    const selectedEventtype = EVENTTYPE.find(eventtypeId => eventtypeId.id === eventtypeId);   
       
    
    return {
         
      headerTitle: "Types d'évènements",
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress={() => {
              navData.navigation.navigate('Cart');
            }}
          />
        </HeaderButtons>
      )
    };
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TypesofEventsScreen;