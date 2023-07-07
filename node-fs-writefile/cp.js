import * as fs from 'node:fs/promises';

const from = process.argv[2];
const to = process.argv[3];

async function readAndWrite(fromUrl, toUrl) {
  try {
    const data = await fs.readFile(fromUrl, 'utf8');
    await fs.writeFile(toUrl, data);
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

if (from !== undefined && to !== undefined) {
  readAndWrite(from, to);
} else {
  console.log(
    'ERROR: Location not provided correctly, please specify a url from which you would like to copy, and a url you would like to copy to.'
  );
}
