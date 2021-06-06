import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {cartReducer} from './reducers/cartReducers'
import {getProductsReducer,getProductDetailsReducer} from './reducers/productReducers'
const reducer = combineReducers({
    cart:cartReducer,
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer
});
const middleware = [thunk]; //helps us to make asynchronus requests in our actions

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    );
export default store;