import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//import {hotelListReducer} from "./Reducers/HotelReducer";

const reducer = combineReducers({
    //hotelList: hotelListReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    //composeWithDevTools(applyMiddleware(...middleware))
    applyMiddleware(...middleware)
)

export default store;
