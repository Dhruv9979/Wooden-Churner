import cartReducer from "./cart/cart.reducer";
import { combineReducers } from "redux";
import directoryReducer from "../redux/directory/directory.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
