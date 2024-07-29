import React, { useContext, useState } from 'react'
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import IconButton from '../ui/IconButton';
import TodoForm from "../ui/TodoForm";
import Modal from "../ui/Modal";
import { createPortal } from "react-dom";
import { TodoContext } from '@/contexts/TodoContext';

const TodoItem = ({todo}) => {
  const [openModal, open] = useState(false);
  const { onTodo } = useContext(TodoContext);

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
      <div>
        <span className="text-lg font-medium text-gray-300">
        {TODO_CATEGORY_ICON[todo.category]}
        </span>
        <div>
          <h2
            data-test="title"
            className="mb-0 text-lg font-bold text-gray-100 uppercase"
          >
            {todo.title}
          </h2>
          <p className="mt-2 text-base text-gray-200">{todo.summary}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <IconButton icon={"✏️"} onClick={() => open(true)} />
        <IconButton textColor="text-red-300" icon={"🗑"} onClick={() => onTodo({type: "DELETE", id: todo.id})} />
      </div>
      {openModal &&
        createPortal(
          <Modal>
            <TodoForm onClose={() => open(false)} type="UPDATE" todo={todo}>
              Update Todo
            </TodoForm>
          </Modal>,
          document.body
        )}
    </li>
  )
}

export default TodoItem