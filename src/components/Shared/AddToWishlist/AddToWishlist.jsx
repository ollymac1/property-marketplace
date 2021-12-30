import { useState } from 'react';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../../../config/firebase.config';
import { getAuth } from 'firebase/auth';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { StyledWishlist } from './AddToWishList.styles';
import { getUserWishlist } from '../../../utils/getUserWishlist';

function AddToWishlist({ id }) {
	const [wishlistActive, setWishlistActive] = useState(false);
	const [iconHover, setIconHover] = useState(false);
	const [wishlist, setWishlist] = useState([]);

	const auth = getAuth();

	const setUserWishlist = async () => {
		const userWishlist = await getUserWishlist(auth.currentUser.uid);
		setWishlist(userWishlist);
	};

	//TODO - Get the user wishlist from Firestore
	//TODO - If property ID exists in wishlist array
	//TODO - Set wishlistActive to TRUE

	const handleWishlist = async () => {
		console.log(id);
		if (auth.currentUser === null) {
			return toast.warning(
				'You need to be logged in to add property to your wishlist'
			);
		}
		const userRef = doc(db, 'users', auth.currentUser.uid);

		if (wishlistActive) {
			// Remove property from the user wishlist array in firestore

			await updateDoc(userRef, {
				wishlist: arrayRemove(id),
			});
			toast('💔 Removed from wishlist');
		} else {
			// Add property from the user wishlist array in firestore

			await updateDoc(userRef, {
				wishlist: arrayUnion(id),
			});
			toast('💛 Added to wishlist');
		}

		setWishlistActive(!wishlistActive);
	};

	return (
		<StyledWishlist
			onClick={handleWishlist}
			onMouseEnter={() => setIconHover(true)}
			onMouseLeave={() => setIconHover(false)}
		>
			{wishlistActive || iconHover ? (
				<AiFillHeart color={'#FBE106'} />
			) : (
				<AiOutlineHeart />
			)}
		</StyledWishlist>
	);
}

export default AddToWishlist;
