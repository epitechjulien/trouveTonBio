import { AsyncStorage } from 'react-native';

// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

let timer;

export const authenticate = (userId, token) => {
  return dispatch => {
    // dispatch(setLogoutTimer(expiryTime));
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};

/**
 * This function is used to signup: the user can now log in.
 * @param {email, password} input requested information to register
 * @throws {InvalidArgumentException} Throw an error if the argument is not respecting the structure
 * @throws {Email already exists} Will throw an error if the email already exists 
 * @throws {Required fields} Will throw an error if all the fiels are not filled.
 * @return ({async dispatch}) : Dispatch is simply using JS destructuring assignment to extract dispatch from this.props object.
 */
export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnTT6jB9A2IqKi8TvgefvLBillXvuGBKI',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists already!';
      }
      throw new Error(message);
    }

    const resData = await response.json();

    console.log(resData);
    
    dispatch(
      authenticate(
        resData.localId,
        resData.idToken
        // parseInt(resData.expiresIn) * 1000
      )
    );
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(resData.expiresIn) * 1000
    // );
    saveDataToStorage(resData.idToken, resData.localId);
  };
};

/**
 * This function is used to login: the user can now order.
 * @param {email, password} input requested information to log in
 * @returns {async dispatch} ({ dispatch }) is simply using JS destructuring assignment to extract dispatch from this.props object.
 * @throws {InvalidArgumentException} Throw an error if the argument is nul, or if it's not respecting the structure
 * @throws {Email doesn't exist} Will throw an error if the email is not in the database.
 * @throws {Password doesn't match} Will throw an error if the password is not linked to the email
 */
export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnTT6jB9A2IqKi8TvgefvLBillXvuGBKI',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch(
      authenticate(
        resData.localId,
        resData.idToken
        // parseInt(resData.expiresIn) * 1000
      )
    );
    /**
     * This function is used to indicate the date that will be used to determine the argument for the render function.
     **/
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(resData.expiresIn) * 1000
    // );
    saveDataToStorage(resData.idToken, resData.localId, expirationDate);
  };
};

/**
 * This function is used to log out.
 * It calls the function removeItem to clear the data. The user is not connected a
 * nymore.
 * @returns {LOGOUT} Will permit to the user to log out when he pushed the button.
 */
export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  // console.log(resData);
  // AsyncStorage.getItem('userData');
  // console.log(resData);
  return { type: LOGOUT };
  console.log(logout)
};
/**
* This function is used to clear the LogoutTimer when the user already log out.
* It will permit to not be disconnected in his next session.
**/
const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

// const setLogoutTimer = expirationTime => {
//   return dispatch => {
//     timer = setTimeout(() => {
//       dispatch(logout());
//     }, expirationTime);
//   };
// };

const saveDataToStorage = (token, userId) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId
      // expiryDate: expirationDate.toISOString()
    })
  );
};
