import { useState } from 'react';
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
import MainContainer from '../../components/Shared/MainContainer/MainContainer';
import {
	ProfileHeader,
	SignOutButton,
	ProfileDetails,
	ProfileDetailsHeader,
	ProfileDetailsForm,
	ButtonGroup,
} from './Profile.styles';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Profile() {
	const auth = getAuth();
	const [changeDetails, setChangeDetails] = useState(false);
	const [formData, setformData] = useState({
		name: auth.currentUser.displayName,
		email: auth.currentUser.email,
	});

	const { name, email } = formData;

	const navigate = useNavigate();

	const onSignOut = () => {
		auth.signOut();
		navigate('/');
	};

	const onSubmit = async () => {
		try {
			if (auth.currentUser.displayName !== name) {
				// Update Firebase profile
				await updateProfile(auth.currentUser, { displayName: name });

				//Update user in Firestore
				const userRef = doc(db, 'users', auth.currentUser.uid);
				await updateDoc(userRef, {
					name,
				});
			}

			if (auth.currentUser.email !== email) {
				// Update email profiles in Firebase
				await updateEmail(auth.currentUser, email);

				// Update email in Firestore
				const userRef = doc(db, 'users', auth.currentUser.uid);
				await updateDoc(userRef, {
					email,
				});
			}

			toast.success('Details successfully updated');
		} catch (error) {
			toast.error('Could not update profile details');
		}
	};

	const onChange = (e) => {
		setformData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	return (
		<MainContainer>
			<ProfileHeader>
				<h3>My Profile</h3>
				<SignOutButton type='button' onClick={onSignOut}>
					Sign Out
				</SignOutButton>
			</ProfileHeader>
			<ProfileDetails>
				<ProfileDetailsHeader>
					<p>Personal Details</p>
					<ButtonGroup>
						{changeDetails && (
							<button
								type='button'
								onClick={() => {
									setChangeDetails((prevState) => !prevState);
									setformData({
										name: auth.currentUser.displayName,
										email: auth.currentUser.email,
									});
								}}
							>
								Cancel Changes
							</button>
						)}

						<button
							type='button'
							onClick={() => {
								changeDetails && onSubmit();
								setChangeDetails((prevState) => !prevState);
							}}
						>
							{changeDetails ? 'Submit Changes' : 'Change'}
						</button>
					</ButtonGroup>
				</ProfileDetailsHeader>
				<ProfileDetailsForm>
					<input
						type='text'
						id='name'
						disabled={!changeDetails}
						value={name}
						onChange={onChange}
					></input>
					<input
						type='email'
						id='email'
						disabled={!changeDetails}
						value={email}
						onChange={onChange}
					></input>
				</ProfileDetailsForm>
			</ProfileDetails>
		</MainContainer>
	);
}

export default Profile;
