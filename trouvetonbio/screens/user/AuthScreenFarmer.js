import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { ScrollView, View, KeyboardAvoidingView, StyleSheet, Button, ActivityIndicator, Alert, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const AuthScreenFarmer = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      firstname: '',
      lastname: '',
      age: '',
      phone: '',
      email: '',
      password: '',
      companyname: '',
      companyaddress: '',
      companyphone: ''
    },
    inputValidities: {

      firstname: false,
      lastname: false,
      age: false,
      phone: false,
      email: false,
      password: false,
      companyname: false,
      companyaddress: false,
      companyphone: false
    },
    formIsValid: false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    if (isSignup) {
      action = authActions.signup(
        formState.inputValues.fisrtname,
        formState.inputValues.lastname,
        formState.inputValues.phone,
        formState.inputValues.age,
        formState.inputValues.password,
        formState.inputValues.email,
        formState.inputValues.companyname,
        formState.inputValues.companyaddress,
        formState.inputValues.companyphone
      );
    } else {
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate('Shop');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <ImageBackground source={require('./login.png')} style={{ width: '100%', height: '100%' }}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="firstname"
              label="firstname"
              keyboardType="default"
              required
              errorText="Please enter a valid firstname."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="lastname"
              label="lastname"
              keyboardType="default"
              required
              errorText="Please enter a valid lastname."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="age"
              label="age"
              keyboardType="default"
              required
              errorText="Please enter a valid age."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="phone"
              label="phone"
              keyboardType="default"
              required
              errorText="Please enter a valid phone."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="companyname"
              label="companyname"
              keyboardType="default"
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid companyname."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="companyaddress"
              label="companyaddress"
              keyboardType="default"
              required
              errorText="Please enter a valid companyaddress."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="companyphone"
              label="companyphone"
              keyboardType="default"
              required
              errorText="Please enter a valid companyphone."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.primary} />
              ) : (
                  <Button
                    title={isSignup ? 'Sign Up' : 'Login'}
                    color={Colors.primary}
                    onPress={authHandler}
                  />
                )}
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                color={Colors.accent}
                onPress={() => {
                  setIsSignup(prevState => !prevState);
                }}
              />
              <Button title="Retour accueil" onPress={() => props.navigation.navigate('RegisterScreen')} />
            </View>
          </ScrollView>
        </Card>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

AuthScreenFarmer.navigationOptions = {
  headerTitle: 'Bienvenue'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
    paddingHorizontal: 20,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10%',
    marginLeft: '10%',
    marginTop: '10%'


  },
  buttonContainer: {
    marginTop: 10
  }
});

export default AuthScreenFarmer;
