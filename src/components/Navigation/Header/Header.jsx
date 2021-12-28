import { HeaderStyles, LogoContainer } from './Header.style';
import { ReactComponent as Logo } from '../../../assets/img/logos/foxPrimary.svg';
import Nav from '../Nav/Nav';

function Header() {
	return (
		<HeaderStyles>
			<LogoContainer>
				<Logo />
				<h3>Foxy</h3>
			</LogoContainer>
			<Nav />
		</HeaderStyles>
	);
}

export default Header;
