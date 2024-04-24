import React, { useEffect, useState } from "react";
import { TodoProvider, useTodo } from "../../contexts";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  const todos = useTodo();

  // console.log(todos.todos);

  return (
    <div className="bg-slate-200 dark:bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-black dark:text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.todos &&
            [...todos.todos].map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
