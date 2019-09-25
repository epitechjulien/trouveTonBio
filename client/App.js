import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import  { init } from './helpers/db';
import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducer from './store/places-reducer';

init()
  .then(() => {
    console.log('Initiliazed database');
})
.catch(err => {
  console.log('Initializing db failed.');
  console.log(err);
});

const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
