const INITIAL_STATE = {
	sections: [
		{
			title: "oils",
			imageUrl:
				"https://i.ibb.co/VHxdgVx/Peanuts-in-wooden-bowl-in-different-shapes-like-heart-square-eclipse-with-peanut-oil.jpg",
			id: 1,
			linkUrl: "shop/oils",
		},
		{
			title: "scrubs",
			imageUrl: "https://i.ibb.co/Y33jXDH/walnut-body-scrub-beauty-treatment.jpg",
			id: 2,
			linkUrl: "shop/scrubs",
		},
		{
			title: "flours",
			imageUrl:
				"https://i.ibb.co/HFnpzcZ/Two-bowls-containing-almonds-and-almond-flour-for-food-processing-concept.jpg",
			id: 3,
			linkUrl: "shop/flours",
		},
		{
			title: "other",
			imageUrl: "https://i.ibb.co/cJMG18L/Other-Banner.jpg",
			size: "large",
			id: 4,
			linkUrl: "shop/other",
		},
		{
			title: "all",
			imageUrl:
				"https://i.ibb.co/DpqDbCh/Almond-and-oil-in-bottles-on-brown-wooden-table.jpg",
			size: "large",
			id: 5,
			linkUrl: "shop",
		},
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;