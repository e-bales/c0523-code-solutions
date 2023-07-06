import * as fs from 'node:fs/promises';

async function readfile() {
  try {
    const contents = await fs.readFile('./dijkstra.txt', 'utf8');
    console.log(contents);
  } catch (error) {
    console.log('Error caught:', error);
  }
}

readfile();
