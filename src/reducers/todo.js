import { ADD_TODO, DELETE_TODO, MARK_TODO_AS_COMPLETED } from "../actions/todo";

const initialState = {
  loading: false,
  error: '',
  list: []
}

export default function todo(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO: {

      console.log('add')
      
      const list = [...state.list];
      list.push(payload);

      return {
        ...state,
        list
      }
    }

    case DELETE_TODO: {
      console.log('delte')
      const list = state.list.filter(item => item.task !== payload.task)
      return {
        ...state,
        list
      }
    }

    case MARK_TODO_AS_COMPLETED: {
      console.log('completed')
      let list = [...state.list];

      const index = list.findIndex(it => it.task === payload.task);
      list[index].done = !list[index].done;

      return {
        ...state,
        list
      }
    }
    
    default: return state;
  }
}