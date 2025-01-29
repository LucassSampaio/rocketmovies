import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	background: ${({theme}) => theme.COLORS.BACKGROUND_BLACK_BASE};
	overflow-y: auto;
	padding-bottom: 100px;

	display: grid;
	grid-template-areas:
	"header"
	"main"
	"titleAdd"
	"movielist";
	box-sizing: content-box;

	> main{
		grid-area: main;
		padding: 30px 90px;

		align-items: center;
		color: ${({theme}) => theme.COLORS.SECONDARY_WHITE};
	}

`;

export const Title = styled.div`
	grid-area: titleAdd;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 10px ;
	align-items: center;
`;

export const Content = styled.div`
	grid-area: content;

	height: 70vh;
	background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK_BASE};
	border-radius: 10px;

`;

