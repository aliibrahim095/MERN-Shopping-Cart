import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({});
const middleware = [thunk]; //helps us to make asynchronus requests in our actions

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    );
export default store;