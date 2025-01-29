import styled from "styled-components";

export const Container = styled.div`
	width: 30%;
	padding: .8rem;
	margin: 1rem 0;
	border-radius: .7rem;
	text-align: center;
	justify-content: center;

	font-weight: 600;

	cursor: pointer;

	background-color: ${({ theme }) => theme.COLORS.PRIMARY_RED};
	color: ${({ theme }) => theme.COLORS.SECONDARY_BLACK};

`;
