import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import Colors from '../../constants/Colors';


export default class RegisterFarmer extends React.Component {
render() {
   return (
     <View style={styles.container}>
       <Text>Producteur register</Text>  
     </View>
   );
 }
}

RegisterFarmer.navigationOptions = {
  headerTitle: 'PRODUCTEUR : Register/Login '
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#ecf0f1',
 },
});






// import React from 'react';
// import { View, StyleSheet, Button, Text, ImageBackground, ScrollView, Card, Input } from 'react-native';




// export default class RegisterFarmer extends React.Component {
// render() {
//    return (
//     <ImageBackground source={require('./intro.png')} style={{width: '100%', height: '100%'}}>
//     <Card style={styles.authContainer}>
//       <ScrollView>
//         <Input
//           id="email"
//           label="E-Mail"
//           keyboardType="email-address"
//           required
//           email
//           autoCapitalize="none"
//           errorText="Please enter a valid email address."
//           initialValue=""
//         />
//         <Input
//           id="password"
//           label="Password"
//           keyboardType="default"
//           secureTextEntry
//           required
//           minLength={5}
//           autoCapitalize="none"
//           errorText="Please enter a valid password."
//           initialValue=""
//         />
//       <View style={styles.container}>
//  </View>
//       </ScrollView>
//     </Card>
//   </ImageBackground>
//    );
//  }
// }
// const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'center',
//    backgroundColor: '#ecf0f1',
//  },
// });






// import React, { useState, useEffect, useReducer, useCallback } from 'react';
// import {
//   ScrollView,
//   View,
//   KeyboardAvoidingView,
//   StyleSheet,
//   Button,
//   ActivityIndicator,
//   Alert,
//   ImageBackground
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useDispatch } from 'react-redux';

// import Input from '../../components/UI/Input';
// import Card from '../../components/UI/Card';
// import Colors from '../../constants/Colors';
// import * as authActions from '../../store/actions/auth';

// // const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

// const formReducer = (state, action) => {
//   if (action.type === FORM_INPUT_UPDATE) {
//     const updatedValues = {
//       ...state.inputValues,
//       [action.input]: action.value
//     };
//     const updatedValidities = {
//       ...state.inputValidities,
//       [action.input]: action.isValid
//     };
//     let updatedFormIsValid = true;
//     for (const key in updatedValidities) {
//       updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
//     }
//     return {
//       formIsValid: updatedFormIsValid,
//       inputValidities: updatedValidities,
//       inputValues: updatedValues
//     };
//   }
//   return state;
// };

// const RegisterFarmer = props => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   const [isSignup, setIsSignup] = useState(false);
//   const dispatch = useDispatch();

//   const [formState, dispatchFormState] = useReducer(formReducer, {
//     inputValues: {
//       username: '',
//       email: '',
//       password: '',
//       password_confirmation: ''
//     },
//     inputValidities: {
//       username: false,
//       email: false,
//       password: false,
//       password_confirmation: false
//     },
//     formIsValid: false
//   });

//   useEffect(() => {
//     if (error) {
//       Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
//     }
//   }, [error]);

//   const authHandler = async () => {
//     let action;
//     if (isSignup) {
//       action = authActions.signup(
//         formState.inputValues.email,
//         formState.inputValues.password
//       );
  
//     }
//     setError(null);
//     setIsLoading(true);
//     try {
//       await dispatch(action);
//       props.navigation.navigate('Shop');
//     } catch (err) {
//       setError(err.message);
//       setIsLoading(false);
//     }
//   };

//   const inputChangeHandler = useCallback(
//     (inputIdentifier, inputValue, inputValidity) => {
//       dispatchFormState({
//         type: FORM_INPUT_UPDATE,
//         value: inputValue,
//         isValid: inputValidity,
//         input: inputIdentifier
//       });
//     },
//     [dispatchFormState]
//   );

//   return (
//     <KeyboardAvoidingView
//       behavior="padding"
//       keyboardVerticalOffset={50}
//       style={styles.screen}
//     >
//       <ImageBackground source={require('./intro.png')} style={{width: '100%', height: '100%'}}>
//         <View style={styles.authContainer}>
//           <ScrollView>
//           <Input
//               id="username"
//               label="Username"
//               keyboardType="default"
//               required
//               autoCapitalize
//               errorText="Please enter a valid username"
//               onInputChange={inputChangeHandler}
//               initialValue=""
//             />
//             <Input
//               id="email"
//               label="E-Mail"
//               keyboardType="email-address"
//               required
//               email
//               autoCapitalize="none"
//               errorText="Please enter a valid email address."
//               onInputChange={inputChangeHandler}
//               initialValue=""
//             />
//             <Input
//               id="password"
//               label="Password"
//               keyboardType="default"
//               secureTextEntry
//               required
//               minLength={5}
//               autoCapitalize="none"
//               errorText="Please enter a valid password."
//               onInputChange={inputChangeHandler}
//               initialValue=""
//             />
//              <Input
//               id="password_confirmation"
//               label="Password Confirmation"
//               keyboardType="default"
//               secureTextEntry
//               required
//               minLength={5}
//               autoCapitalize="none"
//               errorText="Please enter a the same password."
//               onInputChange={inputChangeHandler}
//               initialValue=""
//             />
//             {/* <View style={styles.buttonContainer}>
//               {isLoading ? (
//                 <ActivityIndicator size="small" color={Colors.primary} />
//               ) : (
//                 <Button
//                   title={isSignup ? 'Sign Up' : 'Login'}
//                   color={Colors.primary}
//                   onPress={authHandler}
//                 />
//               )}
//             </View> */}
//             <View style={styles.buttonContainer}>
//               <Button
//                 title={`Étape 2`}
//                 color={Colors.accent}
//                 onPress={() => this.props.navigation.navigate('RegisterClientStep2')}
//               />
//             </View>
//           </ScrollView>
//           </View>
//       </ImageBackground>
//     </KeyboardAvoidingView>
//   );
// };

// RegisterFarmer.navigationOptions = {
//   headerTitle: 'Bienvenue'
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//   },
//   gradient: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   authContainer: {
//     width: '80%',
//     maxWidth: 600,
//     maxHeight: 600,
//     padding: 10,
//     paddingHorizontal: 10,
//     flex: 1,
//     alignContent : 'center',
//     alignItems:  'center',
//     justifyContent: 'center',
//     marginRight: '10%',
//     marginLeft:'10%',
//     marginTop: '25%'
    

//   },
//   buttonContainer: {
//     marginTop: 10
//   }
// });

// export default RegisterFarmer;
