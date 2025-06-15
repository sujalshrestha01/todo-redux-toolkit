import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
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
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleUpdate(todo.id, todo.text)}>
            update
          </button>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
