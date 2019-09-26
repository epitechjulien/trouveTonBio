import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
// remove composeWithDev before deploying app
// import{ composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from '../store/reducers/cart';
import productsReducer from '../store/reducers/products';
import ShopNavigator from '../navigation/ShopNavigator';
import ordersReducer from '../store/reducers/orders';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});
// remove composeWithDev before deploying app
const store = createStore(rootReducer);

export default function App() {

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
