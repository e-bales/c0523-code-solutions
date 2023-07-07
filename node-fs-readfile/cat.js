import * as fs from 'node:fs/promises';

const urlArray = process.argv.slice(2);

async function readAll(arrayOfLinks) {
  try {
    const arrayOfPromises = arrayOfLinks.map((element) =>
      fs.readFile(element, 'utf8')
    );
    const results = await Promise.all(arrayOfPromises);
    results.map((element) => console.log(element));
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

if (urlArray.length > 0) {
  readAll(urlArray);
} else {
  console.log('ERROR: Please specify one or more links...');
}
