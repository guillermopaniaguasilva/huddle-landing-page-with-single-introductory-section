import styled from 'styled-components';

export const Container = styled.header`
	padding: 38px 0 70px 40px;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		padding-left: 80px;
	}
`;

export const Logo = styled.img`
	width: 120px;
`;
