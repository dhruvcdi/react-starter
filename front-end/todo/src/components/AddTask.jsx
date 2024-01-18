import { useState } from 'react'


import MoreLogo from '../assets/more.png';
import './AddTask.css'

export default function AddTask(props){

    const [task,setTask] = useState('')

    function addProduct(){
        // alert(task)
        props.setTaskList([...props.taskList,task])
        setTask('')
    }

   return (
    <div className='add-comp'>
       <input type='text' value={task} onChange={e=>setTask(e.target.value)}></input>
       <img src={MoreLogo} className='add-btn' onClick={addProduct} />
       
    </div>
   ) 
}