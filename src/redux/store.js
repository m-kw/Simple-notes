import { combineReducers, createStore } from 'redux';

import { initialState } from './initialState';
import { reducer as notesReducer } from './notesRedux';

// define reducers
const reducers = {
  notes: notesReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
);
