import { ADD_GRAPH } from "./actionTypes";

let nextToId = 0

export const addGraph = (action, attr) => ({
  action,
  type: ADD_GRAPH,
  attr,
  id: ++nextToId
})

