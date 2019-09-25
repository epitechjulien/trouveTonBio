import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

//recupere les données des categories
const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            image={itemData.item.image}
            onSelect = {() => {
                props.navigation.navigate({
                    routeName: 'CategoryProducts',
                    params: {
                      categoryId: itemData.item.id
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
    headerTitle: 'Catégories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;