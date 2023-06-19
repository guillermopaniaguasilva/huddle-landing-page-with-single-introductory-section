import styled from 'styled-components';

export const Container = styled.main`
	min-height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Hero = styled.img`
	width: 296px;
	height: 209px;
`;

export const Title = styled.h1`
	margin: 60px 48px 0 48px;
	text-align: center;
	font-family: ${(props) => props.theme.fontFamilies.heading};
	font-size: 24px;
	font-weight: ${(props) => props.theme.fontWeights.semi};
	line-height: 36px;
	color: ${(props) => props.theme.colors.white};
`;

export const Description = styled.p`
	margin: 16px 35px 0 35px;
	text-align: center;
	font-family: ${(props) => props.theme.fontFamilies.body};
	font-size: 16px;
	font-weight: ${(props) => props.theme.fontWeights.normal};
	line-height: 24px;
	color: ${(props) => props.theme.colors.white};
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
`;
