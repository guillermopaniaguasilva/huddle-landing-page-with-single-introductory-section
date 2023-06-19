import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Container, Circle, Icon } from './styles';

const Footer = () => {
	return (
		<Container>
			<Circle>
				<Icon icon={faFacebookF} />
			</Circle>
			<Circle>
				<Icon icon={faTwitter} />
			</Circle>
			<Circle>
				<Icon icon={faInstagram} />
			</Circle>
		</Container>
	);
};

export default Footer;
