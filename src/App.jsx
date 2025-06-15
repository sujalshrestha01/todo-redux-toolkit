import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-center mt-2 font-bold text-2xl ">
        Todo using Redux Toolkit
      </h1>
      <div className="max-w-2xl mx-auto mt-10">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
