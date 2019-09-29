import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';

import { CATEGORIES,SUBCATEGORIES, PRODUCTS } from '../../data/dummy-data';
import ProductItem from '../../components/categories/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//category of product
const CategoryProductsScreen = props => {
    
    const renderProductItem= itemData => {
        return <ProductItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        price={itemData.item.price}
        
        onSelectProduct={() => {
            props.navigation.navigate({
                routename : 'ProductsOverview',
                // params: { productId: itemData.item.id}
            })
        }
    }/>;
    };
    
    const catId = props.navigation.getParam('subcategoriesIds');
    const displayedProducts = PRODUCTS.filter(Products => Products.subcategoriesIds.indexOf(catId) >= 0);
    const selectedCategory = SUBCATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <FlatList style={styles.bg} data={displayedProducts} keyExtractor={(item, index)=>item.id} renderItem={renderProductItem}/>
        </View>
    );
};

CategoryProductsScreen.navigationOptions = {
    headerTitle: 'Nos produits'
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bg: {
        backgroundColor: 'black',
    },
});

export default CategoryProductsScreen;