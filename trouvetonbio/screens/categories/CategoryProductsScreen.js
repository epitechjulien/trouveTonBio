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
        return <ProductItem title={itemData.item.title} image={itemData.item.imageUrl} price={itemData.item.price} onSelectProduct={() => {props.navigation.navigate({routename : 'ProductDetail', params: { productId: itemData.item.id}})}}/>;
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

CategoryProductsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        // headerRight: (
        // <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //   <Item
        //     title="Cart"
        //     iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        //     onPress={() => {
        //         navigationData.navigation.navigate('Cart');
        //     }}
        //   />
        // </HeaderButtons>
        // )
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