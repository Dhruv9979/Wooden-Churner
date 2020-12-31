import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', serif;
        padding: 10px 40px;
        overflow-x:hidden;

        @media screen and (max-width: 800px) {
			padding: 10px;
		}
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;
