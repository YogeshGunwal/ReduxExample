export const ADD_TODO = '@@todo/ADD_TODO';

export const addTodo = (todo) => {
  return (dispatch) => {
    // action here.
    dispatch({
      type: ADD_TODO,
      payload: todo
    })
  }
}

export const DELETE_TODO = '@@todo/DELETE_TODO';

export const deleteTodo = (todo) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_TODO,
      payload: todo
    })
  }
}

export const MARK_TODO_AS_COMPLETED = '@@todo/MARK_TODO_AS_COMPLETED';

export const markToAsCompleted = (todo) => {
  return (dispatch) => {
    dispatch({
      type: MARK_TODO_AS_COMPLETED,
      payload: todo
    })
  }
}