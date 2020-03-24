/* selectors */
export const getAll = ({ notes }) => notes;

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
  switch (action.type){
    case ADD_NOTE: {
      return statePart;
    }
    default:
      return statePart;
  }
};
