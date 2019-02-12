import { REMOVE_ACTION, SET_ACTION, SET_CURRENT } from "./actionTypes";

export default (state = {action: null, current: null}, action) => {
  switch (action.type) {
    case SET_ACTION:
      return {...state, action: action.action}
    case SET_CURRENT:
      return {...state, current: action.current}
    case REMOVE_ACTION:
      return {...state, action: null}
    default:
      return state
  }
}