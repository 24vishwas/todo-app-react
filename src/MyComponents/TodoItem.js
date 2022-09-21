import React from 'react'
import "./todoCard.css"

export const TodoItem = ({todo, onDelete}) => {
  return (
    
    
    <div className='card'>
       <h4>{todo.title}</h4>
       <p>{todo.desc}</p>
       <div style={{"height":"45px"}}></div>
       <button className='btn btn-sm ' onClick={()=>{onDelete(todo)}}>Delete</button>
      

    </div>
    
    
    
  )
}
