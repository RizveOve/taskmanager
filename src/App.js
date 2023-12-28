import { useState } from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});

  return (
    <>
      <Header/>
      <AddTask tasklist= {tasklist} setTasklist= {setTasklist} task={task} setTask= {setTask}/>
      <TaskList tasklist= {tasklist} setTasklist= {setTasklist} task={task} setTask= {setTask}/>
    </>
  );
}

export default App;
