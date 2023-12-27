import React from 'react'

export const TaskList = () => {

    const tasks= [
        {id: 101, name: "task 1", time: "2:09:01 AM 9/14/2030"},
        {id: 102, name: "task 2", time: "2:09:01 AM 9/14/2030"},
        {id: 103, name: "task 3", time: "2:09:01 AM 9/14/2030"},
        {id: 104, name: "task 4", time: "2:09:01 AM 9/14/2030"},
        {id: 105, name: "task 5", time: "2:09:01 AM 9/14/2030"}
    ]

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Task</span>
                <span className="count">0</span>
            </div>
            <button className='clearAll'>Clear All</button>
        </div>
        <ul>
            {tasks.map((task)=> (
                <li>
                    <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                    <i className='bi bi-pencil-square'></i>
                    <i className='bi bi-trash'></i>
                </li>
            ))}
        </ul>
        
    </section>
  )
}
