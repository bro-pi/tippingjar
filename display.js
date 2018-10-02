const TM1637 = require("lepioo.tm1637"); //tentative filename, package tbd

const CLK = 21;
const DIO = 20;

const Display = new TM1637(CLK, DIO);

Display.show(133788, true);

console.log('it works!');
