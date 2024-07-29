import React, { useState } from "react";
import { createPortal } from "react-dom";
import TodoFilter from "./TodoFilter";
import TodoForm from "../ui/TodoForm";
import Modal from "../ui/Modal";

const TodoHeader = () => {
  const [openModal, open] = useState(false);

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
      <button
        className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        data-cy="add-todo-button"
        onClick={() => open(true)}
      >
        Add Todo
      </button>
      {openModal &&
        createPortal(
          <Modal>
            <TodoForm onClose={() => open(false)} type="ADD">New Todo</TodoForm>
          </Modal>,
          document.body
        )}
      <TodoFilter />
    </div>
  );
};

export default TodoHeader;
