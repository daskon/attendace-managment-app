import React from 'react'
import './style.css'

const TaskTwo = () => {
    const list = [2,4,6,8,4,2];
    const unique = list.filter((s => v => s.has(v) || !s.add(v))(new Set));
  return (
    <div className='App-header'>
        <p>
            {list.map((val)=>(
                <span>{val + ' '}</span>
            ))}
        </p>
        <p>Repeated Values in the above array {unique + ' '}</p>
    </div>
  )
}

export default TaskTwo