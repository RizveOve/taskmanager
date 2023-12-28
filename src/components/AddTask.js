import React from 'react';

export const AddTask = ({tasklist, setTasklist, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.id){
            const date= new Date();
            const updatedTaskList = tasklist.map((sTask)=>(
                sTask.id=== task.id? {id: date.getTime(), name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}: sTask
            ));
            
        setTasklist(updatedTaskList);
        setTask({});
        } else{
            const date= new Date();
            const newTask = {
            id: date.getTime(),
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist, newTask])
        setTask({})
        } 
    }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" value={task.name || ""} placeholder='Add task here' autoComplete='off' name='task' maxLength={15} onChange={e => setTask ({...task, name: e.target.value})} />
            <button>{(task.id)? "Update" : "Add" }</button>
        </form>
    </section>
  )
}
