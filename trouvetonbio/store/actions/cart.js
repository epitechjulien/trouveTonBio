export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

/**
 * This function is used to add a chosen product to the cart.
 * @param {product} 
 * @return A type: ADD_TO_CART and the product
 */
export const addToCart = product => {
  return { type: ADD_TO_CART, product: product };
};

/**
 * This function is used to remove a chosen product in the cart.
 * @param {productId} 
 * @return A type: REMOVE_FROM_CART and the productId
 */
export const removeFromCart = productId => {
  return { type: REMOVE_FROM_CART, pid: productId };
};
