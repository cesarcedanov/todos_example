let seqTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: seqTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILIITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
