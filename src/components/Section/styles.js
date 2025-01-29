import styled from "styled-components";

export const Container = styled.div`
	padding: 30px;
	overflow-y: hidden;
	background-color: ${({theme}) =>theme.COLORS.BACKGROUND_RED_BASE};
	border-radius: 15px;
	margin-bottom: 20px;

	> h2 {
		color: ${({theme}) => theme.COLORS.SECONDARY_WHITE};
		font-size: 24px;
		font-weight: 900;
  }

	> span{
		display: flex;
		color: ${({theme}) => theme.COLORS.SECONDARY_GRAY};
    font-size: 12px;
		margin-bottom: 10px;
  }

	> p {
		height: 100px;
		font-size: 14px;
		overflow-y: hidden;
		text-align: justify;
	}

	>footer{
		width: 100%;
		display: flex;
		margin-top: 15px;
	}
`;
