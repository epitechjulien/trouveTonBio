import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, Text, StyleSheet, Platform, Picker} from 'react-native';
import { TextInput } from "react-native-paper";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as productsActions from '../../store/actions/products';


const EditProductScreen = props => {
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state =>
        state.products.userProducts.find(prod => prod.id === prodId)
        );
    const dispatch = useDispatch();
    const [categoryIds, setcategoryIds] = useState(editedProduct ? editedProduct.categoryIds : '');
    const [subcategoriesIds, setsubcategoriesIds] = useState(editedProduct ? editedProduct.subcategoriesIds : '');
    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl :'');
    const [price, setPrice] = useState(editedProduct ? editedProduct.price :'');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description :'');
    
    const submitHandler = useCallback(() => {
        if (editedProduct) {
            dispatch(productsActions.updateProduct(prodId, title, description, imageUrl));
        } else {
            dispatch(
                productsActions.createProduct(title, description, imageUrl, +price)
            );        }
    }, [dispatch, prodId, title, description, imageUrl, price]);

    useEffect (() => {
        props.navigation.setParams({submit: submitHandler })
    }, [submitHandler]);

   
    return (
       <ScrollView>
           <View style={styles.form}>
             <View style={styles.formControl}>
                 <Text style={styles.label}>Title</Text>
                 <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText= {text => setTitle(text)}
                />
             </View>
             <View style={styles.formControl}>
                 <Text style={styles.label}>Image URL</Text>
                 <TextInput
                    style={styles.input}
                    value={imageUrl}
                    onChangeText= {text => setImageUrl(text)}
                />
             </View>
             {editedProduct ? null : (
             <View style={styles.formControl}>
                 <Text style={styles.label}>Price</Text>
                 <TextInput
                    style={styles.input}
                    value={price}
                    onChangeText= {text => setPrice(text)}
                />
             </View>
             )}
             <View style={styles.formControl}>
                 <Text style={styles.label}>Description</Text>
                 <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText= {text => setDescription(text)}
                />
             </View>
            </View>
       </ScrollView>
    );
};

EditProductScreen.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit');
    return {
        headerTitle: navData.navigation.getParam('productId')
        ? 'Edit Product'
        : 'Add Product',
        headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
            title="Save"
            iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
            onPress={submitFn}
        />
        </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    pickerStyle:{  
        height: 150,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});

export default EditProductScreen;

