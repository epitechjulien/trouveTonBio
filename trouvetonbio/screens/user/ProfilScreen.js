import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ProfilScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>PAGE PROFIL</Text>
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

export default ProfilScreen;