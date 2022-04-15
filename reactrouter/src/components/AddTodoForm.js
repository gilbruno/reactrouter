import React, {useState} from 'react'

function AddTodoForm({addNewTodo}) {

  const [addTodo, setAddTodo] = useState('')  

  const handleOnChange = (e) => {
    setAddTodo(e.target.value)
  }  

  const handleSubmit = (event) => {
    event.preventDefault()  
    addNewTodo(addTodo)
    setAddTodo('')
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
        <div className="card card-body">
            <div className="form-group">
                <label>Ajouter Todo</label>
                <input type="text" className="form-control" value={addTodo} onChange={handleOnChange}/>
                <input type="submit" className="btn btn-success mt-4"/>
            </div>

        </div>
        
    </form>
  )
}

export default AddTodoForm