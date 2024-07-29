import React, { useContext } from "react";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { TodoContext } from "../../contexts/TodoContext";

const TodoFilter = () => {
  // const { todoList, onTodo } = useContext(TodoContext);

  // const changeHandler = (e) => {
  //   const val = e.target.value;
  //   if ((val = "ALL")) onTodo({ type: "CHANGE", staticTodoList });
  //   else setFilterTodoList(todoList.filter((todo) => todo.category === val));
  // };

  return (
    <select
      className="p-2 text-gray-100 bg-gray-800 rounded"
      data-cy="todo-filter"
      // onChange={changeHandler}
    >
      <option value="ALL" defaultValue={"1"}>
        All
      </option>
      <option value="TODO">{TODO_CATEGORY_ICON.TODO} TODO</option>
      <option value="PROGRESS">{TODO_CATEGORY_ICON.PROGRESS} PROGRESS</option>
      <option value="DONE">{TODO_CATEGORY_ICON.DONE} DONE</option>
    </select>
  );
};

export default TodoFilter;
