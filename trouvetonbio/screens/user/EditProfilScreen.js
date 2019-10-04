import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as profilsActions from '../../store/actions/profils';
import Input from '../../components/UI/Input';
import Colors from '../../constants/Colors';

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

const EditProfilScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const profilId = props.navigation.getParam('profilId');
  const editedProfil = useSelector(state =>
    state.profils.userProfils.find(profils => profils.id === profilId)
  );
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      // ownerId: editedProfil ? editedProfil .ownerId: '',
      ownerAddress: editedProfil  ? editedProfil .ownerAddress : '',
      // farmAddress: editedProfil ? editedProfil .farmAddress : '',
      ownerZip: editedProfil  ? editedProfil .ownerZip : '',
      // farmZip: editedProfil  ? editedProfil .farmZip : '',
      ownerTel: editedProfil  ? editedProfil .ownerTel : '',
      // farmTel: editedProfil  ? editedProfil .farmTel : '',
      ownerTown: editedProfil ? editedProfil .ownerTown : '',
      // farmTown: editedProfil  ? editedProfil .farmTown : '',
      // farmDescription: editedProfil  ? editedProfil .farmDescription : '',
      // farmImage: editedProfil  ? editedProfil .farmImage : '',
      // ownerStatus: editedProfil  ? editedProfil .ownerStatus : ''
    },
    inputValidities: {
        // ownerId: editedProfil ? true : false,
        ownerAddress: editedProfil ? true : false,
        // farmAddress: editedProfil ? true : false,
        ownerZip: editedProfil ? true : false,
        // farmZip: editedProfil ? true : false,
        ownerTel: editedProfil ? true : false,
        // farmTel: editedProfil ? true : false,
        ownerTown: editedProfil ? true : false,
        // farmTown: editedProfil ? true : false,
        // farmDescription: editedProfil ? true : false,
        // farmImage: editedProfil ? true : false,
        // ownerStatus: editedProfil ? true : false
    },
    formIsValid: editedProfil ? true : false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An error occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const submitHandler = useCallback(async () => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong input!', 'Please check the errors in the form.', [
        { text: 'Okay' }
      ]);
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      if (editedProfil) {
        await dispatch(
          profilsActions.updateProfil(
            profilId,
            // formState.inputValues.ownerId,
            formState.inputValues.ownerAddress,
            // formState.inputValues.farmAddress,
            formState.inputValues.ownerZip,
            // formState.inputValues.farmZip,
            formState.inputValues.ownerTel,
            // formState.inputValues.farmTel,
            formState.inputValues.ownerTown,
            // formState.inputValues.farmTown,
            // formState.inputValues.farmDescription,
            // formState.inputValues.farmImage,
            // formState.inputValues.ownerStatus,
          )
        );
      } else {
        await dispatch(
          profilsActions.createProfil(
            // formState.inputValues.ownerId,
            formState.inputValues.ownerAddress,
            // formState.inputValues.farmAddress,
            formState.inputValues.ownerZip,
            // formState.inputValues.farmZip,
            formState.inputValues.ownerTel,
            // formState.inputValues.farmTel,
            formState.inputValues.ownerTown,
            // formState.inputValues.farmTown,
            // formState.inputValues.farmDescription,
            // formState.inputValues.farmImage,
            // formState.inputValues.ownerStatus,

          )
        );
      }
      props.navigation.goBack();
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
    
  }, [dispatch, profilId, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

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

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View style={styles.form}>
        <Input
            id="ownerAddress"
            label="Address"
            errorText="Please enter a valid address"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedProfil? editedProfil .ownerAddress : ''}
            initiallyValid={!!editedProfil}
            required
          />
          <Input
            id="ownerZip"
            label="ZipCode"
            errorText="Please enter a ZipCode"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedProfil ? editedProfil .ownerZip : ''}
            initiallyValid={!!editedProfil }
            required
          />
          <Input
            id="ownerTel"
            label="TEL"
            errorText="Please enter a valid tel!"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedProfil ? editedProfil .ownerTel : ''}
            initiallyValid={!!editedProfil}
            
          />
          <Input
            id="ownerTown"
            label="Town"
            errorText="Please enter a valid town!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            multiline
            numberOfLines={3}
            onInputChange={inputChangeHandler}
            initialValue={editedProfil ? editedProfil .ownerTown : ''}
            initiallyValid={!!editedProfil}
            required
            minLength={5}
          /> 
          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

EditProfilScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: navData.navigation.getParam('profilId')
      ? 'Edit profil'
      : 'Add profil',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default EditProfilScreen;
