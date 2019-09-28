import React from 'react';
<<<<<<< HEAD
import { View, Text, FlatList, Button, Platform, Alert } from 'react-native';
=======
import { FlatList,Button, Platform } from 'react-native';
>>>>>>> d90d417318bd1fff481d9b0072fa49c295895c9a
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
<<<<<<< HEAD
import * as productsActions from '../../store/actions/products';

const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = id => {
    props.navigation.navigate('EditProduct', { productId: id });
  };

  const deleteHandler = id => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        }
      }
    ]);
  };

  if (userProducts.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No products found, maybe start creating some?</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

UserProductsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Products',
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
          title="Add"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navData.navigation.navigate('EditProduct');
          }}
        />
      </HeaderButtons>
    )
  };
};

export default UserProductsScreen;
=======
import * as  productsActions from '../../store/actions/products';

const UserProductsScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    const editProductHandler = (id) => {
      props.navigation.navigate('EditProduct', {productId: id});
    }

    return (
            <FlatList 
              data={userProducts} 
              keyExtractor={item => item.id}
              renderItem={itemData => (
                  <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {}}
                    >
                    <Button
                        color={Colors.primaryColor}
                        title="Edit"
                        onPress={() => {
                          editProductHandler(itemData.item.id);
                        }}
              />
              <Button
                color={Colors.primaryColor}
                title="Delete"
                onPress={() => {
                    dispatch(productsActions.deleteProduct(itemData.item.id));
                }}
              />
                </ProductItem>
              )}
            />
    );
};

UserProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Products',
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
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            onPress={() => {
            navData.navigation.navigate('EditProduct');
            }}
        />
        </HeaderButtons>
    };
};

export default UserProductsScreen
>>>>>>> d90d417318bd1fff481d9b0072fa49c295895c9a
