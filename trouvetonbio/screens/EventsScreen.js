import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const EventsScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>EVENTS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default EventsScreen;