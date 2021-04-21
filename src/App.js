import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  // Update this app to retrieve a list of ToDo's from the jsonplaceholder API.
  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3
  // ToDo's for userID 3 are loaded using fetch() and useEffect()
  // useEffect() returns a cleanup function that will cancel the fetch()

  useEffect(() => {
    const abortController = new AbortController();

    async function loadToDos() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?userId=3`,
          { signal: abortController.signal }
        );
        const toDosFromAPI = await response.json();
        setToDos(toDosFromAPI);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", toDos);
        } else {
          throw error;
        }
      }
    }

    loadToDos();

    return () => abortController.abort();
  }, []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
