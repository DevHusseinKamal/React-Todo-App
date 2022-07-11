import React from "react";
import TodoItem from "./TodoItem";
import { useGlobalContext } from "../store/context";

const TodoList = () => {
  const { todo, clearItem } = useGlobalContext();

  const allLists = todo.map((list) => {
    const { id, input } = list;
    return <TodoItem key={id} id={id} name={input} />;
  });

  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {allLists}
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearItem}
      >
        clear list
      </button>
    </ul>
  );
};

export default TodoList;
