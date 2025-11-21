import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id, text) => {
    const newText = prompt("Update your todo:", text);
    if (newText) {
      dispatch(updateTodo({ id, text: newText }));
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <div
          className=" mb-1.5 flex justify-between border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black "
          key={todo.id}
        >
          <span className=" ">{todo.text}</span>
          <div className="flex gap-x-2">
            <button
              onClick={() => handleUpdate(todo.id, todo.text)}
              className="bg-blue-400 text-white px-2 py-1 rounded hover:bg-blue-600 duration-150 cursor-pointer"
            >
              Update
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-400 text-white px-2 py-1 rounded hover:bg-red-600 duration-150 cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
