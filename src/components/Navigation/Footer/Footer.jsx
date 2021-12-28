import { FooterStyles, SocketStyles } from './Footer.style';
import Nav from '../Nav/Nav';
import Socket from '../Socket/Socket';

function Footer() {
	return (
		<>
			<FooterStyles>
				<Nav />
			</FooterStyles>
			<SocketStyles>
				<Socket />
			</SocketStyles>
		</>
	);
}

export default Footer;
