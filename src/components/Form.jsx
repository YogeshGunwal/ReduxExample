import { useState } from "react";
import styles from '../styles/form.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todo";

export default function Form(){
  const dispatch = useDispatch();
  
  const initialTodo = {task:"", done:false};
  const [todo,setTodo] = useState(initialTodo);
  
  const todos = useSelector(state => state.todo.list);

  function handleSubmit(e){
    e.preventDefault();

    const taskExists = todos.some(existingTodo => existingTodo.task.toLowerCase().trim() === todo.task.toLowerCase().trim());
    if (taskExists) {
      alert("Task Already Exists In The List.");
      return;
    }

    

    // call dispatch addTodo Here.
    dispatch(addTodo(todo));

    setTodo(initialTodo);
  }

  function onChange(e){
    const {name,value} = e.target;
    setTodo({...todo,[name]:value})
  }

  return(
    <form className={styles.todoForm}  onSubmit={handleSubmit} autoComplete="off">        
      <input className={styles.todoInput}  type="text" value={todo.task} name="task" onChange={onChange} placeholder="Enter Task..."/>
      <button className= {styles.addButton} type="submit">+</button>
    </form>
  )
}