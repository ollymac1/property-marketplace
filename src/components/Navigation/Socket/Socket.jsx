import {
	SocketContainer,
	SocialContainer,
	CopyrightContainer,
	NoticeContainer,
} from './Socket.style';
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { BsInstagram, BsPinterest } from 'react-icons/bs';
import { SiTwitter } from 'react-icons/si';

function Socket() {
	const currentYear = new Date().getFullYear();

	return (
		<SocketContainer>
			<SocialContainer>
				<AiFillFacebook />
				<SiTwitter />
				<AiFillLinkedin />
				<BsInstagram />
				<AiFillYoutube />
				<BsPinterest />
			</SocialContainer>
			<NoticeContainer>
				<p>
					Our website is completely free for you to use but we may receive a
					commission from some of the companies we link to on the site.
				</p>
			</NoticeContainer>
			<CopyrightContainer>
				<p>© {currentYear} FOXY13.com Limited. All rights reserved.</p>
			</CopyrightContainer>
		</SocketContainer>
	);
}

export default Socket;
