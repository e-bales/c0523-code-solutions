import express from 'express';
import ClientError from './client-error.js';
import errorMiddleware from './error-middleware.js';
import pg from 'pg';

const port = 8080;
const app = express();
const parser = express.json();
app.use(parser);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

/**
 * Checks whether the provided score is INVALID: meaning not in our range or not an integer.
 * Returns boolean, TRUE if is not valid, FALSE if it is valid.
 */
function checkInvalidScore(score) {
  score = Number(score);
  if (score > 100 || score < 0 || !Number.isInteger(score)) {
    return true;
  }
  return false;
}

/**
 * Checks if the id the user provided is INVALID: meaning NaN, less than 0, or not an integer.
 * Returns a boolean, TRUE if it is not valid, FALSE if it is valid.
 */
function checkInvalidID(id) {
  if (isNaN(id) || id < 0 || !Number.isInteger(id)) {
    return true;
  }
  return false;
}

/**
 * Checks whether the user MISSED a required field.
 * Returns a boolean, TRUE if they did not provide everything necessary, FALSE if they did.
 */
function checkInvalidGradeInput(gradeInput) {
  if (!gradeInput.course || !gradeInput.name || !gradeInput.score) {
    return true;
  }
  return false;
}

/**
  Returns all grades in the database...
 */
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades1";
      `;
    const result = await db.query(sql);
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

/**
  Returns a grade with the specified id, if it exists...
 */
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // const jsonData = await readJSON(readFile);
    const requestedId = Number(req.params.gradeId);
    if (checkInvalidID(requestedId)) {
      // The user gave a non-valid id
      throw new ClientError(
        400,
        `ID must be a positive interger, you gave ${req.params.gradeId}`
      );
    }
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1;
      `;
    const params = [requestedId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      // The user gave a valid id that did not match any note
      throw new ClientError(
        404,
        `Unable to find a grade with id ${requestedId}`
      );
    }
    // If we did not enter either if statements, the id given is valid and appears in our notes
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

/**
  Creates a new grade. They must include a name, course, and score
  to fill this new grade, and its id will be chosen automatically.
  */
app.post('/api/grades', async (req, res, next) => {
  try {
    const userNote = req.body;
    if (checkInvalidGradeInput(userNote)) {
      // If the user does not include a course, name, or score section
      throw new ClientError(
        400,
        'Please include course, name, and score for your note...'
      );
    }
    if (checkInvalidScore(userNote.score)) {
      // If the provided score is not in our accepted range, nor an integer.
      throw new ClientError(
        400,
        'User score must be an integer between 0 and 100...'
      );
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const params = [userNote.name, userNote.course, userNote.score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

/**
  Deletes one of the grades in the database. The id provided must be
  a positive integer, and an id of a grade that is currently in our
  grades database.
 */
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const requestedId = Number(req.params.gradeId);
    if (checkInvalidID(requestedId)) {
      // The user gave a non-valid id
      throw new ClientError(
        400,
        `ID must be a positive interger, you gave ${req.params.gradeId}`
      );
    }
    const sql = `
    delete
      from "grades"
    where "gradeId" = $1;
    `;
    const params = [requestedId];
    const result = await db.query(sql, params);
    if (!result.rowCount) {
      // If the returning result object has a rowCount of 0, then we didn't delete anything
      throw new ClientError(404, `Unable to find grade with id ${requestedId}`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

/**
  Changes the content of a note. The user must provide a valid id
  and a course, name, and score field, then the grade is updated.
 */
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const requestedId = Number(req.params.gradeId);
    const userNote = req.body;
    if (checkInvalidID(requestedId)) {
      // The user gave a non-valid id
      throw new ClientError(
        400,
        `ID must be a positive interger, you gave ${req.params.gradeId}`
      );
    }
    if (checkInvalidGradeInput(userNote)) {
      // If the user does not include a course, name, or score section
      throw new ClientError(
        400,
        'Please include course, name, and score for your grade update...'
      );
    }
    if (checkInvalidScore(userNote.score)) {
      // If the provided score is not in our accepted range, nor an integer.
      throw new ClientError(
        400,
        'User score must be an integer between 0 and 100...'
      );
    }
    const sql = `
    update "grades"
      set "course" = $1,
          "name"   = $2,
          "score"  = $3
    where "gradeId" = $4
    returning *;
    `;
    const params = [
      userNote.course,
      userNote.name,
      userNote.score,
      requestedId,
    ];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!result.rowCount) {
      // If the returning result object has a rowCount of 0, then we didn't update anything
      throw new ClientError(404, `Unable to find grade with id ${requestedId}`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
