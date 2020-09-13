import cartReducer from "./cart/cart.reducer";
import { combineReducers } from "redux";
import directoryReducer from "../redux/directory/directory.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";
import collectionReducer from "./collection/collection.reducer";

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
	collection: collectionReducer,
});

export default persistReducer(persistConfig, rootReducer);
