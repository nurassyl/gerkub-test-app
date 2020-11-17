import _ from 'lodash'
import {createStore} from 'redux';

/**
 * Actions
 */
import {
  ADD_DISTRICT,
  REMOVE_DISTRICT,
  TOGGLE_MORE,
  ADD_CITY,
  REMOVE_CITY,
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
function rootReducer(state = initialState, action) { switch (action.type) { case ADD_DISTRICT:
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

		case ADD_CITY:
      state.districts[action.districtIndex].cities.unshift({
        name: action.name
      })

      return Object.assign({}, state, {
        districts: state.districts
      })

		case REMOVE_CITY:
      _.pullAt(state.districts[action.districtIndex].cities, action.index)

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
