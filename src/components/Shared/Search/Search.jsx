import { useState } from 'react';
import { InputGroup, Overlay } from './Search.styled';
import { BiSearchAlt } from 'react-icons/bi';

function Search() {
	const [searchActive, setSearchActive] = useState(false);
	const [input, setInput] = useState('');

	const handleSearchActive = () => {
		setSearchActive(!searchActive);
		setInput('');
	};

	const handleOnChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<>
			<InputGroup type='search' border={searchActive ? 'primary' : 'secondary'}>
				<input
					onFocus={handleSearchActive}
					onBlur={handleSearchActive}
					type='search'
					placeholder='Search for a property'
					value={input}
					onChange={handleOnChange}
				/>
				<button type='submit'>
					<BiSearchAlt />
				</button>
			</InputGroup>
			<Overlay display={searchActive ? 'inline' : 'none'} />
		</>
	);
}

export default Search;
