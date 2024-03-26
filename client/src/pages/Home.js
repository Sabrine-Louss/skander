import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector , useDispatch } from "react-redux";
import { gettask , addtask , updatetask , deletetask } from '../redux/slices/todoSlice';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";



const Home = () => {

    const dispatch=useDispatch()

    const [visible , setvisible] = useState({visibility:"Hidden"})
    const [updated , setupdated] = useState({})
    const {taskList , isLoading} = useSelector(state => state.task)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
    dispatch(addtask(data))};
    console.log("errors" , errors);
    useEffect(()=>{dispatch(gettask())},[dispatch])

    const handlechange = (e) => {
        setupdated({...taskList , [e.target.name]:[e.target.value]})
    }
    

    return (
        <>
            <div id="mainn">
                <form onSubmit={handleSubmit(onSubmit)}><br/><br/>
                    <legend><strong>Add  a new task!</strong></legend> <br/><br/>
                    <input type="text" placeholder="Add Title" {...register("title", {required: true})} /><br/><br/>
                    <input type="text" placeholder="Description" {...register("desc", {required: true})} /><br/><br/>
                    <Button variant="success" type="submit" >Submit</Button>{' '}<br/><br/>
                </form>
                {isLoading && <p>Loading</p>}
  {Array.isArray(taskList) && taskList.map(el=>
  <div>
    <p>{el.title}</p>
    <p>{el.desc}</p>


    <button onClick={()=>{(visible.visibility==="hidden")
    ?   setvisible({visibility:"visible"}):setvisible({visibility:"hidden"})}}>update</button>

    <div style={visible}>
    <input type='text' placeholder='add task' name='title'onChange={handlechange}></input>
    <input type='text' placeholder='add desc' name='desc 'onChange={handlechange}></input>
   <button onClick={()=>dispatch(updatetask({...updated,_id:el._id}))}>Updating</button>

    </div>

   
  
  <Button onClick={()=>dispatch(deletetask(el))}>Delete</Button> 
   
  </div>
  )}
            </div>
        </>
    )
}

export default Home
