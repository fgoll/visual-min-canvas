import { ADD_GRAPH, REMOVE_GRAPH } from "./actionTypes";

export default (state=[], action) => {
  switch (action.action) {
    case ADD_GRAPH: 
      return [
        {
          id: action.id,
          type: action.type,
          attr: action.attr
        },
        ...state
      ]
    case REMOVE_GRAPH:
      return state.filter(item => {
        return item.id !== action.id
      })
    default:
      return state
  }
}