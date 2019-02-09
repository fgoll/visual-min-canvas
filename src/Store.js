import { createStore, compose, combineReducers } from 'redux'
import { reducer as CanvasReducer } from './canvas/'
import { reducer as ToolReducer } from './tool-bar/'

const win = window

const reducer = combineReducers({
  canvas: CanvasReducer,
  action: ToolReducer
})

let storeEnhancers = compose(
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)

export default createStore(reducer, {}, storeEnhancers)