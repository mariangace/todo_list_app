import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addATodo = (event) => {
    event.preventDefault();
    setTodos([...todos, inputText]);
    setInputText("");
  };

  const gridTodos = (todos, todosPerRow) => {
    const grid = [];
    if (todos.length > 0) {
      const numberOfRows = todos.length / todosPerRow;
      let i = 0;
      while (i < numberOfRows) {
        const temp = todos;
        grid.push(temp.slice(i * todosPerRow, (i + 1) * todosPerRow));
        i++;
      }
      console.log(grid);
    }
    return grid;
  };

  //0, 3,
  // 3, 6;
  // 6, 9;
  // 0, 5;
  // 5, 10;
  // 10, 15;
  return (
    <div className="App">
      <div className="logo">
        <h1>To do board</h1>
        <img src="/images/bunny_example.png" alt="logo" />
      </div>
      <div className="form__div">
        <form>
          <input
            type="text"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <button disabled={!inputText} type="submit" onClick={addATodo}>
            ADD A TO DO
          </button>
        </form>
      </div>
      {gridTodos(todos, 5).map((row, ir) => {
        return (
          <div key={ir} className="todos__content">
            {row.map((todo, i) => (
              <Todo key={i} text={todo} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
