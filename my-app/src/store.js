import { createStore } from 'redux'
import {rootReducer} from './reducers/news'
let store = createStore(rootReducer)

export default store