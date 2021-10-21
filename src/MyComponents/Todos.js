import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin:"30px auto"
  }
    return (
        <div className="container "style={myStyle}>
          <h3 > Todos List</h3>
          {props.todos.length===0 ? "No todos to display" : 
          props.todos.map((todo) => {
            return(
              <>
              <TodoItem todo={todo} Key={todo.sno} onDelete={props.onDelete}/>
              <hr/>
             </>
            )

           
          })
          }
          
        </div>
    )
}
