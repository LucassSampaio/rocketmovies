import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 1rem;
	margin: 1rem 0;
	border-radius: .7rem;
	text-align: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.COLORS.PRIMARY_RED};
	font-weight: 600;
	color: ${({ theme }) => theme.COLORS.SECONDARY_BLACK};
`;
