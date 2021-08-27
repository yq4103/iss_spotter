const { nextISSTimesForMyLocation } = require("./iss_promised");
let { printPassTimes } = require("./iss_promised");

nextISSTimesForMyLocation().then((passTimes) => {
  printPassTimes(passTimes);
}).catch((error) => {
  console.log("It didn't work: ", error.message);
});
  

printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};