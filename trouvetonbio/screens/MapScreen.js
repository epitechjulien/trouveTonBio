import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const MapScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>ECRAN MAP</Text>
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

export default MapScreen;