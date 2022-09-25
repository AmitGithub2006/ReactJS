import React, { useState } from "react";

export const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [items, setItems] = useState("");

  const addTodo = () => {
    setTodo([...todo, items]);
    setItems("");
  };

  return (
    <>
      <h1 className="heading">
        <i class="fa-solid fa-list"></i>Todo App
      </h1>
      <div className="container">
        <input
          type="text"
          id="input"
          value={items}
          placeholder={"write your todo here..."}
          onChange={(e) => setItems(e.target.value)}
        />
        <button onClick={addTodo}>add todo</button>
        {todo.map((item) => (
          <div>
            <span>{item}</span>
            <button>Edit</button>
            <button
              onClick={() => {
                let filteredtodo = todo.filter((value) => value !== item);
                setTodo([...filteredtodo]);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
