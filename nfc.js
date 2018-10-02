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

  console.log('THANKS FOR TIPPING')
  // Set counter and display to 0
}, 1500);

process.stdin.resume();
