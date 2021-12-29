import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './shared/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/theme';
import Footer from './components/Navigation/Footer/Footer';
import Header from './components//Navigation/Header/Header';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import Wishlist from './pages/Wishlist';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route path='/' element={<Explore />} />
					<Route path='/offers' element={<Offers />} />
					<Route path='/profile' element={<PrivateRoute />}>
						<Route path='/profile' element={<Profile />} />
					</Route>
					<Route path='/wishlist' element={<Wishlist />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
				<Footer />
			</Router>
			<ToastContainer />
		</ThemeProvider>
	);
}

export default App;
