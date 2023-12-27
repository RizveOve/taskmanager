import React from 'react';

export const AddTask = ({tasklist, setTasklist}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const date= new Date();
        const newTask = {
            id: date.getTime(),
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist, newTask])
    }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add task here' autoComplete='off' name='task' maxLength={15} />
            <button>Add</button>
        </form>
    </section>
  )
}
