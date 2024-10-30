import { readJsonSync } from 'fs-extra/esm';

try {
  const data = readJsonSync('billionares-2023.json');
  console.log(data[1]); // Elon Musk's data
}
catch (err) {
  console.error(`Error reading JSON file: ${err}`);
}