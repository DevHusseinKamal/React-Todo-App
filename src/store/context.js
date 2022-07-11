import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

// --- Context ---
const AppContext = React.createContext({
  input: "",
  todo: [],
  inputHandler: () => {},
  submitHandler: () => {},
  removeItem: () => {},
  clearItem: () => {},
  editItem: () => {},
  id: 0,
  edit: false,
});

// Local Storage
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

// --- Provider ---
const AppProvider = (props) => {
  const [state, dispathFn] = useReducer(reducer, {
    input: "",
    todo: getLocalStorage(),
    id: 0,
    edit: false,
  });

  // --- Input Handler ---
  const inputHandler = (e) => {
    dispathFn({
      type: "CHANGE",
      payload: e.target.value,
    });
  };

  // --- Submit Handler ---
  const submitHandler = (e) => {
    e.preventDefault();
    if (state.input.trim().length === 0) {
      alert("Please Enter Todo!");
      return;
    }
    const newItem = {
      id: Math.random(),
      input: state.input.trim(),
    };
    const updatedItems = [...state.todo, newItem];
    dispathFn({
      type: "SUBMIT",
      payload: updatedItems,
    });
    localStorage.setItem("list", JSON.stringify(updatedItems));
  };

  // Edit Item
  const editItem = (id) => {
    const selectedItem = state.todo.find((item) => item.id === id);
    const prevInput = selectedItem.input;
    dispathFn({
      type: "EDIT",
      id: id,
      val: prevInput,
    });
  };

  // --- Remove Item ---
  const removeItem = (id) => {
    dispathFn({
      type: "REMOVE",
      id: id,
    });
  };

  // --- Clear Item ---
  const clearItem = () => {
    dispathFn({
      type: "CLEAR",
    });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state.todo));
  }, [state.todo]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        submitHandler,
        inputHandler,
        removeItem,
        clearItem,
        editItem,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
