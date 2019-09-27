import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';
import { PRODUCTS } from '../../data/dummy-data';

const ProductDetailScreen = props => {
    //extract productId from parameter we receive
    const productId= props.navigation.getParam('productId');

    // const selectedProduct = useSelector(state => 
    //   state.products.availableProducts.find(prod => prod.id === productId)
    // );

    const selectedProduct = PRODUCTS.find(prod => prod.id === productId);
    const dispatch = useDispatch();


  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
      <View style= {styles.actions}>
        <Button color={Colors.primaryColor} title ="Add to Cart" onpress={() => {
          dispatch(cartActions.addToCart(selectedProduct));
        }}/>
      </View>
      
      <Text style={styles.price}>€{selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
    
  );

};

ProductDetailScreen.navigationOptions = navigationData =>{
  const productId = navigationData.navigation.getParam('productId');
  const selectedProduct = PRODUCTS.find(prod => prod.id === productId);
  return{
    headerTitle: selectedProduct.title
  };
};

const styles = StyleSheet.create({
  image:{
    width:'100%',
    height: 300
  },
  actions:{
    marginVertical:10,
    alignItems: 'center'
  },
  price:{
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color:'#888',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal:20
  }
  


});

export default ProductDetailScreen;