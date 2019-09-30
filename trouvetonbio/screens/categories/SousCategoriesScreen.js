import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';

import { CATEGORIES, SUBCATEGORIES } from '../../data/dummy-data';
import ProductItem from '../../components/categories/old';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridTile from '../../components/categories/CategoryGridTile';

//category of product
const SubcategoriesScreen = props => {
    
    const renderProductItem= itemData => {
        return <ProductItem
         title={itemData.item.title}
         image={itemData.item.image}
         categoryIds={itemData.item.categoryIds}
         onSelectProduct={() => {
             props.navigation.navigate({
                routeName: 'ProductsOverview',
                params: {
                    subcategoriesIds: itemData.item.id
                }
                })
            }
        }/>;
    };

    const catId = props.navigation.getParam('categoryId');

    const displayedProducts = SUBCATEGORIES.filter(Products => Products.categoryIds.indexOf(catId) >= 0);
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <FlatList numColumns={1} data={displayedProducts} keyExtractor={(item, index)=>item.id} renderItem={renderProductItem}/>
        </View>
    );
};

SubcategoriesScreen.navigationOptions = {
    headerTitle: 'Les sous catégories'
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SubcategoriesScreen;