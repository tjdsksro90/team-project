import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  // 여기에 추가
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
