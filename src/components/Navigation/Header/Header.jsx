import { useNavigate } from 'react-router-dom';
import {
	HeaderStyles,
	LogoContainer,
	SecondaryMenuStyles,
	SearchContainer,
} from './Header.style';
import { ReactComponent as Logo } from '../../../assets/img/logos/foxPrimary.svg';
import Nav from '../Nav/Nav';
import Search from '../../Shared/Search/Search';
import SecondaryMenu from '../SecondaryMenu/SecondaryMenu';

function Header() {
	const navigate = useNavigate();
	return (
		<>
			<HeaderStyles>
				<LogoContainer onClick={() => navigate('/')}>
					<Logo />
					<h3>Foxy</h3>
				</LogoContainer>
				<SearchContainer>
					<Search />
				</SearchContainer>
				<Nav />
			</HeaderStyles>
			<SecondaryMenuStyles>
				<SecondaryMenu />
			</SecondaryMenuStyles>
		</>
	);
}

export default Header;
