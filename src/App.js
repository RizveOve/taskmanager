import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <Header/>
      <AddTask/>
      <TaskList/>
    </>
  );
}

export default App;
