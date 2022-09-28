import React, { useState } from "react";

export function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [items, setItems] = useState("");
  const [edit, setEdit] = useState(false);
  const [editableIndex, setEditableIndex] = useState();
  const [editedTodo, setEditedTodo] = useState("");
  const [read, setRead] = useState(true);

  const addTodo = () => {
    if (!items) {
      alert("Please enter a valid item");
      return "";
    }
    setTodo([...todo, items]);
    setItems("");
  };

  const editTodo = (index) => {
    setEdit(true);
    setEditableIndex(index);
    setRead(false);
  };

  const saveTodo = (index) => {
    const newTodos = [...todo];
    newTodos[index] = editedTodo;
    setTodo(newTodos);
    setEdit(false);
    setEditableIndex(-1);
    setRead(true);
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
          onChange={(e) => {
            setItems(e.target.value);
          }}
        />
        <button id="addBtn" onClick={addTodo}>
          Add todo
        </button>
        {todo.map((item, index) => {
          return (
            <div className="todo" key={item}>
              {index === editableIndex && edit ? (
                <div>
                  <input
                    type="text"
                    defaultValue={item}
                    onChange={(e) => {
                      setEditedTodo(e.target.value);
                      console.log(editedTodo);
                    }}
                  />
                  <button id="saveBtn" onClick={() => saveTodo(index)}>
                    Save
                  </button>
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
              ) : (
                <div>
                  <input type="text" value={item} readOnly={read} />
                  <button id="editBtn" onClick={() => editTodo(index)}>
                    Edit
                  </button>
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
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
