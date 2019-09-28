import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image } from 'react-native';

import { SUBCATEGORIES } from '../../data/dummy-data';
import SubcategoryGridTile from '../../components/categories/SubcategoryGridTile';

//recupere les données des categories
const SubcategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
        <SubcategoryGridTile
            title={itemData.item.title}
            image={itemData.item.image}
            onSelect = {() => {
                props.navigation.navigate({
                    routeName: 'Sous-Catégories',
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
            data={SUBCATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
            />
    );
};

SubcategoriesScreen.navigationOptions = {
    headerTitle: 'Sous-Catégories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SubcategoriesScreen;