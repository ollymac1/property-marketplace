import { AiFillCompass } from 'react-icons/ai';
import { MdLocalOffer } from 'react-icons/md';
import { ImUser } from 'react-icons/im';
import { RiHeart3Fill } from 'react-icons/ri';

// Main Navigation links
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

// Secondary Navigation links
export const secondaryLinks = [
	{
		title: 'For sale',
		path: '/category/buy',
	},

	{
		title: 'To rent',
		path: '/category/rent',
	},

	{
		title: 'House prices',
		path: '/',
	},

	{
		title: 'New homes',
		path: '/',
	},

	{
		title: 'News',
		path: '/',
	},

	{
		title: 'Find agents',
		path: '/',
	},
];
