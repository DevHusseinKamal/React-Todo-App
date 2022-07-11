export const reducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state,
      input: action.payload,
    };
  }
  if (action.type === "SUBMIT") {
    return {
      ...state,
      todo: action.payload,
      input: "",
      edit: false,
    };
  }
  if (action.type === "EDIT") {
    return {
      ...state,
      todo: state.todo.filter((item) => item.id !== action.id),
      edit: true,
      input: action.val,
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      todo: state.todo.filter((item) => item.id !== action.id),
    };
  }
  if (action.type === "CLEAR") {
    return {
      ...state,
      todo: [],
    };
  }
  return state;
};
