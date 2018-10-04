const fs = require('fs');



fs.readFile('./input.txt', (err, data) => {
  console.time('chalenge#4');
  // escape, if errored
  if (err) {
    console.error(err);
    return;
  }
  const whichFloor = { '(': 1, ')': -1 };

  data = data.toString().split('');
  let basement = null;

  const finalFloor = data.reduce((floor, whereToGo, index) => {
    // second chalenge
    if (floor < 0 && basement === null) {
      basement = index;
    }
    // first chalenge
    return floor += (whichFloor[whereToGo] || 0);
  }, 0);
  console.log(finalFloor, basement);
  console.timeEnd('chalenge#4');
});
