import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, PRODUCTS } from '../data/dummy-data';
import Product from '../models/products';

//category of product
const CategoryProductsScreen = props => {

    const renderProductItem= itemData => {
        return (<View><Text>{itemData.item.title}</Text></View>);
    };
    
    const catId = props.navigation.getParam('categoryId');

    const displayedProducts = PRODUCTS.filter(Products => Products.categoryIds.indexOf(catId) >= 0);
    
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <FlatList data={displayedProducts} keyExtractor={(item, index)=>item.id} renderItem={renderProductItem}/>
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