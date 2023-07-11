import express from 'express';
import * as fs from 'node:fs/promises';

const error = (message) => ({ error: message });

const port = 8080;
/**
  I am used to having to read and write to different files from my Computational Linguistics work.
  While this api will only ever read and write to one file, I always found it helpful to not hard code
  where I am reading and writing in case I ever re-used code in another program or I needed to try a
  different approach and change where I was recording the outcome of my program. Additionally, I would
  have many different files to read from, and having one variable at the top that held where I was reading
  from made it easier since I was often retrieving where I wanted to read from on the command line or in another file,
  and so I couldn't hard code it and had to pass the info to my read and write functions. So it's just 'muscle memory' from Comp Ling.
 */
const readFile = './data.json';
const writeFile = './data.json';
const app = express();
const parser = express.json();
app.use(parser);

/**
   An async function for grabbing the data from the json file.
   Data will be parsed before returning.
  */
async function readJSON(fileUrl) {
  const contents = await fs.readFile(fileUrl, 'utf8');
  return JSON.parse(contents);
}

/**
  An async function for writing our updated data back to the json file.
 */
async function writeJSON(fileUrl, data) {
  await fs.writeFile(fileUrl, JSON.stringify(data));
}

/**
  For when the user sends a request just to /api/notes, meaning they
  want all the notes printed, not one specifically
 */
app.get('/api/notes', async (req, res) => {
  try {
    const jsonData = await readJSON(readFile);
    const notesArray = [];
    for (const grade in jsonData.notes) {
      notesArray.push(jsonData.notes[grade]);
    }
    res.status(200).json(notesArray);
  } catch (err) {
    res.status(400).json(error('Could not read notes.'));
    // For the developer to see an error trace, not the user
    console.error('Error reading notes: ', err);
  }
});

/**
  For when the user sends a request just to /api/notes/:id, meaning
  they want a specific note printed, and only that note
 */
app.get('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await readJSON(readFile);
    const requestedId = Number(req.params.id);
    if (isNaN(requestedId) || requestedId < 0) {
      // The user gave a non-valid id
      const msg = `id must be a positive interger...you gave ${requestedId}`;
      res.status(400).json(error(msg));
      return;
    }
    if (!jsonData.notes[requestedId]) {
      // The user gave a valid id that did not match any note
      res.status(404).json(error(`unable to find note with id ${requestedId}`));
      return;
    }
    // If we did not enter either if statements, the id given is valid and appears in our notes
    res.status(200).json(jsonData.notes[requestedId]);
  } catch (err) {
    console.log('Error getting specific note: ', err);
  }
});

/**
  For when the user wants to create a new note. They must include
  content to fill this new note, and its id will be chose automatically.
  This new note is saved to our object and this object is written to our
  json file.
  */
app.post('/api/notes', async (req, res) => {
  try {
    const jsonData = await readJSON(readFile);
    const userNote = req.body;
    const length = Object.keys(userNote).length;
    if (!userNote.content) {
      // If the user does not include a content section
      res.status(400).json(error('Please include content for your note...'));
      return;
    } else if (length > 1) {
      // If the user is tryin to pass in more data than we allow
      res
        .status(400)
        .json(error('Please include ONLY content for your note...'));
      return;
    }
    userNote.id = jsonData.nextId;
    jsonData.notes[jsonData.nextId] = userNote;
    jsonData.nextId += Math.floor(Math.random() * 5 + 1);
    await writeJSON(writeFile, jsonData);
    res.status(201).json(userNote);
  } catch (err) {
    console.error('ERROR: ', err);
    res.status(500).json(error('An unexpected error occurred, whoopsies!'));
  }
});

/**
  For when the user wishes to delete one of their notes. The id
  provided must be a positive integer, and an id of a note that
  is currently in our json data.
 */
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await readJSON(readFile);
    const requestedId = Number(req.params.id);
    if (isNaN(requestedId) || requestedId < 0) {
      // The user gave a non-valid id
      const msg = `id must be a positive interger...you gave ${requestedId}`;
      res.status(400).json(error(msg));
      return;
    } else if (!jsonData.notes[requestedId]) {
      // The user gave a valid id that did not match any note
      res.status(404).json(error(`unable to find note with id ${requestedId}`));
      return;
    }
    delete jsonData.notes[requestedId];
    await writeJSON(writeFile, jsonData);
    res.sendStatus(204);
  } catch (err) {
    console.error('ERROR: ', err);
    res.status(500).json(error('An unexpected error occurred, whoopsies!'));
  }
});

/**
  For when the user wishes to change the content of a note. They
  must provide a valid id and only a new content field, then the
  note is updated and the data is written back to the json file
 */
app.put('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await readJSON(readFile);
    const requestedId = Number(req.params.id);
    const userNote = req.body;
    if (isNaN(requestedId) || requestedId < 0) {
      // The user gave a non-valid id
      const msg = `id must be a positive interger...you gave ${requestedId}`;
      res.status(400).json(error(msg));
      return;
    } else if (!jsonData.notes[requestedId]) {
      // The user gave a valid id that did not match any note
      res.status(404).json(error(`unable to find note with id ${requestedId}`));
      return;
    } else if (!userNote.content || Object.keys(userNote).length > 1) {
      res
        .status(400)
        .json(
          error('Please include a content field and ONLY a content field...')
        );
      return;
    }
    jsonData.notes[requestedId].content = userNote.content;
    await writeJSON(writeFile, jsonData);
    res.status(200).json(jsonData.notes[requestedId]);
  } catch (err) {
    console.error('ERROR: ', err);
    res.status(500).json(error('An unexpected error occurred, whoopsies!'));
  }
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
