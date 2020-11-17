import _ from 'lodash'
import {createStore} from 'redux';

/**
 * Actions
 */
import {
  ADD_DISTRICT,
  REMOVE_DISTRICT,
  TOGGLE_MORE,
} from './actions'

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
        isMoreShown: false,
        name: action.name,
        cities: [],
      })

      return Object.assign({}, state, {
        districts: state.districts
      })

		case REMOVE_DISTRICT:
      _.pullAt(state.districts, action.index)

      return Object.assign({}, state, {
        districts: state.districts
      })

		case TOGGLE_MORE:
      state.districts[action.index].isMoreShown = !state.districts[action.index].isMoreShown

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
