import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const EventsScreenCategory = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Screen</Text>
            <Button title="Go to Detail screen" onPress={() =>{props.navigation.push('EventsDetails')}}/>
            <Button title="Go Back" onPress={() =>{props.navigation.goBack();}}/>
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

export default EventsScreenCategory;