const fs = require('fs');


fs.readFile('./input.txt', 'utf-8', (err, data) => {
  if (err) return;

  const sideLength = 1000;
  let grid = new Array(sideLength * sideLength).fill(false);
  data = data.trim().split('\n');

  data.forEach(str => {
    let coords = str.match(/(toggle|turn on|turn off) (\d+),(\d+) through (\d+),(\d+)/);
    let command = coords[1];
    let [x0, y0, x1, y1] = coords.slice(2, 6).map(Number);

    for (let i = x0; i <= x1; i++) {
      for (let j = y0; j <= y1; j++) {
        let index = sideLength * i + j;
        switch (command) {
          case 'toggle':
            grid[index] = !grid[index];
            break;
          case 'turn on':
            grid[index] = true;
            break;
          case 'turn off':
            grid[index] = false;
            break;
        }
      }
    }
  });

  console.log(grid.filter(lamp => lamp).length);
  console.log('=== Part 2 ===');

  let grid1 = new Array(sideLength * sideLength).fill(0);

  data.forEach(str => {
    let coords = str.match(/(toggle|turn on|turn off) (\d+),(\d+) through (\d+),(\d+)/);
    let command = coords[1];
    let [x0, y0, x1, y1] = coords.slice(2, 6).map(Number);

    for (let i = x0; i <= x1; i++) {
      for (let j = y0; j <= y1; j++) {
        let index = sideLength * i + j;
        switch (command) {
          case 'toggle':
            grid1[index] += 2;
            break;
          case 'turn on':
            grid1[index] += 1;
            break;
          case 'turn off':
            grid1[index] = grid1[index] === 0 ? grid1[index] : grid1[index] - 1;
            break;
        }
      }
    }
  });
  //
  let brightness = grid1.reduce((total, bright) => total + bright, 0);
  console.log(brightness);
});
