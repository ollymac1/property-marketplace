import { useNavigate, useLocation } from 'react-router-dom';
import { Footer, Nav, Links, Link } from './Navbar.style';
import { AiFillCompass } from 'react-icons/ai';
import { MdLocalOffer } from 'react-icons/md';
import { ImUser } from 'react-icons/im';

function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();

	// Setting active/inactive link colors
	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return 'primary'; // active link
		} else {
			return 'white'; // inactive link
		}
	};

	return (
		<Footer>
			<Nav>
				<Links>
					<Link color={pathMatchRoute('/')} onClick={() => navigate('/')}>
						<AiFillCompass />
						<p>Explore</p>
					</Link>
					<Link
						color={pathMatchRoute('/offers')}
						onClick={() => navigate('/offers')}
					>
						<MdLocalOffer />
						<p>Offers</p>
					</Link>
					<Link
						color={pathMatchRoute('/profile')}
						onClick={() => navigate('/profile')}
					>
						<ImUser />
						<p>Profile</p>
					</Link>
				</Links>
			</Nav>
		</Footer>
	);
}

export default Navbar;
