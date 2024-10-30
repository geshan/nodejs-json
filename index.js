import { readFile } from 'node:fs/promises';

try {
  const data = JSON.parse(await readFile('billionaires-2023.json', 'utf8'));
  console.log(data[1]); //Elon Musk's data
} catch (err) {
  console.error(`Error reading JSON file: ${err}`);
}
