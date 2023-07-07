import * as fs from 'node:fs/promises';

const cliArgs = process.argv.slice(2);

function readNotes(data) {
  try {
    const { notes } = data;
    for (const item in notes) {
      console.log(`${item}: ${notes[item]}`);
    }
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

async function addNote(data, userNote) {
  try {
    const { nextId, notes } = data;
    notes[nextId] = userNote;
    const newId = nextId + Math.floor(Math.random() * 5 + 1);
    data.nextId = newId;
    await fs.writeFile('./data.json', JSON.stringify(data));
    console.log('Note added!');
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

async function deleteNote(data, noteID) {
  try {
    const { notes } = data;
    if (notes[noteID]) {
      delete notes[noteID];
      await fs.writeFile('./data.json', JSON.stringify(data));
      console.log('Note deleted!');
    } else {
      console.log(`ID of ${noteID} not found, please try again...`);
    }
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

async function updateNote(data, noteID, userNote) {
  try {
    const { notes } = data;
    if (notes[noteID]) {
      notes[noteID] = userNote;
      await fs.writeFile('./data.json', JSON.stringify(data));
      console.log('Note updated!');
    } else {
      console.log(`ID of ${noteID} not found, please try again...`);
    }
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

if (cliArgs.length > 0) {
  const action = cliArgs[0];
  /* I chose to grab the json info here rather than outside the if-statement in case the user did not
     specify an action and we would have fetched the data for no reason. Additionally, I grabbed the
     data here and passed as an argument rather than grabbing in each individual function so that I have less writing. */
  let data = await fs.readFile('./data.json', 'utf8');
  data = JSON.parse(data);
  switch (action) {
    case 'read':
      await readNotes(data);
      break;
    case 'create': {
      const note = cliArgs[1];
      if (note) {
        await addNote(data, note);
      } else {
        console.log('Please provide a note to add...');
      }
      break;
    }
    case 'delete': {
      const id = cliArgs[1];
      if (id) {
        await deleteNote(data, id);
      } else {
        console.log("Please provide a note's ID to delete...");
      }
      break;
    }
    case 'update': {
      const id = cliArgs[1];
      const updatedNote = cliArgs[2];
      if (id && updatedNote) {
        await updateNote(data, id, updatedNote);
      } else {
        console.log(
          `Please provide both an ID and a new note as a replacement.`
        );
      }
      break;
    }
    default:
      console.log('ERROR: requested action not recognized: ', action);
  }
}
