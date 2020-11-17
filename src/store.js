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
var initialState = {
  districts: new Array,
};

if(initialState.districts.length === 0) {
  let state = window.localStorage.getItem('state')

  if(state) {
    state = JSON.parse(state)

    // Hide more content
    for(let d of state.districts) {
      d.isMoreShown = false
    }

    initialState = state
  }
}

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

      state = Object.assign({}, state, {
        districts: state.districts
      })

      break

		case REMOVE_DISTRICT:
      _.pullAt(state.districts, action.index)

      state = Object.assign({}, state, {
        districts: state.districts
      })

      break

		case TOGGLE_MORE:
      state.districts[action.index].isMoreShown = !state.districts[action.index].isMoreShown

      state = Object.assign({}, state, {
        districts: state.districts
      })

      break

		case ADD_CITY:
      state.districts[action.districtIndex].cities.unshift({
        name: action.name
      })

      state = Object.assign({}, state, {
        districts: state.districts
      })

      break

		case REMOVE_CITY:
      _.pullAt(state.districts[action.districtIndex].cities, action.index)

      state = Object.assign({}, state, {
        districts: state.districts
      })

      break
	}

  window.localStorage.setItem('state', JSON.stringify(state))

  return state
}

/**
 * Store
 */
let store = createStore(rootReducer);

export default store;
