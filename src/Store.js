import { createStore, compose } from 'redux'
import { reducer as ToolReducer } from './canvas/'

const win = window

const reducer = ToolReducer

let storeEnhancers = compose(
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)

export default createStore(reducer, {}, storeEnhancers)