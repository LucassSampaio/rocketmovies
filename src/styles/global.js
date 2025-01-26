import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
		color: ${({ theme }) => theme.COLORS.WHITE};
		-webkit-font-smoothing: antialiased;
	}

	body, input, button, textarea{
		font-family: 'Roboto Slab', serif;
		font-size: 1rem;
	}
	a {
		text-decoration: none;
	}

	p {
		line-height: 1.5;
	}

	@media screen and (max-width: 600px) {
		h1 {
			font-size: 1.5rem;
		}
	}
  `;
