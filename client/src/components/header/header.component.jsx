import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    NavbarNav,
    ListItem,
    IconButton,
    Dropdown,
    OptionLink,
    OptionDiv,
} from './header.styles';

export const Header = ({ currentUser, hidden, signOutStart }) => {
    const [open, setOpen] = useState(false);
    const closeMenu = () => setOpen(!open);

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <Navbar>
                <CartIcon title="Cart" />
                <NavItem icon={<MenuIcon />} closeMenu={closeMenu} open={open}>
                    <DropdownMenu
                        currentUser={currentUser}
                        signOutStart={signOutStart}
                        closeMenu={closeMenu}
                    />
                </NavItem>
            </Navbar>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
};

function Navbar({children}) {
    return (
        <OptionsContainer>
            <NavbarNav>{children}</NavbarNav>
        </OptionsContainer>
    );
}

function NavItem({ icon, closeMenu, open, children }) {
    return (
        <ListItem>
            <IconButton to="#" onClick={closeMenu}>
                {icon}
            </IconButton>
            {open && children}
        </ListItem>
    );
}

function DropdownMenu({ currentUser, signOutStart, closeMenu }) {
    return (
        <Dropdown>
            <OptionLink to="/" onClick={closeMenu}>
                HOME
            </OptionLink>
            <OptionLink to="/shop" onClick={closeMenu}>
                ABOUT
            </OptionLink>
            <OptionLink to="/shop" onClick={closeMenu}>
                SHOP
            </OptionLink>
            <OptionLink to="/contact" onClick={closeMenu}>
                CONTACT
            </OptionLink>
            {currentUser && (
                <OptionLink to="/orders" onClick={closeMenu}>
                    MY ORDERS
                </OptionLink>
            )}
            {currentUser ? (
                <OptionDiv
                    onClick={() => {
                        signOutStart();
                        closeMenu();
                    }}
                >
                    SIGN OUT
                </OptionDiv>
            ) : (
                <OptionLink to="/signIn" onClick={closeMenu}>
                    SIGN IN
                </OptionLink>
            )}
        </Dropdown>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
