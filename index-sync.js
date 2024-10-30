import { readFileSync } from 'node:fs';

try {
  const data = JSON.parse(readFileSync('billionares-2023.json', 'utf8'));
  console.log(data[1]); // Elon Musk's data
}
catch (err) {
  console.error(`Error reading JSON file: ${err}`);
}
