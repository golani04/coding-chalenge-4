const fs = require('fs');


fs.readFile('./input.txt', (err, data) => {
  if (err) return;

  data = data.toString().trim().split('\n');

  const totalWrappingPaper = data.reduce((sumOfPaper, dim) => {
    const [l, w, h] = dim.split('x').map(Number);
    const area = Math.min(l * w, w * h, h * l);
    // formula is 2*l*w + 2*w*h + 2*h*l + area of 2 smallest numbers
    // 2 * (l * w + w * h + h * l) => 2 * (w * (l + h) + h * l)
    return sumOfPaper += (2 * ( l * w + w * h + h * l ) + area);
  }, 0);

  const totalRibbon = data.reduce((sum, dim) => {
    const [l, w, h] = dim.split('x').map(Number);

    return sum += (Math.min(2 * (l + w), 2 * (h + w), 2 * (l + h)) + l * w * h);
  }, 0);

  console.log(totalWrappingPaper);
  console.log(totalRibbon);
});
