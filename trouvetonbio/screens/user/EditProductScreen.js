import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as productsActions from '../../store/actions/products';
import Input from '../../components/UI/Input';
import Colors from '../../constants/Colors';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const EditProductScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const prodId = props.navigation.getParam('productId');
  const editedProduct = useSelector(state =>
    state.products.userProducts.find(prod => prod.id === prodId)
  );
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.title : '',
      imageUrl: editedProduct ? editedProduct.imageUrl : '',
      description: editedProduct ? editedProduct.description : '',
      price: ''
    },
    inputValidities: {
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false
    },
    formIsValid: editedProduct ? true : false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An error occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const submitHandler = useCallback(async () => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong input!', 'Please check the errors in the form.', [
        { text: 'Okay' }
      ]);
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      if (editedProduct) {
        await dispatch(
          productsActions.updateProduct(
            prodId,
            formState.inputValues.title,
            formState.inputValues.description,
            formState.inputValues.imageUrl
          )
        );
      } else {
        await dispatch(
          productsActions.createProduct(
            formState.inputValues.title,
            formState.inputValues.description,
            formState.inputValues.imageUrl,
            +formState.inputValues.price
          )
        );
      }
      props.navigation.goBack();
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
    
  }, [dispatch, prodId, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View style={styles.form}>
          <Input
            id="title"
            label="Title"
            errorText="Please enter a valid title!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.title : ''}
            initiallyValid={!!editedProduct}
            required
          />
          <Input
            id="imageUrl"
            label="Image Url"
            errorText="Please enter a valid image url!"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.imageUrl : ''}
            initiallyValid={!!editedProduct}
            required
          />
          {editedProduct ? null : (
            <Input
              id="price"
              label="Price"
              errorText="Please enter a valid price!"
              keyboardType="decimal-pad"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              required
              min={0.1}
            />
          )}
          <Input
            id="description"
            label="Description"
            errorText="Please enter a valid description!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            multiline
            numberOfLines={3}
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.description : ''}
            initiallyValid={!!editedProduct}
            required
            minLength={5}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default EditProductScreen;
// =======
// import React from "react";
// import { View, ScrollView, Text, StyleSheet} from 'react-native';
// =======
// import React, { useState } from "react";
// import { View, ScrollView, Text, StyleSheet, Platform} from 'react-native';
// >>>>>>> 9435d418632c5a77a0530ac87a62d334fb839530
// import { TextInput } from "react-native-paper";
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import { useSelector } from 'react-redux';

// import HeaderButton from '../../components/UI/HeaderButton';

// const EditProductScreen = props => {
//     const prodId = props.navigation.getParam('productId');
//     const editeProduct = useSelector(state =>
//         state.products.userProducts.find(prod => prod.id === prodId)
//         );

//     const [title, setTitle] = useState(editeProduct ? editeProduct.title : '');
//     const [imageUrl, setImageUrl] = useState(editeProduct ? editeProduct.imageUrl :'');
//     const [price, setPrice] = useState('');
//     const [description, setDescription] = useState(editeProduct ? editeProduct.description :''); 

   
//     return (
//        <ScrollView>
//            <View style={styles.form}>
//              <View style={styles.formControl}>
//                  <Text style={styles.label}>Title</Text>
//                  <TextInput
//                     style={styles.input}
//                     value={title}
//                     onChangeText= {text => setTitle(text)}
//                 />
//              </View>
//              <View style={styles.formControl}>
//                  <Text style={styles.label}>Image URL</Text>
//                  <TextInput
//                     style={styles.input}
//                     value={imageUrl}
//                     onChangeText= {text => setImageUrl(text)}
//                 />
//              </View>
//              {editeProduct ? null : (
//              <View style={styles.formControl}>
//                  <Text style={styles.label}>Price</Text>
//                  <TextInput
//                     style={styles.input}
//                     value={price}
//                     onChangeText= {text => setPrice(text)}
//                 />
//              </View>
//              )}
//              <View style={styles.formControl}>
//                  <Text style={styles.label}>Description</Text>
//                  <TextInput
//                     style={styles.input}
//                     value={description}
//                     onChangeText= {text => setDescription(text)}
//                 />
//              </View>
//             </View>
//        </ScrollView>
//     );
// };

// EditProductScreen.navigationOptions = navData => {
//     return {
//         headerTitle: navData.navigation.getParam('productId')
//         ? 'Edit Product'
//         : 'Add Product',
//         headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//             title="Save"
//             iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
//             onPress={() => {
//             //navData.navigation.navigate('EditProduct');
//             }}
//         />
//         </HeaderButtons>
//     };
// };

// const styles = StyleSheet.create({
//     form: {
//         margin: 20
//     },
//     formControl: {
//         width: '100%'
//     },
//     label: {
//         fontFamily: 'open-sans-bold',
//         marginVertical: 8
//     },
//     input: {
//         paddingHorizontal: 2,
//         paddingVertical: 5,
//         borderBottomColor: '#ccc',
//         borderBottomWidth: 1
//     }
// });

// export default EditProductScreen;

// >>>>>>> d90d417318bd1fff481d9b0072fa49c295895c9a
