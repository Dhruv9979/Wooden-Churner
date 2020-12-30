import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

import {
    OptionsContainer,
    NavbarNav,
    ListItem,
    IconButton,
    Dropdown,
    OptionLink,
    OptionDiv,
} from './burger-menu.styles';

const BurgerMenu = ({ currentUser, signOutStart, closeMenu, open }) => {
    return (
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
    );
};

function Navbar({ children }) {
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

export default BurgerMenu;
