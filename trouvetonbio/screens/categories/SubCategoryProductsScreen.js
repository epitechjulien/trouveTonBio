import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';

import { SUBCATEGORIES, PRODUCTS } from '../../data/dummy-data';
import ProductItem from '../../components/categories/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//category of product
const SubCategoryProductsScreen = props => {
    console.log(props.navigation)
    const renderProductItem= itemData => {
        return <ProductItem title={itemData.item.title} image={itemData.item.imageUrl} price={itemData.item.price} subcategoriesIds={itemData.item.subcategoriesIds} onSelectProduct={() => {props.navigation.navigate({routename : 'ProductDetailScreen', params: { productId: itemData.item.id}})}}/>;
    };
    
    const catId = props.navigation.getParam('subcategoriesIds');
    console.log(catId)

    const displayedProducts = PRODUCTS.filter(Products => Products.subcategoriesIds.indexOf(catId) >= 0);
    
    const selectedCategory = SUBCATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <FlatList data={displayedProducts} keyExtractor={(item, index)=>item.id} renderItem={renderProductItem}/>
        </View>
    );
};

SubCategoryProductsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryIds');

    const selectedCategory = SUBCATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: 'Nos produits'
    };
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SubCategoryProductsScreen;