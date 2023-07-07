import * as fs from 'node:fs/promises';

const url = process.argv[2];

async function readAny(fileUrl) {
  try {
    const contents = await fs.readFile(fileUrl, 'utf8');
    console.log(contents);
  } catch (error) {
    console.log('Error caught:', error);
  }
}

// the url will be undefined if the user did not specify a link
if (url !== undefined) {
  readAny(url);
} else {
  console.log('ERROR: Please specify a url...');
}
