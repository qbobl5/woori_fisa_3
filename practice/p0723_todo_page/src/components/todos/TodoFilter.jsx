import { TODO_CATEGORY_ICON } from "@/constants/icon";

const TodoFilter = () => {
  return (
    <select
      className="p-2 text-gray-100 bg-gray-800 rounded"
      data-cy="todo-filter"
    >
      <option value="all" defaultValue={"1"}>
        All
      </option>
      <option value="TODO">{TODO_CATEGORY_ICON.TODO} TODO</option>
      <option value="PROGRESS">{TODO_CATEGORY_ICON.PROGRESS} PROGRESS</option>
      <option value="DONE">{TODO_CATEGORY_ICON.DONE} DONE</option>
    </select>
  );
};

export default TodoFilter;
