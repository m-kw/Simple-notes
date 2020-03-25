import { initialState } from './initialState';

/* selectors */
export const getAll = ({ notes }) => initialState.notes;

/* action name creator */
const reducerName = 'notes';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_NOTE = createActionName('ADD_NOTE');

/* action creators */
export const addNote = payload => ({ payload, type: ADD_NOTE });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  console.log('action', action);
  console.log('state', statePart);
  switch (action.type){
    case ADD_NOTE: {
      return [ ...statePart, action.payload];
    }
    default:
      return statePart;
  }
};
