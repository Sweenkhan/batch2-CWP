import { useState } from 'react'
import './App.css'


function App() {

  const [task, setTask] = useState("")                    //input value
  const [tasks, setTasks] = useState([])
  const [editStart, setEditStart] = useState(false)
  const [editItemId, setEditItemId] = useState("")
 
 
function handleAdd(){

  if(editStart){

   let filterData = tasks.map((item) => item.id === editItemId ? item.text = task : item)
 
    // console.log(filterData)
    setEditItemId("")
    setEditStart(false)

  } else {
  

     setTasks((prev) => 
    [...prev, {

      id: Date.now(),
      text: task,
      completed: false
    }]
)

  }

  
  
//changing input value to empty
setTask("") 
}

 

function handleDelete(id){
  // console.log(id)
 let filterData =   tasks.filter((item) => item.id !== id )
 setTasks(filterData)
}



function handleEdit(id){
  setEditItemId(id)
  setEditStart(true)
  let filterData = tasks.filter((item) => item.id == id )

  setTask(filterData[0].text)

}


  return (

    <div className='todo-app'>

      <div className='todo-container'>
        <h1>My To-Do List</h1>

        <div>  
           <input type='text' placeholder='enter your task' onChange={(e) => setTask(e.target.value.toUpperCase())}  value={task} />
           <button onClick={handleAdd}>Add</button> 
        </div> 

        <div className='dropdown-list'> 

         {
             tasks.map((item) => {
              return (
                  <p key={item.id}> {item.text}   <span style={{paddingLeft: "70px"}} onClick={() => handleDelete(item.id)}>delete</span> <span onClick={ () => handleEdit(item.id)}>edit</span> </p>
              )
             })
         }
   
        </div>

      </div>
    </div>
  )
}

export default App
