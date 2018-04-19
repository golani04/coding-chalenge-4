const crypto = require('crypto');
const key = 'yzbqklnj';

let startnumber = 0;
let md5 = '';
console.time('md5number');
while (!(md5.slice(0, 5) === '00000' || startnumber === 2 ** 1024)) {
  startnumber++;
  md5 = crypto.createHash('md5').update(`${key}${startnumber}`).digest("hex");
}
console.timeEnd('md5number');
console.log(startnumber, md5);

console.time('md5number2');
startnumber = 0;
md5 = '';
while (!(md5.slice(0, 6) === '000000' || startnumber === 2 ** 1024)) {
  startnumber++;
  md5 = crypto.createHash('md5').update(`${key}${startnumber}`).digest("hex");
}
console.timeEnd('md5number2'); // 39s
console.log(startnumber, md5); // number 9962624
