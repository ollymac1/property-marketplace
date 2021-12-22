import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
//import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import { GlobalStyle } from './shared/globalStyle';
import { theme } from './shared/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<GlobalStyle />
				<Routes>
					<Route path='/' element={<Explore />} />
					<Route path='/offers' element={<Offers />} />
					<Route path='/profile' element={<SignIn />} />
					<Route path='/signIn' element={<SignIn />} />
					<Route path='/signUp' element={<SignUp />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
				<Navbar />
			</Router>
		</ThemeProvider>
	);
}

export default App;
