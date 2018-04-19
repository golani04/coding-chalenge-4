const fs = require('fs');


fs.readFile('./input.txt', (err, data) => {
  if (err) return;

  data = data.toString().trim(); // .split('\n');

  const directions = {
    '>': ['x', 1],
    '<': ['x', -1],
    '^': ['y', 1],
    'v': ['y', -1]
  };

  const coords = { x: 0, y: 0 };
  const houses = new Set([`${coords.x}x${coords.y}`]);

  Array.from(data).forEach(direction => {
    coords[directions[direction][0]] += directions[direction][1];
    houses.add(`${coords.x}x${coords.y}`);
  });

  console.log(houses.size);
  console.log('\n=== Part 2 ===\n');

  const coordsSanta = { x: 0, y: 0 };
  const coordsRoboSanta = { x: 0, y: 0 };
  const houses2 = new Set([`${coordsSanta.x}x${coordsSanta.y}`]);

  Array.from(data).forEach((direction, index) => {
    if (index % 2 === 0) {
      coordsSanta[directions[direction][0]] += directions[direction][1];
      houses2.add(`${coordsSanta.x}x${coordsSanta.y}`);
    } else {
      coordsRoboSanta[directions[direction][0]] += directions[direction][1];
      houses2.add(`${coordsRoboSanta.x}x${coordsRoboSanta.y}`);
    }
  });

  console.log(houses2.size);
});
