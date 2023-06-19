import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Container, Hero, Title, Description, Button, Column } from './styles';

const MobileLayout = (
	<Container>
		<Hero src="assets/images/illustration-mockups.svg" />
		<Title>Build The Community Your Fans Will Love</Title>
		<Description>
			Huddle re-imagines the way we build communities. You have a voice, but so
			does your audience. Create connections with yours users as you engage in
			genuine discussion.
		</Description>
		<Button>Register</Button>
	</Container>
);

const DesktopLayout = (
	<Container>
		<Column>
			<Hero src="assets/images/illustration-mockups.svg" />
		</Column>
		<Column>
			<Title>Build The Community Your Fans Will Love</Title>
			<Description>
				Huddle re-imagines the way we build communities. You have a voice, but
				so does your audience. Create connections with yours users as you engage
				in genuine discussion.
			</Description>
			<Button>Register</Button>
		</Column>
	</Container>
);

const Main = () => {
	const theme = useTheme();

	const [matches, setMatches] = useState(
		window.matchMedia(`(min-width: ${theme?.breakpoints.desktop})`).matches
	);

	useEffect(() => {
		window
			.matchMedia(`(min-width: ${theme?.breakpoints.desktop})`)
			.addEventListener('change', (e) => setMatches(e.matches));
	}, [theme]);

	// console.log('matches:', matches);

	return matches ? DesktopLayout : MobileLayout;
};

export default Main;
