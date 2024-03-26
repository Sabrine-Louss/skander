const router = require("express").Router()
const {addTask,getTasks,updateTask,deleteTask} = require("../controllers/taskController")
const {authMiddleware} = require("../middleware/authMiddleware")


router.post("/addTask" , authMiddleware , addTask)
router.get("/gettasks" , authMiddleware , getTasks)
router.put("/updatetask/:id" , authMiddleware , updateTask)
router.delete("/deletetask/:id" , authMiddleware , deleteTask)

module.exports = router