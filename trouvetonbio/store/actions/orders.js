import Order from '../../models/order';

export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';


/**
 * This function is used to manage the orders and update the database.
 * @param {auth, userId} input requested information to register.
 * @throws {InvalidArgumentException} Throw an error if the argument is not respecting the structure.
 * @throws {Required fields} Will throw an error if all the fiels are not filled.
 * @async
 * @returns {dispatch, getState} : Dispatch is simply using JS destructuring assignment to extract dispatch from this.props object.
 * 
 */
export const fetchOrders = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    try {
      const response = await fetch(
        `https://bio-finder-82a70.firebaseio.com/orders/${userId}.json`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      const loadedOrders = [];

      for (const key in resData) {
        loadedOrders.push(
          new Order(
            key,
            resData[key].cartItems,
            resData[key].totalAmount,
            new Date(resData[key].date)
          )
        );
      }
      dispatch({ type: SET_ORDERS, orders: loadedOrders });
    } catch (err) {
      throw err;
    }
  };
};

/**
 * This function is used to add products to the orders.
 * @param {cartItems, totalAmount}
 * @throws {InvalidArgumentException} Throw an error if the argument is not respecting the structure.
 * @throws {Required fields} Will throw an error if all the fiels are not filled.
 * @async
 * @returns {dispatch, getState} : Dispatch is simply using JS destructuring assignment to extract dispatch from this.props object.
 */
export const addOrder = (cartItems, totalAmount) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const date = new Date();
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/orders/${userId}.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: date.toISOString()
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

/**
 * This function is used to link the order to the database.
 * It's taking the data of the id, items, amount, and the date.
 */
    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: totalAmount,
        date: date
      }
    });
  };
};
