import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
  height: 70px;
	grid-area: header;
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: space-around;

	background-color: ${({ theme}) => theme.COLORS.BACKGROUND_BLACK_BASE};
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${({ theme}) => theme.COLORS.SECONDARY_GRAY};

	padding: 0 10px;

	>h1{
		color: ${({theme}) => theme.COLORS.PRIMARY_RED};
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	> img{
		width: 50px;
    height: 50px;
    border-radius: 50%;
	}

	> div{
		display: flex;
		flex-direction: column;
		align-items: end;
		margin-right: 10px;
		line-height: 20px;

		> strong{
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.SECONDARY_WHITE};
    }

		> span{
			font-size: 14px;
      color: ${({theme}) => theme.COLORS.SECONDARY_GRAY};
    }
	}
`;
