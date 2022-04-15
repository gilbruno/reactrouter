import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddTodoForm from './AddTodoForm'


function Todo() {

  const [todos, setTodos] = useState(
    [
        {id:1, todo: "Buy Milk"},
        {id:2, todo: "Buy Bread"},
    ]  
  )  
  
  const [warning, setWarning] = useState(false)


  const myTodos = todos.map(todo => {
    return (
        <li className="list-group-item" key={todo.id}>{todo.todo}</li>
    )
    }
  )
  
  const warningMsg = warning && <div class="alert alert-danger mt-4" role="alert"> Veuillez indiquer un Todo </div>
  
  const addNewTodo = (newTodo) => {
    if (newTodo !== "") {
        setTodos([...todos, {
            id: uuidv4(),
            todo:newTodo
            }
        ])
        setWarning(warning ? !warning : warning);

    }  
    else {
        setWarning(true);
    }
    
  }


  return (
    <div className="container">
        {warningMsg}
        <h1 className="text-center">{todos.length} todo</h1>
        <ul className="list-group">
            {myTodos}
        </ul>
        <AddTodoForm addNewTodo={addNewTodo}/>
    </div>
  )
}

export default Todo