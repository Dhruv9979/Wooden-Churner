import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as ShopIcon } from '../../assets/shop.svg';
import { ReactComponent as SignInIcon } from '../../assets/sign-in.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';
import { ReactComponent as AboutIcon } from '../../assets/about.svg';
import { ReactComponent as OrderIcon } from '../../assets/order.svg';

import {
    OptionsContainer,
    NavbarNav,
    ListItem,
    IconButton,
    Dropdown,
    OptionLink,
    OptionDiv,
    IconContainer,
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
    const signOut = () => {
        signOutStart();
        closeMenu();
    };

    function DropdownItem({
        toPage,
        closeMenu,
        signOut,
        leftIcon,
        link,
        children,
    }) {
        return (
            <>
                {link ? (
                    <OptionLink to={toPage} onClick={closeMenu}>
                        <IconContainer>{leftIcon}</IconContainer>
                        {children}
                    </OptionLink>
                ) : (
                    <OptionDiv onClick={signOut ? signOut : closeMenu}>
                        <IconContainer>{leftIcon}</IconContainer>
                        {children}
                    </OptionDiv>
                )}
            </>
        );
    }

    return (
        <Dropdown>
            <DropdownItem
                toPage="/"
                closeMenu={closeMenu}
                leftIcon={<HomeIcon />}
                link={true}
            >
                HOME
            </DropdownItem>
            <DropdownItem
                toPage="/shop"
                closeMenu={closeMenu}
                leftIcon={<AboutIcon />}
                link={true}
            >
                ABOUT
            </DropdownItem>
            <DropdownItem
                toPage="/shop"
                closeMenu={closeMenu}
                leftIcon={<ShopIcon />}
                link={true}
            >
                Shop
            </DropdownItem>
            <DropdownItem
                toPage="/contact"
                closeMenu={closeMenu}
                leftIcon={<PhoneIcon />}
                link={true}
            >
                Contact
            </DropdownItem>
            {currentUser && (
                <DropdownItem
                    toPage="/orders"
                    closeMenu={closeMenu}
                    leftIcon={<OrderIcon />}
                    link={true}
                >
                    MY ORDERS
                </DropdownItem>
            )}
            {currentUser ? (
                <DropdownItem
                    // onClick={() => {
                    //     signOutStart();
                    //     closeMenu();
                    // }}
                    signOut={signOut}
                    leftIcon={<SignInIcon />}
                    link={false}
                >
                    SIGN OUT
                </DropdownItem>
            ) : (
                <DropdownItem
                    toPage="/signIn"
                    closeMenu={closeMenu}
                    leftIcon={<SignInIcon />}
                    link={true}
                >
                    SIGN IN
                </DropdownItem>
            )}
        </Dropdown>
    );
}

export default BurgerMenu;
