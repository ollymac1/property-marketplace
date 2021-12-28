export const window = () => {
	return (window.onresize = displayWindowSize);
	return (window.onload = displayWindowSize);

	function displayWindowSize() {
		return window.innerWidth;
	}
};
