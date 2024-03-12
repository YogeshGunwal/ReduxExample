import { TodoItem } from "./TodoItem";
import styles from '../styles/todolist.module.css';
import { useSelector } from "react-redux";

export default function TodoList(){

  const todos = useSelector(state => state.todo.list);

  function comparator(item1,item2){
    return Number(item1.done)-Number(item2.done);
  }

  const sortedTodos = todos.toSorted(comparator);

  return(
    <>      
      <div className={styles.list}>
        <h3>Tasks List: </h3>
        {sortedTodos.map((item,index) => (
          <TodoItem key={index} item={item} todos={todos}/>
        ))}  
      </div>
    </>
  )
}