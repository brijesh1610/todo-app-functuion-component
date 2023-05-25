import { useState } from "react"

import { Todo } from "./Todo"
import { AddTodo } from "./AddTodo"

export function Todos(){
    const [todos,setTodos]=useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[])
    const addtodo=(todovalue)=>{
        if(todovalue){
            const todoarr=[...todos];
            todoarr.push({
                id:new Date().getTime(),
                value:todovalue,
                isDone:false
            })
            updateState(todoarr);
        }
    }
      const updateState=(todos)=>{
        setTodos(todos)
        localStorage.setItem("todos",JSON.stringify(todos))
      }
      const ondelete=(todoId)=>{
        const todoarr=todos.filter(item=>
            item.id!==todoId)
            updateState(todoarr)
        
      }
      const handleDone=(todoId)=>{
        const todoarr=[...todos];
        todoarr.map(item=>{
            if(item.id==todoId){
                item.isDone=!item.isDone
            }
            return item
        })
        updateState(todoarr)
      }
      const handleEdit=(value,todoId)=>{
        console.log(value,todoId)
        const todoarr=[...todos];
        todoarr.map(item=>{
            if(item.id==todoId){
                item.value=value
            }
            return item
        })
        updateState(todoarr)
      }
       
       
    return(
        <div className="container">
            <h1>TodoApp</h1>
            {
                todos.length==0?<h1>No todos available</h1>:todos.map((item,index)=>{return <Todo key={index} todo={item} index={index+1} delete={ondelete} handleDone={handleDone} handleEdit={handleEdit}/>} )
            }
            <AddTodo addtodo={addtodo}/>
        </div>
        
    )
}