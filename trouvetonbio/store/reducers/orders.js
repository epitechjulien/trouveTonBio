import { ADD_ORDER } from '../actions/orders';
import Order from '../../models/order';

const initialState = {
  orders: []
};
// we pass a generic id (en dur) new Date().toString..
// a modif une fois acces base de donnée
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      };
  }

  return state;
};
