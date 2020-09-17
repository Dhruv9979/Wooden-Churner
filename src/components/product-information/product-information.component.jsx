import React from "react";

import {ProductInfoContainer} from "./product-information.styles";

const ProductInformation = ({ description }) => {
	const { h2 } = description;

	return (
		<ProductInfoContainer>
			<h2>{h2}</h2>
			{/* description.map((i) =>  */}
			{/* description.map(( i ) => (
			{ <p>
					<strong>{i.p}</strong>
				</p>
				{i.li.map((j) => (
					<li> {j} </li>
				))}
			 ) */}

			{Object.entries(description).map(([key, val]) => (
				<p>
					<strong>{val.p}</strong>
					<li>{val.li}</li>
				</p>
			))}

			{/* <p>
					<strong>{key1.p}</strong>
				</p>
				{key1.li.map((i) => (
					<li> {i} </li>
				))}
			 */}
		</ProductInfoContainer>
	);
};

export default ProductInformation;