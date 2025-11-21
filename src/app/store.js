import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// Persist todos to localStorage whenever state changes
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("todos", JSON.stringify(state.todo.todos));
});
