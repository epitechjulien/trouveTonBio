import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

//category of product
const CategoryProductsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>The Categories Product Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to The sous Products!" onPress={() => {
                props.navigation.navigate({routeName: 'SousCategoryProduct'});
            }} />
        </View>
    );
};

// recupere le nom de la categories
CategoryProductsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryProductsScreen;