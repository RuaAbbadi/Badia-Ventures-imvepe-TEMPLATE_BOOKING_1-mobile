import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./User/Reducer";
import { ProductReducer } from "./Products/Reducer";
import { FavouritesReducer } from "./Favourites/Reducer";

const reducer = combineReducers({
	Login: AuthReducer,
	Product: ProductReducer,
	Favourites: FavouritesReducer,
});

const initialState = {
	Login: {},
};

const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
