import { useState } from 'react'

import AddTask from './components/AddTask'
import DeleteLogo from './assets/delete.png'
import './App.css'

function App() {

  
  const [taskList,setTaskList]=useState(["Task 1: Create Login page", "Task 2: Create Css file", " Task 3: Create api for login"])

  function deleteTask(e){
    console.log(e.target.parentNode.attributes.getNamedItem('index').value)
    let index = e.target.parentNode.attributes.getNamedItem('index').value;
    if(index > -1){
      taskList.splice(index,1);
      console.log(taskList)
      setTaskList(taskList.filter((v,i)=> i !== index))
    }
  }
  return (
    <>
    <AddTask setTaskList={setTaskList} taskList={taskList}/>
      <ul className='vertical-center-task-list' >
        {
          taskList.map((t,index) =>
            <li className='task' index={index}>
            <h3 >{t}</h3>
             <img src={DeleteLogo} className='del-btn' onClick={deleteTask}/>
            </li>
                      
          )

        }
      </ul>
    </>
  )
}

export default App
