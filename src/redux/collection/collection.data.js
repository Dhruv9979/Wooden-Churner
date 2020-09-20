// import ProductInformation from './product-description';

const PRODUCT_DATA = {
	almondoil: {
		id: 1,
		name: "Almond Oil",
		description: "Almond Oil",
		products: [
			{
				id: 1,
				name: "Almond Oil: 30 ml",
				imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
				price: 130,
			},
			{
				id: 2,
				name: "Almond Oil: 60 ml",
				imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
				price: 220,
			},
			{
				id: 3,
				name: "Almond Oil: 100 ml",
				imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
				price: 330,
			},
			{
				id: 4,
				name: "Almond Oil: 200 ml",
				imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
				price: 560,
			},
			{
				id: 5,
				name: "Almond Oil: 500 ml",
				imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
				price: 1300,
			},
			{
				id: 6,
				name: "Almond Oil: 1 litre",
				imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
				price: 2600,
			},
		],
	},
	walnutoil: {
		id: 2,
		name: "Walnut Oil",
		description: "Walnut Oil",
		products: [
			{
				id: 7,
				name: "Walnut Oil: 30 ml",
				imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
				price: 130,
			},
			{
				id: 8,
				name: "Walnut Oil: 60 ml",
				imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
				price: 220,
			},
			{
				id: 9,
				name: "Walnut Oil: 100 ml",
				imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
				price: 330,
			},
			{
				id: 10,
				name: "Walnut Oil: 200 ml",
				imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
				price: 560,
			},
			{
				id: 11,
				name: "Walnut Oil: 500 ml",
				imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
				price: 1300,
			},
			{
				id: 12,
				name: "Walnut Oil: 1 litre",
				imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
				price: 2600,
			},
		],
	},
	groundnutoil: {
		id: 3,
		name: "Groundnut Oil",
		description: "Ground Oil",
		products: [
			{
				id: 13,
				name: "Groundnut Oil: 1 litre",
				imageUrl: "https://i.ibb.co/8z8DvY6/Groundnut-Oil.jpg",
				price: 190,
			},
			{
				id: 14,
				name: "Groundnut Oil: 5 litres",
				imageUrl: "https://i.ibb.co/8z8DvY6/Groundnut-Oil.jpg",
				price: 900,
			},
			{
				id: 15,
				name: "Groundnut Oil: 15 litres",
				imageUrl: "https://i.ibb.co/8z8DvY6/Groundnut-Oil.jpg",
				price: 2300,
			},
		],
	},
	mustardoil: {
		id: 4,
		name: "Mustard Oil",
		description: "Mustard Oil",
		products: [
			{
				id: 16,
				name: "Mustard Oil: 200 ml",
				imageUrl: "https://i.ibb.co/c1bkZPh/Mustard-Oil.png",
				price: 80,
			},
			{
				id: 17,
				name: "Mustard Oil: 500 ml",
				imageUrl: "https://i.ibb.co/c1bkZPh/Mustard-Oil.png",
				price: 130,
			},
			{
				id: 18,
				name: "Mustard Oil: 1 litre",
				imageUrl: "https://i.ibb.co/c1bkZPh/Mustard-Oil.png",
				price: 190,
			},
		],
	},
	coconutoil: {
		id: 5,
		name: "Coconut Oil",
		description: "Coconut Oil",
		products: [
			{
				id: 19,
				name: "Coconut Oil: 200 ml",
				imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
				price: 110,
			},
			{
				id: 20,
				name: "Coconut Oil: 500 ml",
				imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
				price: 180,
			},
			{
				id: 21,
				name: "Coconut Oil: 1 litre",
				imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
				price: 320,
			},
			{
				id: 22,
				name: "Coconut Oil: 5 litres",
				imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
				price: 1525,
			},
		],
	},
	flaxseedoil: {
		id: 6,
		name: "Flaxseed Oil",
		description: "Flaxseed Oil",
		products: [
			{
				id: 23,
				name: "Flaxseed Oil: 200 ml",
				imageUrl: "https://i.ibb.co/Xz8MgDY/Flaxseed-Oil.png",
				price: 120,
			},
			{
				id: 24,
				name: "Flaxseed Oil: 500 ml",
				imageUrl: "https://i.ibb.co/Xz8MgDY/Flaxseed-Oil.png",
				price: 200,
			},
		],
	},
	blacktiloil: {
		id: 7,
		name: "Black Til (Sesame) Oil",
		description: "Black Til Oil",
		products: [
			{
				id: 25,
				name: "Black Til (Sesame) Oil: 200 ml",
				imageUrl: "https://i.ibb.co/GTW0BDQ/Black-Sesame-Oil.png",
				price: 120,
			},
		],
	},
	whitetiloil: {
		id: 8,
		name: "White Til (Sesame) Oil",
		description: "White Til Oil",
		products: [
			{
				id: 26,
				name: "White Til (Sesame) Oil: 200 ml",
				imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
				price: 110,
			},
			{
				id: 27,
				name: "White Til (Sesame) Oil: 500 ml",
				imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
				price: 170,
			},
			{
				id: 28,
				name: "White Til (Sesame) Oil: 1 litre",
				imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
				price: 300,
			},
			{
				id: 29,
				name: "White Til (Sesame) Oil: 5 litres",
				imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
				price: 1400,
			},
			{
				id: 30,
				name: "White Til (Sesame) Oil: 15 litres",
				imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
				price: 3520,
			},
		],
	},
	divatiloil: {
		id: 9,
		name: "Diva Til Oil",
		description: "Diva Til Oil",
		products: [
			{
				id: 31,
				name: "Diva Til (Sesame) Oil: 500 ml",
				imageUrl: "https://i.ibb.co/VLPzqLL/Diva-Til-Oil.jpg",
				price: 95,
			},
			{
				id: 32,
				name: "Diva Til (Sesame) Oil: 1 litre",
				imageUrl: "https://i.ibb.co/VLPzqLL/Diva-Til-Oil.jpg",
				price: 180,
			},
		],
	},
	kardaioil: {
		id: 10,
		name: "Kardai (Safflower) Oil",
		description: "Kardai Oil",
		products: [
			{
				id: 33,
				name: "Kardai (Safflower) Oil: 1 litre",
				imageUrl: "https://i.ibb.co/880spJS/Kardi-Oil.png",
				price: 200,
			},
			{
				id: 34,
				name: "Kardai (Safflower) Oil: 5 litres",
				imageUrl: "https://i.ibb.co/880spJS/Kardi-Oil.png",
				price: 950,
			},
			{
				id: 35,
				name: "Kardai (Safflower) Oil: 15 litres",
				imageUrl: "https://i.ibb.co/880spJS/Kardi-Oil.png",
				price: 2350,
			},
		],
	},
	almondandwalnutscrub: {
		id: 11,
		name: "Almond and Walnut Scrub",
		description: "Almond and Walnut Scrub",
		products: [
			{
				id: 36,
				name: "Almond and Walnut Scrub: 100 grams",
				imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
				price: 40,
			},
		],
	},
	coconutscrub: {
		id: 12,
		name: "Coconut Scrub",
		description: "Coconut Scrub",
		products: [
			{
				id: 37,
				name: "Coconut Scrub: 100 grams",
				imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
				price: 30,
			},
		],
	},
	almondflour: {
		id: 13,
		name: "Almond Flour",
		description: "Almond Flour",
		products: [
			{
				id: 38,
				name: "Almond Flour: 200 grams",
				imageUrl: "https://i.ibb.co/jHbfZH1/Almond-Flour.jpg",
				price: 35,
			},
			{
				id: 39,
				name: "Almond Flour: 500 grams",
				imageUrl: "https://i.ibb.co/jHbfZH1/Almond-Flour.jpg",
				price: 75,
			},
		],
	},
	coconutflour: {
		id: 14,
		name: "Coconut Flour",
		description: "Coconut Flour",
		products: [
			{
				id: 40,
				name: "Coconut Flour: 200 grams",
				imageUrl: "https://i.ibb.co/bX6s51n/Coconut-Flour.jpg",
				price: 25,
			},
		],
	},
	flaxseedflour: {
		id: 15,
		name: "Flaxseed Flour",
		description: "Flaxseed Flour",
		products: [
			{
				id: 41,
				name: "Flaxseed Flour: 200 grams",
				imageUrl: "https://i.ibb.co/p45fT9B/Flaxseed-Flour.jpg",
				price: 25,
			},
		],
	},
	awalaginger: {
		id: 16,
		name: "Awala Ginger",
		description: "Awala Ginger",
		products: [
			{
				id: 42,
				name: "Awala Ginger: 100 grams",
				imageUrl: "https://i.ibb.co/5Mj06jn/Awala-Ginger.jpg",
				price: 75,
			},
		],
	},
	jaggerypowder: {
		id: 17,
		name: "Jaggery Powder",
		description: "Jaggery Powder",
		products: [
			{
				id: 43,
				name: "Jaggery Powder: 500 grams",
				imageUrl: "https://i.ibb.co/SQLqvkK/Jaggery-Powder.jpg",
				price: 55,
			},
			{
				id: 44,
				name: "Jaggery Powder: 700 grams",
				imageUrl: "https://i.ibb.co/SQLqvkK/Jaggery-Powder.jpg",
				price: 80,
			},
		],
	},
	rawsesameseeds: {
		id: 18,
		name: "Raw Sesame Seeds",
		description: "Raw Sesame Seeds",
		products: [
			{
				id: 45,
				name: "Raw Sesame Seeds: 100 grams",
				imageUrl: "https://i.ibb.co/yWfN41n/Raw-Sesame-Seed.jpg",
				price: 30,
			},
			{
				id: 46,
				name: "Raw Sesame Seeds: 200 grams",
				imageUrl: "https://i.ibb.co/yWfN41n/Raw-Sesame-Seed.jpg",
				price: 60,
			},
			{
				id: 47,
				name: "Raw Sesame Seeds: 500 grams",
				imageUrl: "https://i.ibb.co/yWfN41n/Raw-Sesame-Seed.jpg",
				price: 120,
			},
		],
	},
	roastedflaxseedturmeric: {
		id: 19,
		name: "Roasted Flax Seed Turmeric",
		description: "Roasted Flaxseed Turmeric",
		products: [
			{
				id: 48,
				name: "Roasted Flax Seed Turmeric: 100 grams",
				imageUrl: "https://i.ibb.co/CHb8rhf/Roasted-Flaxseed-Turmeric.jpg",
				price: 65,
			},
		],
	},
	rocksalt: {
		id: 20,
		name: "Rock Salt (Saindhav)",
		description: "Rock Salt",
		products: [
			{
				id: 49,
				name: "Rock Salt: 500 grams",
				imageUrl: "https://i.ibb.co/xH2k4ks/Rock-Salt.jpg",
				price: 50,
			},
			{
				id: 50,
				name: "Rock Salt: 1 Kilogram",
				imageUrl: "https://i.ibb.co/xH2k4ks/Rock-Salt.jpg",
				price: 90,
			},
		],
	},
};

export default PRODUCT_DATA;