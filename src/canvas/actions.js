import { ADD_GRAPH } from "./actionTypes";

let nextToId = 0

const add_graph = (type, attr) => ({
  action: ADD_GRAPH,
  type,
  attr,
  id: ++nextToId
})

