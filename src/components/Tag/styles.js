import styled from "styled-components";

export const Container = styled.div`
	display: inline;
	/* align-items: center; */
	font-size: 10px;
	padding: 5px 12px;
	border-radius: 5px;
	border: 1px solid transparent;
	margin-right: 6px;
	background-color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK};
	color: ${({ theme }) => theme.COLORS.SECONDARY_GRAY};
`;
