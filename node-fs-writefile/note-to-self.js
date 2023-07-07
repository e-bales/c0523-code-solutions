import * as fs from 'node:fs/promises';

const userNotes = process.argv[2];

async function writeNote(notes) {
  try {
    await fs.writeFile('note.txt', notes + '\n');
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

if (userNotes !== undefined) {
  writeNote(userNotes);
} else {
  console.log('Please write some notes...');
}
