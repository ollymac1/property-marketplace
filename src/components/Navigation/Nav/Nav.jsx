import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavStyles, Links, Link } from './Nav.style';
import { links } from '../links';

function Nav() {
	const navigate = useNavigate();
	const location = useLocation();

	// Set window size dynamically in statecfor style purposes
	const [screenSize, setScreenSize] = useState({
		dynamicWidth: window.innerWidth,
		dynamicHeight: window.innerHeight,
	});

	const setDimension = () => {
		setScreenSize({
			dynamicWidth: window.innerWidth,
			dynamicHeight: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener('resize', setDimension);

		return () => {
			window.removeEventListener('resize', setDimension);
		};
	}, [screenSize]);

	// Setting active/inactive link colors
	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			if (screenSize.dynamicWidth < 1100) {
				return 'secondary'; // active link
			} else {
				return 'primary'; // active link
			}
		} else {
			if (screenSize.dynamicWidth < 1100) {
				return 'secondary50'; // inactive link
			} else {
				return 'white'; // inactive link
			}
		}
	};

	return (
		<NavStyles>
			<Links>
				{links.map((item, index) => (
					<Link
						color={pathMatchRoute(`${item.path}`)}
						onClick={() => navigate(`${item.path}`)}
						key={index}
					>
						{item.icon}
						<p>{item.title}</p>
					</Link>
				))}
			</Links>
		</NavStyles>
	);
}

export default Nav;
