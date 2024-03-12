import { useDispatch } from 'react-redux';
import styles from '../styles/todoitem.module.css';
import { deleteTodo, markToAsCompleted } from '../actions/todo';

export function TodoItem({item,todos}) {
  const dispatch = useDispatch();

  function handleDelete(item){
    dispatch(deleteTodo(item));
  }

  function handleClickTask(item){
    

    // setTodos(todos.map((todo)=>{
    //   return todo.task === task ? {...todo, done: !todo.done} : todo;
    // }))

    // Direct Mutation... (this won't work...)
    // We're directly modfiying the 'done' property of a todo Object within the 'todos' array.
    // This approach directly mutates the state object todos, violating React's immutability principle.
    // React relies on immutable data to detect changes and trigger re-renders. When we mutate the state 
    // directly like this, React doesn't detect the change because the reference to the todos array remains same.

    // setTodos(todos => {
    //   const index = todos.findIndex(it => it.task === task);
    //   todos[index] = {...todos[index], done :!todos[index].done};
    //   return todos;
    // })

    // Immutability... (spread operator returns a new Array.. then we can make changes in that and then use the setState method)
    // By creating a new array and new objects, we ensure that the state is updated immutably.
    // React can detect the change in the state because the reference to the newTodos array is different from the previous state, 
    // triggering a re-render, and updating the UI accordingly.


    dispatch(markToAsCompleted(item));

  }

  const isCompleted = item.done? styles.completed : "";

  return (
    <div className={styles.listItem}>
      <h3 className={`${styles.listItemName} ${isCompleted}`} onClick={()=>handleClickTask(item)}> {item.task} </h3>
      <span>
        <button className={styles.deleteButton}  onClick={()=> handleDelete(item)}> &#128465;</button>
      </span>
    </div>
  );
}
