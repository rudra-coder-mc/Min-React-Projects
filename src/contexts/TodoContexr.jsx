import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo ",
      checked: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  ToggleTodo: (id) => {},
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const ToggleTodo = (id) => {
    setTodos((pre) =>
      pre.map((preTod) =>
        preTod.id === id ? { ...preTod, checked: !preTod.checked } : preTod
      )
    );
  };
 

  const deleteTodo = (id) => {
    setTodos((pre) => pre.filter((preTodo) => preTodo.id !== id));
  };

  useEffect(() => {
    // console.log(localStorage.getItem("todo"));
    if (localStorage.getItem("todo") !== "undefined") {
      // console.log(localStorage.getItem("todo"));
      // console.log(todos);
      const data = JSON.parse(localStorage.getItem("todo"));
      // console.log(data);
      if (data && data.length > 0) {
        setTodos(data);
      }
    }
  }, []);

  useEffect(() => {
    if (todos !== "undefined" ) {
      localStorage.setItem("todo", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, ToggleTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
