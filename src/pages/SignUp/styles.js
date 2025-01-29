import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: stretch;
	`;

export const Form = styled.form`
	padding: 0 120px;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_BLACK_BASE};
  align-content: center;

	> h1, a{
		color: ${({ theme }) => theme.COLORS.BACKGROUND_RED_BASE};
	}

	> h2, span{
		color: ${({ theme }) => theme.COLORS.SECONDARY_WHITE};
	}

	> h1{
		font-size: 3rem;
	}

	>h2{
		margin: 3rem 0;
		font-size: 2rem;
	}

	>span{
		font-size: .9rem;
	}

	> a{
		padding: 40px 120px;

		> svg{
			align-items: center;
			justify-content: center;
		}
	}
`;

export const Background = styled.div`
	flex: 1;
	background: url(${backgroundImg}) no-repeat center center;
	background-size: cover;
`;
