const ON_COLOR = '#ec4543';
const OFF_COLOR = '#0e990e';

const ON_CLASS = 'on-light';
const OFF_CLASS = 'off-light';

let color_value = OFF_CLASS;

const switchLight = () => {
	const outer_circle = document.getElementById('outer_circle');
	const inner_slant = document.getElementById('inner-slant');

	const bulb = document.getElementById('bulb');

	if (color_value === OFF_CLASS) {
		outer_circle.classList.remove(OFF_CLASS);
		outer_circle.classList.add(ON_CLASS);

		inner_slant.classList.remove(OFF_CLASS);
		inner_slant.classList.add(ON_CLASS);

		setTimeout(() => {
			document.documentElement.style.setProperty(
				'--bulb-before-shadow',
				'0px 20px 90px 5px yellow, 0px 100px 90px 20px yellow, 0px 180px 90px 30px yellow, 0px 270px 90px 50px yellow, 0px 320px 30px 80px yellow'
			);
		}, 1000);

		color_value = ON_CLASS;
	} else {
		outer_circle.classList.remove(ON_CLASS);
		outer_circle.classList.add(OFF_CLASS);

		inner_slant.classList.remove(ON_CLASS);
		inner_slant.classList.add(OFF_CLASS);

		document.documentElement.style.setProperty('--bulb-before-width', '0');
		document.documentElement.style.setProperty('--bulb-before-height', '0');
		document.documentElement.style.setProperty(
			'--bulb-before-shadow',
			'inset 0 0 2000px rgba(255, 255, 255, 0.9)'
		);
		
		color_value = OFF_CLASS;
	}

	return false;
};
