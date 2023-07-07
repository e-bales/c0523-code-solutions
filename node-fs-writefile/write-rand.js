import * as fs from 'node:fs/promises';

async function writeNum() {
  try {
    const number = String(Math.random()) + '\n';
    await fs.writeFile('random.txt', number);
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

writeNum();
