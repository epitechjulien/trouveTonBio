import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const EventsScreenDetails = props => {
    return (
        <View style={styles.screen}>
            <Text>The Details Events screen</Text>
            <Button title="Go Back to Categories" onPress={() =>{props.navigation.popToTop();}}/>

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

export default EventsScreenDetails;