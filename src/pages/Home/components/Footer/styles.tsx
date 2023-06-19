import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.footer`
	display: flex;
	justify-content: center;
	min-height: 10vh;
	margin-top: 64px;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		justify-content: flex-end;
		margin-right: 80px;
	}
`;

export const Circle = styled.div`
	border: 1px solid ${(props) => props.theme.colors.white};
	width: 30px;
	height: 30px;
	display: flex;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	margin-right: 12px;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		&:hover {
			cursor: pointer;
			border-color: ${(props) => props.theme.colors.softMagenta};

			& svg {
				color: ${(props) => props.theme.colors.softMagenta};
			}
		}
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	color: ${(props) => props.theme.colors.white};
`;
