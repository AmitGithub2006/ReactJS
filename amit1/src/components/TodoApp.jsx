import React, { useState } from "react";

export const TodoApp = () => {

    const [todo, setTodo] = useState([])
    const [items, setItems] = useState("")

    return (
        <>
        <input type="text" value={items} placeholder="Write your todo here..." onChange={(e) => setItems(e.target.value)} />
        <button>Add Todo</button>
        </>
    )
}