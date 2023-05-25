import { useState } from "react"




export function AddTodo(props){
    const [value,setValue]=useState("")



    const onSubmit=(e)=>{
          e.preventDefault()
          props.addtodo(value)
          setValue("")
          
    }
    const onChange=(e)=>{
          setValue(e.target.value)
    }
    return(
        <div className="container">
            <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-9">
                    <input className="form-control"type="text" onChange={onChange}/>
                </div>
                <div className="col-md-3">
                    <button type="sumbit" className="btn btn-success">AddTodo</button>
                </div>
            </div>
            </form>
        </div>
    )
}