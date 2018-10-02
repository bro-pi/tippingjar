const TM1637 = require("lepioo.tm1637"); //tentative filename, package tbd
const CLK = 21;
const DIO = 20;
const Display = new TM1637(CLK, DIO);

const Gpio = require('onoff').Gpio;
const debounce = 500;
const buttonMinus = new Gpio(4, 'in', 'falling', {debounceTimeout: debounce});
const buttonPlus = new Gpio(14, 'in', 'falling', {debounceTimeout: debounce});

const mfrc522 = require('mfrc522-rpi')
mfrc522.initWiringPi(0);
console.log("scanning...");
console.log("Please put chip or keycard in the antenna inductive zone!");
console.log("Press Ctrl-C to stop.");

setInterval(function() {
  mfrc522.reset();
  let response = mfrc522.findCard();

  if (!response.status) {
    return;
  }

  console.log('THANKS FOR PAYING')
  // Set counter and display to 0
  counter = 0;
  Display.show(counter);
}, 1500);

let counter = 0;

Display.show(counter);
buttonMinus.watch((err, value) => {
  counter--;
  if (counter < 1) {
    counter = 0;
  }
  Display.show(counter);
});

buttonPlus.watch((err, value) => {
  counter++;
  Display.show(counter);
});
