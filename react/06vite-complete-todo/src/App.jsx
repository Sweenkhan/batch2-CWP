 import { useState } from 'react'
 import './App.css'
 
 
 function App() {
 
   const [task, setTask] = useState("")                    //input value
   const [tasks, setTasks] = useState([])
 
   const [editStart, setEditStart] = useState(false)
   const [editItemId, setEditItemId] = useState("")
  
  
 //new task adding in setTask array   
 function handleAdd(){
 
   if(editStart){
 
    let filterData = tasks.map((item) =>  item.id === editItemId ? item.text = task : item)
   
     console.log(filterData)
     setEditItemId("")
     setEditStart(true)
 
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
 
 
 
 function handleEdit(id, text){
   setEditStart(true)
   setEditItemId(id)
   setTask(text)
   // let filterData = tasks.filter((item) => item.id == id )
 }


 function handleComplete(id){

  setTasks(tasks.map((task) => { 
   return task.id === id ? {...task, completed: !task.completed} : task
  }
  ))
   
 }
 
 
   return (
 
     <div className='todo-app'>
 
       <div className='todo-container'>
         <h1>My To-Do List</h1>
 
         <div>  
            <input type='text' placeholder='enter your task' onChange={(e) => setTask(e.target.value.toUpperCase())}  value={task} />
            <button onClick={handleAdd}>Add</button> 
         </div> 
 
 
 {/* task list dropdown */}
         <div className='dropdown-list'> 
 
          { 
            (tasks.length === 0) ? 
             <p>No task yet. Add your task</p> :

              tasks.map((item) => {
               return (
                   <p className={`${item.completed ? "task-completed" : ""}`}  id="list" key={item.id}   >
                     {item.text} 
                     <span   onClick={() => handleDelete(item.id)}>delete</span>
                      <span onClick={ () => handleEdit(item.id, item.text)}>edit</span>
                      <span onClick={() => handleComplete(item.id) }> {item.completed ? "completed": "not completed"} </span>
                       </p>
               )
              })
          }
    
         </div>
 
 
       </div>

       <style jsx> { `
        h1{
        background-color: grey;
        padding: 1rem;
        border-radius: 0.6rem;
        }

        #list{
         display: flex;
         justify-content: space-between;
         font-size: 1.1rem
        }

        span{
        border: 1px solid black;
        padding: 3px 10px;
        border-radius: 0.5rem;
        cursor: pointer
        }

        .task-completed{
         opacity: 0.6;
         text-decoration:  line-through
         
        }
       `
   }  
         </style>
     </div>
   )
 }
 
 export default App
 