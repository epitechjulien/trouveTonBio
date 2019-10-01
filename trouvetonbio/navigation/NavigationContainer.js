import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ShopNavigator from './ShopNavigator';

const NavigationContainer = props => {
  const navRef = useRef();
  const isAuth = useSelector(state => !!state.auth.token);

  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(
        NavigationActions.navigate({ routeName: 'RegisterScreen' })
      );
    }
  }, [isAuth]);

  return <ShopNavigator ref={navRef} />;
};

export default NavigationContainer;

// const AppNavigator = createStackNavigator(
// const navRef = useRef();
// const isAuth = useSelector(state => !!state.auth.token);
//   {
//     Register: Register
//   },
//   {
//     initialRouteName: 'Register',
//   }
// );

// export default createAppContainer(AppNavigator);