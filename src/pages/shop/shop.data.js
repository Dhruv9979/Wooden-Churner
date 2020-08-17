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
				price: 25,
			},
			{
				id: 2,
				name: "Walnut Oil",
				imageUrl: WalnutOil,
				price: 18,
			},
			{
				id: 3,
				name: "Groundnut Oil",
				imageUrl: GroundnutOil,
				price: 35,
			},
			{
				id: 4,
				name: "Mustard Oil",
				imageUrl: MustardOil,
				price: 25,
			},
			{
				id: 5,
				name: "Coconut Oil",
				imageUrl: CoconutOil,
				price: 18,
			},
			{
				id: 6,
				name: "Flaxseed Oil",
				imageUrl: FlaxseedOil,
				price: 18,
			},
			{
				id: 7,
				name: "Black Sesame Oil",
				imageUrl: BlackSesameOil,
				price: 14,
			},
			{
				id: 8,
				name: "White Sesame Oil",
				imageUrl: WhiteSesameOil,
				price: 16,
			},
			{
				id: 9,
				name: "Diva Til Oil",
				imageUrl: DivaTilOil,
				price: 16,
			},
			{
				id: 10,
				name: "Kardai (Safflower) Oil",
				imageUrl: KardaiOil,
				price: 16,
			},
		],
	},
	{
		id: 2,
		title: "Scrubs",
		routeName: "scrubs",
		items: [
			{
				id: 1,
				name: "Almond and Walnut Scrub",
				imageUrl: AlmondWalnutScrub,
				price: 220,
			},
			{
				id: 2,
				name: "Coconut Scrub",
				imageUrl: AlmondWalnutScrub,
				price: 280,
			},
		],
	},
	{
		id: 3,
		title: "Flours",
		routeName: "flours",
		items: [
			{
				id: 1,
				name: "Almond Flour",
				imageUrl: AlmondFlour,
				price: 125,
			},
			{
				id: 2,
				name: "Coconut Flour",
				imageUrl: CoconutFlour,
				price: 90,
			},
			{
				id: 3,
				name: "Flaxseed Flour",
				imageUrl: FlaxseedFlour,
				price: 90,
			},
		],
	},
	{
		id: 4,
		title: "Other",
		routeName: "other",
		items: [
			{
				id: 1,
				name: "Awala Ginger",
				imageUrl: AwalaGinger,
				price: 25,
			},
			{
				id: 2,
				name: "Jaggery Powder",
				imageUrl: JaggeryPowder,
				price: 20,
			},
			{
				id: 3,
				name: "Raw Sesame Seeds",
				imageUrl: RawSesameSeed,
				price: 80,
			},
			{
				id: 4,
				name: "Roasted Flax Seed Turmeric",
				imageUrl: RoastedFlaxseedTurmeric,
				price: 45,
			},
			{
				id: 5,
				name: "Rock Salt",
				imageUrl: RockSalt,
				price: 135,
			},
		],
	},
];

export default SHOP_DATA;