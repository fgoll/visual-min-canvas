import { REMOVE_ACTION, SET_ACTION } from "./actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case SET_ACTION:
      return action.action
    case REMOVE_ACTION:
      return null
    default:
      return state
  }
}