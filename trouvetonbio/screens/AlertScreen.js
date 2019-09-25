import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const AlertScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>PAGE DES ALERTES</Text>
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

export default AlertScreen;