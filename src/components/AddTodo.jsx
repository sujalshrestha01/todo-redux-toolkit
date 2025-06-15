import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    // Dispatch addTodo action here
    dispatch(addTodo(input));
    // Clear the input field after adding the todo
    setInput("");
  };
  return (
    <form action="" onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name=""
        id=""
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
