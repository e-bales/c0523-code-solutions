/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import ApiSpinner from './ApiSpinner';
import './Todos.css';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [apiLoading, setApiLoading] = useState(false);

  /* Implement useEffect to fetch all todos. Hints are at the bottom of the file. */
  useEffect(() => {
    async function getTodos() {
      try {
        const response = await fetch('api/todos');
        if (!response.ok) {
          throw new Error('Could not retrieve data...');
        }
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getTodos();
  }, []);

  /* Implement addTodo to add a new todo. Hints are at the bottom of the file. */
  async function addTodo(newTodo) {
    try {
      setApiLoading(true);
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) {
        throw new Error('Could not add requested todo...');
      }
      const data = await response.json();
      setTodos((prev) => prev.concat([data]));
    } catch (err) {
      setError(err);
    } finally {
      setApiLoading(false);
    }
  }

  /* Implement toggleCompleted to toggle the completed state of a todo. Hints are at the bottom of the file. */
  async function toggleCompleted(todoId) {
    try {
      // console.log(todos);
      const [todo] = todos.filter((item) => item.todoId === todoId);
      if (!todo) {
        throw new Error('Could not find requested item...');
      }
      const clone = { isCompleted: !todo.isCompleted };
      const response = await fetch(`/api/todos/${todoId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clone),
      });
      if (!response.ok) {
        throw new Error('Could not update requested todo...');
      }
      const data = await response.json();
      const newTodos = todos.map((x) => (x.todoId === todoId ? data : x));
      setTodos(newTodos);
    } catch (err) {
      setError(err);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="outer-container">
      {apiLoading ? <ApiSpinner text="Loading..." /> : ''}
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App" />
            <TodoForm onSubmit={addTodo} apiLoading={apiLoading} />
            <TodoList todos={todos} toggleCompleted={toggleCompleted} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------- HINTS!!!!!!!!! ------------
/* useEffect:
 *  Use fetch to send a GET request to `/api/todos`.
 *  Once the response JSON is received and parsed,
 *  update state with the received todos.
 *  Handle errors correctly and set `error` to any error or error status code.
 *  Set `isLoading` to false when all network activity is finished.
 */

/* addTodo:
 *  Use fetch to send a POST request to `/api/todos`.
 *  Once the response JSON is received and parsed,
 *    - set the Todos to a new array with the added Todo concatenated
 *    - handle errors appropriate (as mentioned above)
 *
 *  DO NOT MUTATE the original state array, nor any objects within it.
 *
 *  TIP: When calling fetch, be sure to SERIALIZE the todo object in the body
 *       with JSON.stringify() and specify the "Content-Type" header as "application/json"
 *  TIP: The "(prev) =>" version of the state setter function might be convenient
 *  TIP: Use Array.prototype.concat to create a new array containing the contents
 *       of the old array, plus the object returned by the server.
 */

/* toggleCompleted:
 *  Find the index of the todo with the matching todoId in the state array.
 *  Get its "isCompleted" status.
 *  Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
 *  Use fetch to send a PATCH request to `/api/todos/${todoId}`
 *  Once the response JSON is received and parsed,
 *    - create a shallow copy of the todos array from state
 *    - replace the old todo with the todo received from the server
 *    - handle errors appropriate (as mentioned above)
 *
 *  NOTE: "toggle" means to flip back and forth, so clicking a todo
 *  in the list repeatedly should "toggle" its isCompleted status back and forth.
 *
 *  DO NOT try to calculate the index of the todo by subtracting 1 from the id.
 *
 *  DO NOT MUTATE the original state array, nor any objects within it.
 *
 *  TIP: `Array.map` is a convenient way to make a copy of an array -- compare
 *       the Todo IDs and map the existing Todo if it is not the one that was
 *       just updated, and map the updated array if it is.
 *  TIP: When calling fetch, be sure to SERIALIZE the updates in the body with JSON.stringify()
 *       And specify the "Content-Type" header as "application/json"
 */
