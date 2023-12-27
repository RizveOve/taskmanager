import React from 'react'

export const AddTask = () => {
  return (
    <section className="addTask">
        <form action="">
            <input type="text" placeholder='Add task here' autoComplete='off' name='task' maxLength={15} />
            <button>Add</button>
        </form>
    </section>
  )
}
