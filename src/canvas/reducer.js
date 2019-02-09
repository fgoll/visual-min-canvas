import { ADD_GRAPH, REMOVE_GRAPH } from "./actionTypes";

export default (state=[], action) => {
  switch (action.type) {
    case ADD_GRAPH: 
      return [
        {
          id: action.id,
          action: action.action,
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