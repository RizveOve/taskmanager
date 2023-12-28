import React from 'react';

export const TaskList = ({tasklist, setTasklist, task, setTask}) => {

    // const tasks= [
    //     {id: 101, name: "task 1", time: "2:09:01 AM 9/14/2030"},
    //     {id: 102, name: "task 2", time: "2:09:01 AM 9/14/2030"},
    //     {id: 103, name: "task 3", time: "2:09:01 AM 9/14/2030"},
    //     {id: 104, name: "task 4", time: "2:09:01 AM 9/14/2030"},
    //     {id: 105, name: "task 5", time: "2:09:01 AM 9/14/2030"}
    // ]
    const handleDelete = (id) => {
        const updatedTask= tasklist.filter(task => task.id !== id);
        setTasklist(updatedTask)
    }
    const handleEdit =(id) =>{
        const selectedTask = tasklist.find((stask)=> stask.id === id)
        setTask(selectedTask);
    }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Task</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button onClick={()=> setTasklist([])} className='clearAll'>Clear All</button>
        </div>
        <ul>
            {tasklist.map((task)=> (
                <li key={task.id}>
                    <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                    <i onClick={()=> handleEdit(task.id)} className='bi bi-pencil-square'></i>
                    <i onClick={()=> handleDelete(task.id)} className='bi bi-trash'></i>
                </li>
            ))}
        </ul>
        
    </section>
  )
}
