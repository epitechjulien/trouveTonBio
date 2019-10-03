import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HeaderButton from '../../components/UI/HeaderButton';
import EventItem from '../../components/shop/EventItem';
import * as eventActions from '../../store/actions/events';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';

const EventsOverviewScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const events = useSelector(state => state.events.availableEvents);
  const dispatch = useDispatch();

  const loadEvents = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(eventActions.fetchEvents());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const willFocusSub = props.navigation.addListener(
      'willFocus',
      loadEvents
    );

    return () => {
      willFocusSub.remove();
    };
  }, [loadEvents]);

  useEffect(() => {
    setIsLoading(true);
    loadEvents().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadEvents]);

  const selectItemHandler = (id, title) => {
    props.navigation.navigate('ProductDetail', {
      eventId: id,
      eventTitle: title
    });
  };

  // if (error) {
  //   return (
  //     <View style={styles.centered}>
  //       <Text>An error occurred!</Text>
  //       <Button
  //         title="Try again"
  //         onPress={loadProducts}
  //         color={Colors.primary}
  //       />
  //     </View>
  //   );
  // }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && events.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found. Maybe start adding some!</Text>
      </View>
    );
  }

  return (
    <FlatList
      onRefresh={loadEvents}
      refreshing={isRefreshing}
      data={events}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <EventItem
          image={itemData.item.image}
          title={itemData.item.title}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
        </EventItem>
      )}
    />
  );
};


const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default EventsOverviewScreen;
