import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config';

export const getUserWishlist = async (uid) => {
	const docRef = doc(db, 'users', uid);

	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const wishlist = docSnap.data().wishlist;

		return wishlist;
	} else {
		// doc.data() will be undefined in this case
		console.log('No such document!');
	}
};
