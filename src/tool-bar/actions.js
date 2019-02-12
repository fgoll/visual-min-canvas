import { SET_ACTION, REMOVE_ACTION, SET_CURRENT } from "./actionTypes";

export const setAction = (action) => ({
  type: SET_ACTION,
  action
})

export const setCurrent = (current) => ({
  type: SET_CURRENT,
  current
})

export const removeAction = () => ({
  type: REMOVE_ACTION,

})