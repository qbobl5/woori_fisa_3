import AddTodoForm from "../ui/AddTodoForm";
import IconButton from "../ui/IconButton";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { useState } from "react";

const TodoItem = (props) => {
  const [modifyFlag, setModify] = useState(false);
  const modifyHandler = () => setModify(!modifyFlag);

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
      <div>
        <span className="text-lg font-medium text-gray-300">
          {TODO_CATEGORY_ICON[props.todo.category]}
        </span>
        <div>
          <h2
            data-test="title"
            className="mb-0 text-lg font-bold text-gray-100 uppercase"
          >
            {props.todo.title}
          </h2>
          <p className="mt-2 text-base text-gray-200">{props.todo.summary}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <IconButton
          icon={"✏️"}
          modifyHandler={modifyHandler}
        />
        {modifyFlag && (
          <AddTodoForm
            type="modify"
            closeAddTodoModalHandler={modifyHandler}
          ></AddTodoForm>
        )}
        <IconButton textColor="text-red-300" icon={"🗑"} removeHandler={props.removeHandler} />
      </div>
    </li>
  );
};

export default TodoItem;
