import React from "react";
import { useGlobalContext } from "../store/context";

const TodoInput = () => {
  const { inputHandler, submitHandler, input, edit } = useGlobalContext();

  const customBtn = (
    <button
      type="submit"
      className={`btn ${
        edit ? "btn-success" : "btn-primary"
      } mt-3 text-capitalize`}
    >
      {edit ? "edit item" : "add item"}
    </button>
  );

  return (
    <div className="card card-body my-3">
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <span className="input-group-text bg-primary text-white">
            <i className="fas fa-book" />
          </span>

          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            value={input}
            onChange={inputHandler}
          />
        </div>
        <div className="d-grid gap-2">{customBtn}</div>
      </form>
    </div>
  );
};

export default TodoInput;
