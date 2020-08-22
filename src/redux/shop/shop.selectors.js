import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
	oils: 1,
	scrubs: 2,
	flours: 3,
	other: 4,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
	createSelector([selectCollections], (collections) => collections[collectionUrlParam])
);
