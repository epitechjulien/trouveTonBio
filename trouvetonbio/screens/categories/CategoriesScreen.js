import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from '../../components/categories/CategoryGridTile';

//recupere les données des categories
const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
        <CategoryGridTile
            title={itemData.item.title}
            image={itemData.item.image}
            onSelect = {() => {
                props.navigation.navigate({
                    routeName: 'SousCategories',
                    params: {
                      categoryId: itemData.item.id,
                }
        });
            }} />
            );
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
            />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Nos Catégories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;