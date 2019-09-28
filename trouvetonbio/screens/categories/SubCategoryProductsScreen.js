import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';

import { CATEGORIES, PRODUCTS } from '../../data/dummy-data';
import ProductItem from '../../components/categories/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//category of product
const CategoryProductsScreen = props => {

    const renderProductItem= itemData => {
        return <ProductItem title={itemData.item.title} image={itemData.item.imageUrl} price={itemData.item.price} subcategoriesIds={itemData.item.subcategoriesIds} onSelectProduct={() => {props.navigation.navigate({routename : 'ProductDetailScreen', params: { productId: itemData.item.id}})}}/>;
    };
    
    const catId = props.navigation.getParam('categoryId');

    const displayedProducts = PRODUCTS.filter(Products => Products.subcategoriesIds.indexOf(catId) >= 0);
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <FlatList data={displayedProducts} keyExtractor={(item, index)=>item.id} renderItem={renderProductItem}/>
        </View>
    );
};

CategoryProductsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        // headerTitle: selectedCategory.title,
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