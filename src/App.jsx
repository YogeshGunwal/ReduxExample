import Todo from './components/Todo';
import Header from './components/Header';

import './styles/app.module.css';

export default function App() { 
  return (
    <div>
      <Header > To-Do List </Header>
      <Todo />
    </div>
  )
}

