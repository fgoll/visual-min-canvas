import { SET_ACTION, REMOVE_ACTION } from "./actionTypes";

export const setAction = (action) => ({
  type: SET_ACTION,
  action
})

export const removeAction = () => ({
  type: REMOVE_ACTION,

})