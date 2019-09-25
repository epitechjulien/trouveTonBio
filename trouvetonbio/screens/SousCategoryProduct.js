import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SousCategoryProduct = props => {
    return (
        <View style={styles.screen}>
            <Text>The Sous Category Product!</Text>
            <Button title="Go to Details products!" onPress={() => {
                props.navigation.navigate({routeName: 'ProductDetail'});
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SousCategoryProduct;