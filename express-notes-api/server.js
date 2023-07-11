import express from 'express';
import * as fs from 'node:fs/promises';

/* This just makes it easier to create error messages for me.
   And it looks cleaner when written in the code later on. */
class Error {
  constructor(errorMsg) {
    this.error = errorMsg;
  }
}

const port = 8080;
const readFile = './data.json';
const writeFile = './data.json';
const app = express();
const parser = express.json();
app.use(parser);

/* An async function for grabbing the data from the json file.
   Data will be parsed before returning.                    */
async function getJSON(fileUrl) {
  try {
    const contents = await fs.readFile(fileUrl, 'utf8');
    const parsed = JSON.parse(contents);
    return parsed;
  } catch (err) {
    console.log('Error reading json:', err);
  }
}

/* An async function for writing our updated data back to the json file. */
async function writeJSON(fileUrl, data) {
  try {
    await fs.writeFile(fileUrl, JSON.stringify(data));
  } catch (err) {
    console.log('Error writing json back to file: ', err);
  }
}

/* For when the user sends a request just to /api/notes, meaning they
   want all the notes printed, not one specifically               */
app.get('/api/notes', async (req, res) => {
  try {
    const jsonData = await getJSON(readFile);
    const notesArray = [];
    for (const grade in jsonData.notes) {
      notesArray.push(jsonData.notes[grade]);
    }
    res.status(200).json(notesArray);
  } catch (err) {
    res.status(400).send('Error: could not read notes.');
    // For the developer to see an error trace, not the user
    console.log('Error reading notes: ', err);
  }
});

/* For when the user sends a request just to /api/notes/:id, meaning
   they want a specific note printed, and only that note          */
app.get('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await getJSON(readFile);
    const requestedId = req.params.id;
    if (isNaN(Number(requestedId)) || requestedId < 0) {
      // The user gave a non-valid id
      const msg = `id must be a positive interger...you gave ${requestedId}`;
      res.status(400).json(new Error(msg));
      return;
    } else if (!jsonData.notes[Number(requestedId)]) {
      // The user gave a valid id that did not match any note
      res
        .status(404)
        .json(new Error(`unable to find note with id ${requestedId}`));
      return;
    }
    // If we did not enter either if statements, the id given is valid and appears in our notes
    res.status(200).json(jsonData.notes[Number(requestedId)]);
  } catch (err) {
    console.log('Error getting specific note: ', err);
  }
});

/* For when the user wants to create a new note. They must include
   content to fill this new note, and its id will be chose automatically.
   This new note is saved to our object and this object is written to our
   json file.                                                          */
app.post('/api/notes', async (req, res) => {
  try {
    const jsonData = await getJSON(readFile);
    const userNote = req.body;
    const length = Object.keys(userNote).length;
    if (!userNote.content) {
      // If the user does not include a content section
      res
        .status(400)
        .json(new Error('Please include content for your note...'));
      return;
    } else if (length > 1) {
      // If the user is tryin to pass in more data than we allow
      res
        .status(400)
        .json(new Error('Please include ONLY content for your note...'));
      return;
    }
    userNote.id = jsonData.nextId;
    jsonData.notes[jsonData.nextId] = userNote;
    jsonData.nextId += Math.floor(Math.random() * 5 + 1);
    await writeJSON(writeFile, jsonData);
    res.status(201).json(userNote);
  } catch (err) {
    console.error('ERROR: ', err);
    res.status(500).json(new Error('An unexpected error occurred, whoopsies!'));
  }
});

/* For when the user wishes to delete one of their notes. The id
   provided must be a positive integer, and an id of a note that
   is currently in our json data.                             */
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await getJSON(readFile);
    const requestedId = req.params.id;
    if (isNaN(Number(requestedId)) || Number(requestedId) < 0) {
      // The user gave a non-valid id
      const msg = `id must be a positive interger...you gave ${requestedId}`;
      res.status(400).json(new Error(msg));
      return;
    } else if (!jsonData.notes[Number(requestedId)]) {
      // The user gave a valid id that did not match any note
      res
        .status(404)
        .json(new Error(`unable to find note with id ${requestedId}`));
      return;
    }
    delete jsonData.notes[requestedId];
    await writeJSON(writeFile, jsonData);
    res.sendStatus(204);
  } catch (err) {
    console.error('ERROR: ', err);
    res.status(500).json(new Error('An unexpected error occurred, whoopsies!'));
  }
});

/* For when the user wishes to change the content of a note. They
   must provide a valid id and only a new content field, then the
   note is updated and the data is written back to the json file */
app.put('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await getJSON(readFile);
    const requestedId = req.params.id;
    const userNote = req.body;
    const length = Object.keys(userNote).length;
    if (isNaN(Number(requestedId)) || requestedId < 0) {
      // The user gave a non-valid id
      const msg = `id must be a positive interger...you gave ${requestedId}`;
      res.status(400).json(new Error(msg));
      return;
    } else if (!jsonData.notes[Number(requestedId)]) {
      // The user gave a valid id that did not match any note
      res
        .status(404)
        .json(new Error(`unable to find note with id ${requestedId}`));
      return;
    } else if (!userNote.content || length > 1) {
      res
        .status(400)
        .json(
          new Error(
            'Please include a content field and ONLY a content field...'
          )
        );
      return;
    }
    jsonData.notes[requestedId].content = userNote.content;
    await writeJSON(writeFile, jsonData);
    res.status(200).json(jsonData.notes[requestedId]);
  } catch (err) {
    console.error('ERROR: ', err);
    res.status(500).json(new Error('An unexpected error occurred, whoopsies!'));
  }
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
