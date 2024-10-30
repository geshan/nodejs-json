import { readFile } from 'fs/promises';

try {
  const data = JSON.parse(await readFile('billionares-2023.json', 'utf8'));
  console.log(data[1]); //Elon Musk's data
} catch (err) {
  console.error(`Error reading JSON file: ${err}`);
}
