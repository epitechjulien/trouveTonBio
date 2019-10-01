import React from 'react';
import {ScrollView,View,Text,Image,Button,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';


const EventsDetailScreen = props => {
  console.log('3 ',props)
  const eventId = props.navigation.getParam('eventId');
  const selectedEvent = useSelector(state =>
    state.Event.availableEvent.find(Event => Event.id === eventId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedEvent.image }} />
      <View style={styles.actions}>
      </View>
      <Text style={styles.date}>{selectedEvent.date}</Text>
      <Text style={styles.description}>{selectedEvent.description}</Text>
    </ScrollView>
  );
};

EventsDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('eventTitle')
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold'
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  }
});

export default EventsDetailScreen;
