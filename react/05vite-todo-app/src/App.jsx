import { useState } from 'react'
import './App.css'


function App() {

  const [task, setTask] = useState("")
  const [list, setList] = useState([])


  function handleClick() {

    setList((prev) =>
      [...prev, task]
    )
    setTask("")
  }


  function handleDelete(li){
      
    let filterData =   list.filter((lis) => lis !== li)

   setList(filterData)
   console.log(filterData)
  }
 

  return (

    <div className='todo-app'>
      <div className='tod0-container'>
        <h1>My To-Do List</h1>

        <div> 
          <input style={{ padding: "5px", fontSize: "1.2rem" }}
            type='text' placeholder='Add new task' onChange={(e) => setTask(e.target.value)} value={task} /> 
          <button onClick={handleClick}>Add</button> 
        </div>
 
        <div className='dropdown-list'> 

          { (list.length > 0) && 
          list.map((li, index) => { 
            return (
              <p key={index}> {li} <span style={{padding: "0 15px"}} onClick={() => handleDelete(li) }> delete</span> </p>
            )
          }) 
        }  

        </div>

      </div>
    </div>
  )
}

export default App
