const Task = require("../models/taskSchema")





const addTask = async(req,res)=>{
    try{
       const {title,desc} = req.body
       const personeId = req.body.personeId 
       const newTask = await Task.create({title,desc,owner:personeId})
       res.status(201).json({msg:"task created" , Task: newTask})
    }
    catch(error){
        res.status(500).json({msg:" something went wrong", error:error.message})

    }
}

const getTasks = async(req,res)=>{
    try{
       const tasks = await Task.find({owner: req.body.personeId})
       res.status(201).json({msg:"get all tasks" , tasks: tasks})
    }
    catch(error){
        res.status(500).json({msg:" something went wrong", error:error.message})

    }
}

const updateTask = async(req,res)=>{
    try{
       const task = await Task.findByIdAndUpdate({_id:req.params.id},{...req.body})
       res.status(201).json({msg:"task updated" , task: task})
    }
    catch(error){
        res.status(500).json({msg:"something went wrong", error:error.message})

    }
}

const deleteTask = async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete({_id:req.params.id})
        res.status(201).json({msg:"task deleted" , task: task})
    }
    catch(error){
        res.status(500).json({msg:" something went wrong", error:error.message})

    }
}


module.exports={addTask,getTasks,updateTask,deleteTask}