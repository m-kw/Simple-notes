/* selectors */
export const getAll = ({ notes }) => notes;

/* action name creator */
const reducerName = 'notes';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_NOTE = createActionName('ADD_NOTE');
const REMOVE_NOTE = createActionName('REMOVE_NOTE');

/* action creators */
export const addNote = payload => ({ payload, type: ADD_NOTE });
export const removeNote = payload => ({ payload, type: REMOVE_NOTE });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  console.log('action', action);
  switch (action.type){
    case ADD_NOTE: {
      return [ ...statePart, action.payload];
    }
    case REMOVE_NOTE: {
      return statePart.filter(el => el.id !== action.payload);
    }
    default:
      return statePart;
  }
};
