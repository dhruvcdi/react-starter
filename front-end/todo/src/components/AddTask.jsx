import { useState } from 'react'


import MoreLogo from '../assets/more.png';
import './AddTask.css'

export default function AddTask(props){

    const [task,setTask] = useState('')
    const [taskSummary,setTaskSummary] = useState('')


    function addProduct(){
        // alert(task)
        if(task.length > 2){
            props.setTaskList([...props.taskList,task])
            setTask('')
        }
        
    }

   return (
    <div className='add-comp'>
        <form action="" method="post">
        <input type='text' placeholder='Add Title ...' value={task} onChange={e=>setTask(e.target.value)} minLength={3} required></input>
       <input type='text' placeholder='Add Summary ...' value={taskSummary} onChange={e=>set(e.target.value)} minLength={3} required></input>
       <input type='submit' value='Submit'  ></input>
        
        </form>
       
       
       <img src={MoreLogo} className='add-btn' onClick={addProduct} />
       
    </div>
   ) 
}