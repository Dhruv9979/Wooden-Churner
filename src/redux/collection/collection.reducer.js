import PRODUCT_DATA from "./collection.data";

const INITIAL_STATE = {
	items: PRODUCT_DATA,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default collectionReducer;
