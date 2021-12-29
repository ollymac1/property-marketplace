import './style.css';
function Spinner() {
	return (
		<div className='ring-container'>
			<div className='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Spinner;
