import React, { useContext } from "react";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { TodoContext } from "../../contexts/TodoContext";

const TodoFilter = () => {
  const { dispatch } = useContext(TodoContext);

  return (
    <select
      className="p-2 text-gray-100 bg-gray-800 rounded"
      data-cy="todo-filter"
      onChange={(e) => dispatch({type: "FILTER", category: e.target.value})}
    >
      <option value="all" defaultValue={"1"}>
        All
      </option>
      <option value="TODO">{TODO_CATEGORY_ICON.TODO} To do</option>
      <option value="PROGRESS">
        {TODO_CATEGORY_ICON.PROGRESS} On progress
      </option>
      <option value="DONE">{TODO_CATEGORY_ICON.DONE} Done</option>
    </select>
  );
};

export default TodoFilter;