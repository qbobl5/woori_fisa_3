// import { Profile } from "./practice/Profile";
import { useEffect, useState } from "react";
import TodoBody from "./components/todos/TodoBody";
import TodoHeader from "./components/todos/TodoHeader";
import DefaultLayout from "./layout/DefaultLayout";
import AddTodoForm from "./components/ui/AddTodoForm";

const dummyTodos = [
  {
    id: 1,
    title: "React 공부",
    summary: "React를 공부한다.",
    category: "TODO",
  },
  {
    id: 2,
    title: "점심 먹기",
    summary: "점심을 먹는다.",
    category: "PROGRESS",
  },
  {
    id: 3,
    title: "커피 마시기",
    summary: "커피를 마신다.",
    category: "DONE",
  },
];

function App() {
  const [todos, setTodos] = useState(dummyTodos); // todo list
  const [addTodoModal, setAtm] = useState(false); // add todo modal open or close
  const [addTodoValid, setAtv] = useState(""); // add todo form's validity

  // todo object in add todo form
  const [todoObj, setTodoObj] = useState({
    id: dummyTodos.length + 1,
    title: "",
    summary: "",
    category: "TODO",
  });

  /* add todo modal open event */
  const addTodoHandler = () => setAtm(true);

  /* add todo form's value change event */
  const changeTodoHandler = (e) => {
    if (e.target.id === "title")
      setTodoObj({
        id: todoObj.id,
        title: e.target.value,
        summary: todoObj.summary,
        category: todoObj.category,
      });
    else if (e.target.id === "summary")
      setTodoObj({
        id: todoObj.id,
        title: todoObj.title,
        summary: e.target.value,
        category: todoObj.category,
      });
    else if (e.target.id === "category")
      setTodoObj({
        id: todoObj.id,
        title: todoObj.title,
        summary: todoObj.summary,
        category: e.target.value,
      });
  };

  /* add todo event */
  const createTodoHandler = () => {
    /* add todo form validity */
    if (todoObj.title.trim() === "" || todoObj.summary.trim() === "") {
      setAtv("모든 항목을 채워서 작성해주세요");
      return;
    }

    setAtv("");

    const tmp = todos.concat(todoObj);
    setTodos(tmp);
    setTodoObj({
      id: tmp.length + 1,
      title: "",
      summary: "",
      category: "TODO",
    });
    setAtm(!addTodoModal);
  };

  /* add todo modal close event */
  const closeAddTodoModalHandler = () => {
    setAtv("");
    setTodoObj({
      id: todoObj.id,
      title: "",
      summary: "",
      category: "TODO",
    });
    setAtm(false);
  };

  return (
    <>
      <DefaultLayout>
        <header>
          <div className="flex justify-center">
            <a to="/">
              <h1 className="py-8 text-red-200 max-w-max text-7xl">todos</h1>
            </a>
          </div>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          <TodoHeader addTodoHandler={addTodoHandler} />
          <TodoBody
            todos={todos}
          />
        </section>
      </DefaultLayout>

      {addTodoModal ? (
        <AddTodoForm
          createTodoHandler={createTodoHandler}
          changeTodoHandler={changeTodoHandler}
          closeAddTodoModalHandler={closeAddTodoModalHandler}
          addTodoValid={addTodoValid}
          type="add"
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
