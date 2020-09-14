// import React from "react";
// import { connect } from "react-redux";

// import { selectProduct } from "../../redux/collection/collection.selectors";

// import "./product-information.styles.scss";

// const ProductInformation = ({items}) => {
// 	console.log(items);
// 	return (
// 		<div className="product-info">
// 			<h2>A Rich way to use Almond oil.</h2>
// 			<p>
// 				<strong>
// 					The oil is processed through wooden churner in a traditional way (Lakdi Ghana)
// 					hence no Chemical process is done while extracting oil so it is Pure and
// 					Natural.
// 				</strong>
// 			</p>
// 			<ul>
// 				<li>Pour Generously on Dal Rice (Varan-Bhat.) Shira.</li>
// 				<li>
// 					Spread it on Khakra , Garam Garam Poli, Chapati, Roti, Fulkas or Various type of
// 					Parathas, Thalipeeth.
// 				</li>
// 				<li>Use this oil in various on type of Koshimbir.</li>
// 				<li>
// 					Pour Generously on various type of Chutneys Like – Shenga-Chutney (
// 					Groundnut-Chutney )
// 				</li>
// 				<li>Khobra-Lasoon-Chutney ( Coconut Garlic-Chutney )</li>
// 				<li>Javas-Chutney ( Flaxseed-Chutney )</li>
// 				<li>Karla-Chutney ( Niger-Chutney )</li>
// 				<li>
// 					Use it in salad dressing. Pour Generously on Various Salads Dressing for a Royal
// 					taste and with Nutritional Value.
// 				</li>
// 				<li>Use it in your Daily Nutritional Meal.</li>
// 			</ul>
// 			<p>
// 				<strong>Uses of Almond oil for skin.</strong>
// 			</p>
// 			<ul>
// 				<li>
// 					It Acts, Works as a moisturizer for Dry skin and it helps in reducing wrinkles.
// 				</li>
// 				<li>It helps in reducing dark circles.</li>
// 				<li>It helps in giving a glow to the skin.</li>
// 				<li>It helps in giving a younger and brighter skin naturally.</li>
// 			</ul>
// 			<p>
// 				<strong>Other</strong>
// 			</p>
// 			<ul>
// 				<li>The expiry of this product is for 6 months from packaging.</li>
// 				<li>
// 					We recommend to buy fresh oil every month, to get the best of the nutritional
// 					and health value.
// 				</li>
// 			</ul>
// 		</div>
// 	);
// };

// const mapStateToProps = (state, ownProps) => ({
// 	items: selectProduct(ownProps.match.params.productId)(state),
// });

// export default connect(mapStateToProps)(ProductInformation);


import React from "react";
import { connect } from "react-redux";

import { selectProduct } from "../../redux/collection/collection.selectors";

import "./product-information.styles.scss";

const ProductInformation = ({ items }) => {
	const { description } = items;
	console.log(description);
	return (
		<div className="product-info">
			{description}
		</div>
	);
};

export default (ProductInformation);