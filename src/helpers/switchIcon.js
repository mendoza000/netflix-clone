
export let switchIcon = (icon) => {
	setTimeout(function() {
		icon.current.setAttribute('name', 'download');
		icon.current.setAttribute('animation', '')
	}, 0);

	setTimeout(function() {
		icon.current.setAttribute('name', 'loader');
		icon.current.setAttribute('animation', 'spin')
	}, 3000);

	setTimeout(function() {
		icon.current.setAttribute('name', 'check');
		icon.current.setAttribute('animation', 'tada')
	}, 6000);

	setTimeout(function() {
		switchIcon()
	}, 9000);
}