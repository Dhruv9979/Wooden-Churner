import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    color: #762522;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: background 500ms;
    &:hover {
        filter: brightness(2);
    }
`;

export const OptionsContainer = styled.nav`
    width: 55%;
    height: 100%;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const NavbarNav = styled.ul`
    list-style: none;
    display: flex;
`;

export const ListItem = styled.li`
    width: 70px;
`;

export const IconButton = styled(Link)`
    width: 50px;
    height: 50px;
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;

    &:hover {
        filter: brightness(1.2);
    }

    svg {
        fill: #762522;
        width: 50px;
        height: 50px;
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    z-index: 2;
    top: 70px;
    width: 200px;
    transform: translateX(-75%);
    background-color: #d6f5a4;
    border: 1px solid #474a4d;
    border-radius: 8px;
    padding: 1rem;
    overflow: hidden;
    transition: height 500ms ease;
`;

export const MenuItem = styled(Link)`
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: background 500ms;
    padding: 0.5rem;

    &:hover {
        background-color: #525357;
    }
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

OptionLink.displayName = 'OptionLink';

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;

OptionDiv.displayName = 'OptionDiv';
