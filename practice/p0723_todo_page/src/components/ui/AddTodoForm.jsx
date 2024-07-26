import { TODO_CATEGORY_ICON } from "@/constants/icon";
import Modal from "../../layout/Modal";

const AddTodoForm = (props) => {
  return (
    <Modal>
      <div>
        <select
          id="category"
          className="p-2 text-gray-100 bg-gray-800 rounded"
          onChange={props.changeTodoHandler}
        >
          <option value="TODO">{TODO_CATEGORY_ICON.TODO} TODO</option>
          <option value="PROGRESS">
            {TODO_CATEGORY_ICON.PROGRESS} PROGRESS
          </option>
          <option value="DONE">{TODO_CATEGORY_ICON.DONE} DONE</option>
        </select>
        <div className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px]">
          <label>
            title:{" "}
            <input
              type="text"
              id="title"
              onChange={props.changeTodoHandler}
            ></input>
          </label>
        </div>
        <div className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px]">
          <label>
            summary:{" "}
            <input
              type="text"
              id="summary"
              onChange={props.changeTodoHandler}
            ></input>
          </label>
        </div>
        <div className="text-red-500">{props.addTodoValid}</div>
        {props.type === "add" && <button
          className="px-6 py-2 font-semibold text-gray-100 bg-gray-800  border-none rounded cursor-pointer"
          onClick={props.createTodoHandler}
        >
          Add
        </button>}
        {props.type === "modify" && <button
          className="px-6 py-2 font-semibold text-gray-100 bg-gray-800  border-none rounded cursor-pointer"
          // onClick={props.createTodoHandler}
        >
          Update
        </button>}
        
        &nbsp;
        <button
        className="px-6 py-2 font-semibold text-gray-100 bg-gray-600 border-none rounded cursor-pointer"
        onClick={props.closeAddTodoModalHandler}
      >
        Cancel
      </button>
      </div>
    </Modal>
  );
};

export default AddTodoForm;
