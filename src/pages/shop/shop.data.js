import AlmondOil from "../../images/Almond-Oil.png";
import AlmondFlour from "../../images/Almond-Flour.jpg";
import AlmondWalnutScrub from "../../images/Almond-Walnut-Scrub.jpg";
import AwalaGinger from "../../images/Awala-Ginger.jpg";
import BlackSesameOil from "../../images/Black-Sesame-Oil.png";
import CoconutFlour from "../../images/Coconut-Flour.jpg";
import CoconutOil from "../../images/Coconut-Oil.png";
import DivaTilOil from "../../images/Diva-Til-Oil.jpg";
import FlaxseedFlour from "../../images/Flaxseed-Flour.jpg";
import FlaxseedOil from "../../images/Flaxseed-Oil.png";
import GroundnutOil from "../../images/Groundnut-Oil.jpg";
import JaggeryPowder from "../../images/Jaggery-Powder.jpg";
import KardaiOil from "../../images/Kardi-Oil.png";
import MustardOil from "../../images/Mustard-Oil.png";
import RawSesameSeed from "../../images/Raw-Sesame-Seed.jpg";
import RoastedFlaxseedTurmeric from "../../images/Roasted-Flaxseed-Turmeric.jpg";
import RockSalt from "../../images/Rock-Salt.jpg";
import WalnutOil from "../../images/Walnut-Oil.jpg";
import WhiteSesameOil from "../../images/White-Sesame-Oil.png";

const SHOP_DATA = [
	{
		id: 1,
		title: "Oils",
		routeName: "oils",
		items: [
			{
				id: 1,
				name: "Almond Oil",
				imageUrl: AlmondOil,
				price: 130,
			},
			{
				id: 2,
				name: "Walnut Oil",
				imageUrl: WalnutOil,
				price: 130,
			},
			{
				id: 3,
				name: "Groundnut Oil",
				imageUrl: GroundnutOil,
				price: 190,
			},
			{
				id: 4,
				name: "Mustard Oil",
				imageUrl: MustardOil,
				price: 80,
			},
			{
				id: 5,
				name: "Coconut Oil",
				imageUrl: CoconutOil,
				price: 110,
			},
			{
				id: 6,
				name: "Flaxseed Oil",
				imageUrl: FlaxseedOil,
				price: 120,
			},
			{
				id: 7,
				name: "Black Sesame Oil",
				imageUrl: BlackSesameOil,
				price: 120,
			},
			{
				id: 8,
				name: "White Sesame Oil",
				imageUrl: WhiteSesameOil,
				price: 110,
			},
			{
				id: 9,
				name: "Diva Til Oil",
				imageUrl: DivaTilOil,
				price: 95,
			},
			{
				id: 10,
				name: "Kardai (Safflower) Oil",
				imageUrl: KardaiOil,
				price: 200,
			},
		],
	},
	{
		id: 2,
		title: "Scrubs",
		routeName: "scrubs",
		items: [
			{
				id: 11,
				name: "Almond and Walnut Scrub",
				imageUrl: AlmondWalnutScrub,
				price: 40,
			},
			{
				id: 12,
				name: "Coconut Scrub",
				imageUrl: AlmondWalnutScrub,
				price: 30,
			},
		],
	},
	{
		id: 3,
		title: "Flours",
		routeName: "flours",
		items: [
			{
				id: 13,
				name: "Almond Flour",
				imageUrl: AlmondFlour,
				price: 35,
			},
			{
				id: 14,
				name: "Coconut Flour",
				imageUrl: CoconutFlour,
				price: 25,
			},
			{
				id: 15,
				name: "Flaxseed Flour",
				imageUrl: FlaxseedFlour,
				price: 25,
			},
		],
	},
	{
		id: 4,
		title: "Other",
		routeName: "other",
		items: [
			{
				id: 16,
				name: "Awala Ginger",
				imageUrl: AwalaGinger,
				price: 25,
			},
			{
				id: 17,
				name: "Jaggery Powder",
				imageUrl: JaggeryPowder,
				price: 55,
			},
			{
				id: 18,
				name: "Raw Sesame Seeds",
				imageUrl: RawSesameSeed,
				price: 80,
			},
			{
				id: 19,
				name: "Roasted Flax Seed Turmeric",
				imageUrl: RoastedFlaxseedTurmeric,
				price: 45,
			},
			{
				id: 20,
				name: "Rock Salt",
				imageUrl: RockSalt,
				price: 50,
			},
		],
	},
];

export default SHOP_DATA;