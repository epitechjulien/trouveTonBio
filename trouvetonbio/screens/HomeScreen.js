import React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';


const HomeScreen = props => {

    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../data/Images/maps.png')} style={{width: '100%', height: '100%'}}>
            <Text>PAGE D'ACCEUIL</Text>
            </ImageBackground>
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

export default HomeScreen;