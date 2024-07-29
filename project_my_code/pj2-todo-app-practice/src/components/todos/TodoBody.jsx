import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../contexts/TodoContext";

const TodoBody = () => {
  const { todoList, category } = useContext(TodoContext);
  const filterTodoList = (todoList, category) => category === 'ALL' ? todoList : todoList.filter(todo => todo.category === category);
  const filteredTodos = filterTodoList(todos.data, todos.category);

  return (
    <ul className="px-0 my-8">
      {filteredTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoBody;
