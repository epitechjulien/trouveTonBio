import Product from '../../models/product';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

/**
 * This function is used to manage the products.
 * @param {auth, userId} input requested information to register.
 * @throws {InvalidArgumentException} Throw an error if the argument is not respecting the structure.
 * @throws {Required fields} Will throw an error if all the fiels are not filled.
 * @async
 * @returns {dispatch, getState} : Dispatch is simply using JS destructuring assignment to extract dispatch from this.props object.
 * 
 */
export const fetchProducts = () => {
  return async (dispatch, getState) => {
    // any async code you want!
    const userId = getState().auth.userId;
    try {
      const response = await fetch(
        'https://bio-finder-82a70.firebaseio.com/products.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      const loadedProducts = [];

      for (const key in resData) {
        loadedProducts.push(
          new Product(
            key,
            resData[key].categoryIds,
            resData[key].subcategoriesIds,
            resData[key].ownerId,
            resData[key].title,
            resData[key].image,
            resData[key].description,            
            resData[key].price,
            resData[key].promotion
          )
        );
      }

      dispatch({
        type: SET_PRODUCTS,
        products: loadedProducts,
        userProducts: loadedProducts.filter(prod => prod.ownerId === userId)
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

/**
 * This function is used to delete a product and to erase it from the database.
 * @param {productId}
 * @async
 * @returns {dispatch, getState} : Dispatch is simply using JS destructuring assignment to extract dispatch from this.props object.
 */
export const deleteProduct = productId => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/products/${productId}.json?auth=${token}`,
      {
        method: 'DELETE'
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    dispatch({ type: DELETE_PRODUCT, pid: productId });
  };
};

/**
 * This function is used to create a product and to add it into the database.
 * @param {categoryIds, subcategoriesIds, title, description, image, price, promotion}
 * @throws {InvalidArgumentException} Throw an error if the argument is not respecting the structure.
 * @throws {Required fields} Will throw an error if all the fiels are not filled.
 * @async
 * @returns {dispatch, getState} : Dispatch is simply using JS destructuring assignment to extract dispatch from this.props object.
 */
export const createProduct = (categoryIds, subcategoriesIds, title, description, image, price, promotion) => {
  return async (dispatch, getState) => {
    // any async code you want!
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/products.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoryIds,
          subcategoriesIds,
          title,
          description,
          image,
          price,
          promotion,
          ownerId: userId
        })
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        categoryIds,
        subcategoriesIds,
        title,
        description,
        image,
        price,
        promotion,
        ownerId: userId
      }
    });
  };
};

/**
 * This function is used to modify the relative informations of a product. 
 * It will also make the changes in the database.
 * @param {id, categoryIds,subcategoriesIds, title, description, image, promotion}
 * @throws {InvalidArgumentException} Throw an error if the argument is not respecting the structure.
 * @async
 * @returns {dispatch, getState} : Dispatch is simply using JS destructuring assignment to extract dispatch from this.props object.
 */
export const updateProduct = (id, categoryIds,subcategoriesIds, title, description, image, promotion) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/products/${id}.json?auth=${token}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoryIds,
          subcategoriesIds,
          title,
          description,
          promotion,
          image
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    dispatch({
      type: UPDATE_PRODUCT,
      pid: id,
      productData: {
        categoryIds,
        subcategoriesIds,
        title,
        description,
        promotion,
        image
      }
    });
  };
};
