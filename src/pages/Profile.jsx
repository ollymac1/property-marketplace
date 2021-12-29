import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

function Profile() {
	const [user, setUser] = useState(null);

	const auth = getAuth();
	useEffect(() => {
		setUser(auth.currentUser);
	}, []);

	return (
		<div>
			<h1> Profile Page</h1>
			{user ? <p>{user.displayName} is Logged in</p> : <p>Not Logged in </p>}
		</div>
	);
}

export default Profile;
