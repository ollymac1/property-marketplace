import { useNavigate, useLocation } from 'react-router-dom';
import { Footer, Nav, Links, Link } from './Navbar.style';
import { AiFillCompass } from 'react-icons/ai';
import { MdLocalOffer } from 'react-icons/md';
import { ImUser } from 'react-icons/im';
import { RiHeart3Fill } from 'react-icons/ri';

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

	// Navigation links
	const links = [
		{
			title: 'explore',
			path: '/',
			icon: <AiFillCompass />,
		},
		{
			title: 'offers',
			path: '/offers',
			icon: <MdLocalOffer />,
		},
		{
			title: 'wishlist',
			path: '/wishlist',
			icon: <RiHeart3Fill />,
		},
		{
			title: 'profile',
			path: '/profile',
			icon: <ImUser />,
		},
	];

	return (
		<Footer>
			<Nav>
				<Links>
					{links.map((item) => (
						<Link
							color={pathMatchRoute(`${item.path}`)}
							onClick={() => navigate(`${item.path}`)}
						>
							{item.icon}
							<p>{item.title}</p>
						</Link>
					))}
				</Links>
			</Nav>
		</Footer>
	);
}

export default Navbar;
