const script = require('./data/script.js');
const pools = require('./data/pools.js');

console.log(' ');
console.log(`Good ${script.getTheRelativeTime()}, and Happy ${script.getTheDay()}!`);
console.log(' ');
console.log('Lets start off with a joke, shall we!');
console.log(' ');
console.log(script.tellAJoke());
console.log(' ');
console.log(script.insertJokeTrans());
console.log(' ');
console.log(`Anyway, Just in case you need to hear it, ${script.sayACompliment()}`);
console.log(' ');
console.log(script.sayFarewell());
