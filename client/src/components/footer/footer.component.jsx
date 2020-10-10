import React from "react";
import { FooterContainer, VegetarianImg } from "./footer.styles";

function Footer() {
	return (
		<FooterContainer>
			All our products are pure vegetarian
			<VegetarianImg src={"https://i.ibb.co/DgS6wvV/vegetarian.png"} />
			<br /> <br />
			Copyright &copy; 2020 Shree Ramkrishna Oil Mills | All Rights Reserved <br />
			<br /> Privacy Policy | Return & Refund Policy
		</FooterContainer>
	);
}

export default Footer;
