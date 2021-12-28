import FoxLogo from '../../../assets/img/logos/foxSecondary.svg';
import { InlineLogoStyles } from './InlineLogo.styles';

function InlineLogo() {
	return (
		<InlineLogoStyles>
			<img src={FoxLogo} alt='FOXY Brand Logo' />
			<h2>FOXY</h2>
		</InlineLogoStyles>
	);
}

export default InlineLogo;
