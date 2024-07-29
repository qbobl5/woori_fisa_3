import React, { useContext, useState } from "react";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { TodoContext } from "../../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ onClose, type, todo }) => {
  const { onTodo } = useContext(TodoContext);

  const [data, setData] = useState({
    id: type === "ADD" ? uuidv4() : todo.id,
    title: type === "ADD" ? "" : todo.title,
    summary: type === "ADD" ? "" : todo.summary,
    category: type === "ADD" ? "TODO" : todo.category,
  });

  return (
    <>
      <h3 className="text-3xl text-red-200"></h3>
      <form className="my-2">
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="title">
            Title
          </label>
          <input
            className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
            type="text"
            id="title"
            value={data.title}
            onChange={(e) =>
              setData({
                id: data.id,
                title: e.target.value,
                summary: data.summary,
                category: data.category,
              })
            }
          />
        </div>
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="summary">
            Summary
          </label>
          <textarea
            className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
            id="summary"
            value={data.summary}
            rows="5"
            onChange={(e) =>
              setData({
                id: data.id,
                title: data.title,
                summary: e.target.value,
                category: data.category,
              })
            }
          />
        </div>
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="category">
            Category
          </label>
          <select
            className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
            id="category"
            value={data.category}
            onChange={(e) =>
              setData({
                id: data.id,
                title: data.title,
                summary: data.summary,
                category: e.target.value,
              })
            }
          >
            <option value="TODO">{TODO_CATEGORY_ICON.TODO} TODO</option>
            <option value="PROGRESS">
              {TODO_CATEGORY_ICON.PROGRESS} PROGRESS
            </option>
            <option value="DONE">{TODO_CATEGORY_ICON.DONE} DONE</option>
          </select>
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="text-xl text-white"
            type="button"
            onClick={onClose}
          >
            CANCEL
          </button>
          <button
            className="px-6 py-3 text-xl text-red-200"
            type="button"
            onClick={() => {
              onTodo({ type, data });
              onClose();
            }}
          >
            {type}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
