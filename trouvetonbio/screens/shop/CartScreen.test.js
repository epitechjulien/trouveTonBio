import React from 'react';
import renderer from 'react-test-renderer';
import App from "../../App"
import CartScreen from "./CartScreen"
import { Provider } from 'react-redux'
import { createStore } from 'redux'

it('renders correctly', () => {
  const tree = renderer
  .create(
    <Provider store={ createStore(state => { return state }, { cart: { totalAmount: 0 } }) } >
      <CartScreen />
    </Provider>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});



// test('one is one', () => {
//   expect(1).toEqual(1)
// });