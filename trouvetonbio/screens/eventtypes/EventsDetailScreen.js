import React from 'react';
import {ScrollView,View,Text,Image,Button,StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';


const EventsDetailScreen = props => {
  const eventId = props.navigation.getParam('eventId');
  const eventTitle = props.navigation.getParam('eventTitle');
  const eventImage = props.navigation.getParam('eventImage');
  const eventDescription = props.navigation.getParam('eventDescription');
  const eventDate = props.navigation.getParam('eventDate');

  return (
    <ScrollView>
      <Image style={styles.image} source={eventImage} />
      <View style={styles.actions}>
      </View>
      <Text style={styles.date}>{eventDate}</Text>
      <Text style={styles.description}>{eventDescription}</Text>
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
