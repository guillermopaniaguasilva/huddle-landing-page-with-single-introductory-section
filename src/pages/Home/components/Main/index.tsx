import { Container, Hero, Title, Description, Button } from './styles';

const Main = () => {
	return (
		<Container>
			<Hero src="assets/images/illustration-mockups.svg" />
			<Title>Build The Community Your Fans Will Love</Title>
			<Description>
				Huddle re-imagines the way we build communities. You have a voice, but
				so does your audience. Create connections with yours users as you engage
				in genuine discussion.
			</Description>
			<Button>Register</Button>
		</Container>
	);
};

export default Main;
