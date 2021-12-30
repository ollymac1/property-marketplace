import { toast } from 'react-toastify';
import { SocialButtonStyled } from './SocialButton.styles';

function SocialButton({ text, icon, onClick, children }) {
	const handleOnClick = () => {
		toast.warning('Sorry to disappoint, OAuth will be added soon!');
	};
	return (
		<SocialButtonStyled onClick={handleOnClick}>
			<img src={icon} alt='' /> <p>{text}</p>
		</SocialButtonStyled>
	);
}

export default SocialButton;
