import { DefaultTheme } from 'styled-components';
import uiTheme, {
	breakpoints,
	colors,
	fontFamilies,
	fontWeights,
} from './uiTheme';

declare module 'styled-components' {
	export interface DefaultTheme {
		ui: typeof uiTheme;
		breakpoints: {
			mobile: string;
			desktop: string;
		};
		colors: {
			white: string;
			violet: string;
			softMagenta: string;
			purple: string;
		};
		fontFamilies: {
			heading: string;
			body: string;
		};
		fontWeights: {
			normal: number;
			semi: number;
		};
	}
}

const ui = uiTheme;

const theme: DefaultTheme = {
	ui,
	breakpoints,
	colors,
	fontFamilies,
	fontWeights,
};

export default theme;
