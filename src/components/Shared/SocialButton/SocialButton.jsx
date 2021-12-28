import { SocialButtonStyled } from './SocialButton.styles';

function SocialButton({ text, icon, onClick, children }) {
	return (
		<SocialButtonStyled>
			<img src={icon} alt='' /> <p>{text}</p>
		</SocialButtonStyled>
	);
}

export default SocialButton;
