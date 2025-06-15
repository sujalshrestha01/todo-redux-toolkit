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
    <form action="" className="flex mb-7" onSubmit={addTodoHandler}>
      <input
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name=""
        id=""
      />
      <button
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer hover:bg-green-700 duration-150"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
