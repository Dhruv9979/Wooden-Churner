import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
	OptionDiv,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">
				ABOUT
			</OptionLink>
			<OptionLink to="/shop">
				SHOP
			</OptionLink>
			<OptionLink to="/shop">
				CONTACT
			</OptionLink>
			{currentUser ? (
				<OptionDiv onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionDiv>
			) : (
				<OptionLink to="/signIn">
					SIGN IN
				</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
