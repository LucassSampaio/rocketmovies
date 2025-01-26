import styled from "styled-components";

export const Container = styled.div`

	width: 100%;
	display: flex;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY };
	align-items: center;
	border-radius: 10px;
	margin-bottom: .7rem;

	> input {
		width: 100%;
		height: 30px;
		border: 0;
		background: transparent;

		padding-left: 12px;
		color: ${({ theme }) => theme.COLORS.SECONDARY_WHITE};

		&:placeholder {
			color: ${({ theme }) => theme.COLORS.SECONDARY_WHITE};
		}
	}

	padding: 1.2rem 0;
	justify-content: center;
	align-items: center;

	color: ${({ theme }) => theme.COLORS.SECONDARY_GRAY };

	> svg{
		margin-left: 1rem;
	}
	`;


