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
import EventItem from '../../components/shop/EventItem';
import * as eventsActions from '../../store/actions/events';
import Colors from '../../constants/Colors';

const AllEventsScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const events = useSelector(state => state.events.availableEvents);
  const dispatch = useDispatch();

  const loadEvents = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(eventsActions.fetchEvents());
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
    props.navigation.navigate('EventDetail', {
      eventId: id,
      eventTitle: title
    });
  };

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

AllEventsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Events',
  };
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default AllEventsScreen;
