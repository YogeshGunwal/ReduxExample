import Form from "./Form";
import TodoList from "./TodoList";
import Footer from './Footer';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Todo(){ 

  const [completedTasks, setCompletedTasks] = useState(0);

  const todos = useSelector(state => state.todo.list);

  useEffect(() => {
    const completedTasks = todos.reduce((complete,task)=>{
      if(task.done) return complete+1;
      else return complete;
    },0);

    setCompletedTasks(completedTasks);
  
  }, [todos])

  console.log('todos', todos)


  return(
    <>
      <Form  />
      <TodoList/>
      <Footer completedTasks={completedTasks} totalTasks={todos.length}/>        
    </>
  )
}