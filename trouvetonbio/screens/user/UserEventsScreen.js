import React from 'react';
import { View, Text, FlatList, Button, Platform, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import EventItem from '../../components/shop/EventItem';
import Colors from '../../constants/Colors';
import * as eventsActions from '../../store/actions/events';

const UserEventsScreen = props => {
  const userEvents = useSelector(state => state.events.userEvents);
  const dispatch = useDispatch();

  const editEventsHandler = id => {
    props.navigation.navigate('EditEvents', { eventId: id });
    
  };
  

  const deleteHandler = id => {
    Alert.alert('Are you sure?', 'Do you really want to delete this event?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(eventsActions.deleteEvent(id));
        }
      }
    ]);
  };

  if (userEvents.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No event found, maybe start creating some?</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={userEvents}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <EventItem
          image={itemData.item.image}
          title={itemData.item.title}
          eventtypeId={itemData.item.eventtypeId}
          date={itemData.item.date}
          onSelect={() => {
            editEventsHandler(itemData.item.id);
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editEventsHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </EventItem>
      )}
    />
  );
};

UserEventsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Events',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navData.navigation.navigate('EditEvents');
          }}
        />
      </HeaderButtons>
    )
  };
};

export default UserEventsScreen;
