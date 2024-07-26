import TodoItem from "./TodoItem";

const TodoBody = ({
  todos,
  changeTodoHandler,
  closeAddTodoModalHandler,
  addTodoValid,
}) => {
  return (
    <ul className="px-0 my-8">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoBody;
