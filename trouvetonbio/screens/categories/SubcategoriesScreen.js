import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { CATEGORIES, SUBCATEGORIES } from '../../data/dummy-data';
import SubcategoryGridTile from '../../components/categories/SubcategoryGridTile';

//recupere les données des categories
const SubcategoriesScreen = props => {

    const catId= props.navigation.getParam('categoryId');
    const selectedcategoryId= CATEGORIES.find(cat => cat.id === catId);

    const renderGridItem = itemData => {
        return (
        <SubcategoryGridTile
            title={itemData.item.title}
            image={itemData.item.image}
            onSelect = {() => {
                props.navigation.navigate({
                    routeName: 'SubCategoryProductsScreen',
                    params: {
                        Subcategories: itemData.item.id
                }
        });
            }} />
            );
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={SUBCATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
            />
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