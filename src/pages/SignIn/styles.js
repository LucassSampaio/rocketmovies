import styled from 'styled-components';
import backgroundImg from "../../assets/signin.png";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: stretch;
	`;

export const Form = styled.form`
	padding: 0 120px;
	background-color: ${({ theme}) => theme.COLORS.BACKGROUND_BLACK_BASE};
	align-content: center;

	>h1,a{
		color: ${({ theme }) => theme.COLORS.PRIMARY_RED};
	}

	> h2, span{
		color: ${({ theme }) => theme.COLORS.SECONDARY_WHITE};
	}

	> h1{
		font-size: 3rem;
	}

	> h2{
		margin: 3rem 0;
	}

	> span{
		font-size: .9rem;
	}

	> a{
		padding: 0 120px;
		cursor: pointer;
	}
`;

export const Background = styled.div`
	flex: 1;
	background: url(${backgroundImg}) no-repeat center center;
	background-size: cover;
`;
