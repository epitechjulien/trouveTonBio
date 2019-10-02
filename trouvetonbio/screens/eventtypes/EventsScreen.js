import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Platform } from 'react-native';

import { EVENTTYPE, EVENT } from '../../data/event-data';
import EventItem from '../../components/eventtypes/EventItem';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// list of evenements per type of evenement
const EventslistScreen = props => {
    console.log('1 ',props)
    const renderEventItem= itemData => {
        return <EventItem
        title={itemData.item.title}
        image={itemData.item.image}
        description={itemData.item.description}
        date={itemData.item.date}
        eventtypeId={itemData.item.eventtypeId}
        
        onSelectEvent={() => {
            props.navigation.navigate({
                routename : 'EventDetail',
                params: {
                  eventId: itemData.item.id
                }
            })
        }
    }/>;
    };
    
    const catId = props.navigation.getParam('eventtypeId');
    const displayedEvent = EVENT.filter(Event => Event.eventtypeId.indexOf(catId) >= 0);
    const selectedEventType = EVENTTYPE.find(cat => cat.id === catId);

    return (
        <View >
            <FlatList
            
            data={displayedEvent}
            keyExtractor={(item, index)=>item.id}
            renderItem={renderEventItem}/>
        </View>
    );

};

EventslistScreen.navigationOptions = navData => {
    const eventId = navData.navigation.getParam('eventId');
    const selectedEventtype = EVENT.find(Event => Event.id === eventId);   
       
    
    return {
         
      headerTitle: 'Nos évènements',
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
        alignItems: 'center',
        backgroundColor: 'black',
    },
    bg: {
    },
});

export default EventslistScreen;