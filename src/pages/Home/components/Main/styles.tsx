import styled from 'styled-components';

export const Container = styled.main`
	min-height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		flex-direction: row;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 493px;
`;

export const Hero = styled.img`
	width: 296px;
	height: 209px;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		width: 696px;
		height: 493px;
		margin-left: 80px;
	}
`;

export const Title = styled.h1`
	margin: 60px 48px 0 48px;
	text-align: center;
	font-family: ${(props) => props.theme.fontFamilies.heading};
	font-size: 24px;
	font-weight: ${(props) => props.theme.fontWeights.semi};
	line-height: 36px;
	color: ${(props) => props.theme.colors.white};

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		text-align: left;
		margin: 32px 118px 0 60px;
		font-size: 40px;
		line-height: 60px;
	}
`;

export const Description = styled.p`
	margin: 16px 35px 0 35px;
	text-align: center;
	font-family: ${(props) => props.theme.fontFamilies.body};
	font-size: 16px;
	font-weight: ${(props) => props.theme.fontWeights.normal};
	line-height: 24px;
	color: ${(props) => props.theme.colors.white};

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		text-align: left;
		margin: 24px 85px 0 60px;
		font-size: 18px;
		line-height: 27px;
	}
`;

export const Button = styled.button`
	margin-top: 24px;
	width: 60%;
	padding: 12px 75px;
	border-radius: 20px;
	border: none;
	font-family: ${(props) => props.theme.fontFamilies.heading};
	font-style: normal;
	font-weight: ${(props) => props.theme.fontWeights.normal};
	font-size: 12px;
	line-height: 18px;
	text-align: center;
	color: ${(props) => props.theme.colors.purple};

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		width: 200px;
		margin-left: 60px;
		margin-top: 24px;
		font-size: 18px;
		line-height: 27px;
		box-shadow: 2px 4px 9px 3px rgba(0, 0, 0, 0.258633);
		border-radius: 28px;
		height: 56px;
		padding: 0;
	}
`;
