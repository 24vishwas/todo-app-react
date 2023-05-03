
import React, {useState} from 'react';
import image from "../imgPng.png"
import "./button.css"

export const AddTodoForm = ({addTodo}) => {
    const [title,setTitle]= useState("");
    const [desc,setDesc]=useState("")
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or Description cannot be blank");

        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }

    }
    return (
        <div className="form container my-3">
            <h3>Add a Todo</h3>
            <img className='image' src={image} alt='image' height={200} width={200}/>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"  />
                        
                </div>
                <div className="form-group">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
               <div className='btn-container'>
                <button type="submit" className="btn1">Add Todo</button>
                </div>
            
            </form>
        </div>
    )
}
