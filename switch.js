const Gpio = require('onoff').Gpio;
const debounce = 200;
const buttonMinus = new Gpio(4, 'in', 'both', {debounceTimeout: debounce});
const buttonPlus = new Gpio(14, 'in', 'both', {debounceTimeout: debounce});

buttonMinus.watch((err, value) => {
	console.log('Min');
	console.log(err, value);
});

buttonPlus.watch((err, value) => {
        console.log('Plus');
        console.log(err, value);
});
