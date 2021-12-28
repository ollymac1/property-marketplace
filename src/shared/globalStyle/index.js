import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;  
}

body{
	background: ${({ theme }) => theme.colors.body};
	font-family: ${({ theme }) => theme.fonts.body};
	letter-spacing: 1px;
	
}



h1, h2, h3, h4, h5, h6{
	font-family: ${({ theme }) => theme.fonts.heading};
}


`;
