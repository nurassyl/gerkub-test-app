import {createStore} from 'redux';

/**
 * Actions
 */
import { ADD_DISTRICT } from './actions'

/**
 * Initial state
 */
const initialState = {
  districts: new Array,
};

/**
 * Reducer
 */
function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_DISTRICT:
      state.districts.unshift({
        name: action.name,
      })

      return Object.assign({}, state, {
        districts: state.districts
      })
    default:
      return state
	}
}

/**
 * Store
 */
let store = createStore(rootReducer);

export default store;
