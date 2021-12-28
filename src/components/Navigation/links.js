import { AiFillCompass } from 'react-icons/ai';
import { MdLocalOffer } from 'react-icons/md';
import { ImUser } from 'react-icons/im';
import { RiHeart3Fill } from 'react-icons/ri';

// Navigation links
export const links = [
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
