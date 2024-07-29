import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import TodoHeader from "./components/todos/TodoHeader";
import TodoBody from "./components/todos/TodoBody";
import { useReducer, useState } from "react";
import { TodoContext } from "./contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

const dummyTodos = [
  {
    id: uuidv4(),
    title: "React 공부",
    summary: "React를 공부한다.",
    category: "TODO",
  },
  {
    id: uuidv4(),
    title: "점심 먹기",
    summary: "점심을 먹는다.",
    category: "PROGRESS",
  },
  {
    id: uuidv4(),
    title: "커피 마시기",
    summary: "커피를 마신다.",
    category: "DONE",
  },
];

const todoHandler = (data, action) => {
  switch (action.type) {
    case "ADD":
      return [...todoList, action.data];
    case "UPDATE":
      return todoList.map((todo) => todo.id === action.data.id ? action.data : todo);
    case "DELETE":
      return todoList.filter((todo) => todo.id !== action.id);
    case "FILTER":
      data.category = action.category;
  }
};

function App() {
  const [todoList, onTodo] = useReducer(todoHandler, {todoList: dummyTodos, category: "ALL"});

  return (
    <>
      <DefaultLayout>
        <header>
          <div className="flex justify-center">
            <a to="/" className="flex">
              <h1 className="py-8 text-red-200 max-w-max text-7xl">todos</h1>
            </a>
          </div>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          <TodoContext.Provider value={{ todoList, category, onTodo }}>
            <TodoHeader />
            <TodoBody />
          </TodoContext.Provider>
        </section>
      </DefaultLayout>
    </>
  );
}

export default App;
