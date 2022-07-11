import React from "react";
import { useGlobalContext } from "../store/context";

const TodoItem = ({ id, name }) => {
  const { removeItem, editItem } = useGlobalContext();
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{name}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={() => editItem(id)}>
          <i className="fas fa-pen"></i>
        </span>
        <span className="mx-2 text-danger" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
