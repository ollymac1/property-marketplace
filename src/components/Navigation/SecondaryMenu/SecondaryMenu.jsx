import { useNavigate } from 'react-router-dom';
import { MenuStyles } from './SecondaryMenu.styles';
import { secondaryLinks } from '../links';

function SecondaryMenu() {
	const navigate = useNavigate();
	return (
		<MenuStyles>
			{secondaryLinks.map((item, index) => (
				<li key={index} onClick={() => navigate(`${item.path}`)}>
					{item.title}
				</li>
			))}
		</MenuStyles>
	);
}

export default SecondaryMenu;
