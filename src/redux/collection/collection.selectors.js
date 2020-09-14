import { createSelector } from "reselect";
// import memoize from "lodash.memoize";

const selectCollection = (state) => state.collection;

export const selectProducts = createSelector([selectCollection], (collection) => collection.items);

export const selectProduct = ((productUrlParam) =>
	createSelector([selectProducts], (products) => products[productUrlParam])
);