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
import * as eventsActions from '../../store/actions/events';
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

const EditEventScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const eventId = props.navigation.getParam('eventId');
  
  const editedEvent = useSelector(state =>
    state.events.userEvents.find(event => event.id === eventId)
    
  );
  
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      eventtypeId: editedEvent ? editedEvent.eventtypeId: '',
      title: editedEvent  ? editedEvent .title : '',
      image: editedEvent  ? editedEvent .image : '',
      description: editedEvent  ? editedEvent .description : '',
      date: editedEvent  ? editedEvent .date : '',
    },
    inputValidities: {
      eventtypeId: editedEvent ? true : false,
      title: editedEvent? true : false,
      image: editedEvent ? true : false,
      description: editedEvent ? true : false,
      date: editedEvent ? true : false
    },
    formIsValid: editedEvent ? true : false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An error occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const submitHandler = useCallback(async () => {
    console.log('submitting');
    if (!formState.formIsValid) {
      Alert.alert('Wrong input!', 'Please check the errors in the form.', [
        { text: 'Okay' }
      ]);
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      if (editedEvent) {
        await dispatch(
          eventsActions.updateEvent(
            eventId,
            formState.inputValues.eventtypeId,
            formState.inputValues.title,
            formState.inputValues.image,
            formState.inputValues.description,
            formState.inputValues.date,
          )
        );
      } else {
        await dispatch(
          eventsActions.createEvent(
            formState.inputValues.eventtypeId,
            formState.inputValues.title,
            formState.inputValues.image,
            formState.inputValues.description,
            formState.inputValues.date
          )
        );
      }
      props.navigation.goBack();
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
    
  }, [dispatch, eventId, formState]);

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
            id="eventtypeId"
            label="Event type Id"
            errorText="Please enter a valid event type Id"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedEvent ? editedEvent .eventtypeId : ''}
            initiallyValid={!!editedEvent}
            required
          />
          <Input
            id="title"
            label="Title"
            errorText="Please enter a valid title!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedEvent  ? editedEvent .title : ''}
            initiallyValid={!!editedEvent }
            required
          />
          <Input
            id="image"
            label="Image Url"
            errorText="Please enter a valid image url!"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedEvent ? editedEvent .image : ''}
            initiallyValid={!!editedEvent }
            
          />
          <Input
            id="description"
            label="Description"
            errorText="Please enter a valid description!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            multiline
            numberOfLines={3}
            onInputChange={inputChangeHandler}
            initialValue={editedEvent ? editedEvent.description : ''}
            initiallyValid={!!editedEvent}
            required
            minLength={5}
          />
            <Input
              id="date"
              label="date"
              errorText="Please enter a valid date!"
              keyboardType="default"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              initialValue={editedEvent ? editedEvent.date : ''}
              initiallyValid={!!editedEvent}
              required
            />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

EditEventScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: navData.navigation.getParam('eventId')
      ? 'Edit event'
      : 'Add event',
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

export default EditEventScreen;
