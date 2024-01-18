import { useState } from 'react'

import AddTask from './components/AddTask'
import DeleteLogo from './assets/delete.png'
import './App.css'

function App() {

  
  const [taskList,setTaskList]=useState(["Task 1: Create Login page", "Task 2: Create Css file", " Task 3: Create api for login"])

  return (
    <>
    <AddTask setTaskList={setTaskList} taskList={taskList}/>
      <div className='vertical-center-task-list' >
        {
          taskList.map(t =>
            <div className='task'>
            <h3 >{t}</h3>
             <img src={DeleteLogo} className='del-btn'  />
            </div>
                      
          )

        }
      </div>
    </>
  )
}

export default App
