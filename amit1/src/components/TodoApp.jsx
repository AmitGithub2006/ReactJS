import React, { useState } from "react";

export const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [items, setItems] = useState("");

  const addTodo = () => {
    if(!items) {
        alert("Please enter valid todo");
    } else {
        setTodo([...todo, items]);
        setItems("");
    }
  };

  const editTodo = (idx) => {
    let newTodo = prompt("Edit your todo here")
    const newTodos = [...todo]
    newTodos[idx] = newTodo;
    setTodo(newTodo);
  }

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
        <button id="addBtn" onClick={addTodo}>
          add todo
        </button>
        {todo.map((item) => (
          <div className="todo">
            <div className="todoText">
              <span>{item}</span>
            </div>
            <button id="editBtn" onClick={editTodo}>Edit</button>
            <button
              id="deleteBtn"
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
