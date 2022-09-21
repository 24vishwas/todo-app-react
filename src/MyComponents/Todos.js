import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";
export const Todos = (props) => {
  return (
   
    <div className='container'>
        <h3 className=' my-3'>todos list</h3>
       <div className='card-content bd-grid' >
        
        {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
          return(<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
        })} 
        </div>
        </div>
       
  )
}
