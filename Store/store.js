import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./User/Reducer";
import { ProductReducer } from "./Products/Reducer";
import { FavouritesReducer } from "./Favourites/Reducer";
import { CalendarReducer } from "./Calendar/Reducer";

const reducer = combineReducers({
	Login: AuthReducer,
	Product: ProductReducer,
	Favourites: FavouritesReducer,
	Calendar: CalendarReducer,
});

const initialState = {
	Login: {},
};

const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
