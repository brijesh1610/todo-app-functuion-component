

import  Modal  from "react-bootstrap/Modal"
import { useState } from "react"
export function Todo(props){
    const [show,setShow]=useState(false)
    const [value,setValue]=useState(props.todo.value)
    const onchange=(e)=>{
            setValue(e.target.value)
    }
    return(
           <div>
        <div className="container">
            <div className="row m-3">
                <div className="col-md-1">
                    {props.index}
                </div>
                <div className="col-md-1">
                    <input type="checkbox" onChange={()=>props.handleDone(props.todo.id)} checked={props.todo.isDone}/>
                </div>
                <div className="col-md-6" style={{textDecoration:props.todo.isDone?"line-through":""}}>
                    {props.todo.value}
                </div>
                <div className="col-md-2">
                    <button  className="btn btn-warning" onClick={()=>setShow(true)}>Edit</button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger"
                    onClick={()=>props.delete(props.todo.id)}
                    >Delete</button>
                </div>
            </div>
        </div>
        <Modal show={show}>
            <Modal.Header>
                Edit todovalue
            </Modal.Header>
  <Modal.Body>
                <input type="text" className="form-control"
                placeholder={props.todo.value} onChange={onchange}/>
 </Modal.Body>
 <Modal.Footer>
                <button className="btn btn-secondary" onClick={()=>setShow(false)}>Cancel</button>
                <button className="btn btn-success" onClick={()=>{props.handleEdit(value,props.todo.id)
                    setShow(false)}} >Done</button>
             </Modal.Footer>
        </Modal>
        </div>
    )
}