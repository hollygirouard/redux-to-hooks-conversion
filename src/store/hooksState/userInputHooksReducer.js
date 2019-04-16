import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  user_input_change: '',
  user_input_submit: ''
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_INPUT_CHANGE:
        return {
          ...state,
          user_input_change: action.payload
        }
      case ACTION_TYPES.USER_INPUT_SUBMIT:
        return {
          ...state,
          user_input_submit: action.payload
        }
      default:
        return state
    }
}
