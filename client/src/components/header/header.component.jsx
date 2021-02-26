import React, { useState } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Waves } from '../../assets/waves-bottom.svg';

import {
    HeaderContainer,
    LogoContainer,
    WavesContainer,
    MenuContainer,
} from './header.styles';
import BurgerMenu from '../burger-menu/burger-menu.component';

export const Header = ({ currentUser, hidden, signOutStart }) => {
    const [open, setOpen] = useState(false);
    const closeMenu = () => setOpen(!open);

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>

            <MenuContainer>
                <BurgerMenu
                    currentUser={currentUser}
                    signOutStart={signOutStart}
                    closeMenu={closeMenu}
                    open={open}
                />

                {hidden ? null : <CartDropdown />}
            </MenuContainer>
            <WavesContainer>
                <Waves />
            </WavesContainer>
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
