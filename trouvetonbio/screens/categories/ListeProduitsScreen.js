import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Platform } from 'react-native';

import { SUBCATEGORIES, PRODUCTS } from '../../data/dummy-data';
import ProductItem from '../../components/shop/ListProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//category of product
const CategoryProductsScreen = props => {
    
    const renderProductItem= itemData => {
        return <ProductItem
        title={itemData.item.title}
        image={itemData.item.image}
        price={itemData.item.price}
        subcategoriesIds={itemData.item.subcategoriesIds}
        categoryIds={itemData.item.categoryIds}
        
        onSelectProduct={() => {
            props.navigation.navigate({
                routename : 'Products',
                params: {
                    productId: itemData.item.id
                }
            })
        }
    }/>;
    };
    
    const catId = props.navigation.getParam('subcategoriesIds');
    const displayedProducts = PRODUCTS.filter(Products => Products.subcategoriesIds.indexOf(catId) >= 0);
    const selectedCategory = SUBCATEGORIES.find(cat => cat.id === catId);

    return (
        <View >
            <FlatList
            
            data={displayedProducts}
            keyExtractor={(item, index)=>item.id}
            renderItem={renderProductItem}/>
        </View>
    );

};




CategoryProductsScreen.navigationOptions = navData => {
    const productId = navData.navigation.getParam('productId');
    const selectedProduct = PRODUCTS.find(prod => prod.id === productId);   
       
    
    return {
         
      headerTitle: 'Nos produits',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress={() => {
              navData.navigation.navigate('Cart');
            }}
          />
        </HeaderButtons>
      )
    };
  };


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    bg: {
    },
});

export default CategoryProductsScreen;