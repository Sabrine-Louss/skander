import {createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const gettask = createAsyncThunk("task/gettask" , async( _ , {rejectWithValue})=>{
    try{
        const res = await axios.get("/task/gettasks" , {
            headers:{
                token:localStorage.getItem("token")
            }
        })
        return res.data
    }
    catch(error){
        return rejectWithValue(error.response.data.msg)
    }
})

export const addtask = createAsyncThunk("task/addtask" , async( info , {rejectWithValue,dispatch} )=>{
    try{
        const res = await axios.post("/task/addtask" , info , {
            headers:{
                token:localStorage.getItem("token")
            }
        })
        dispatch(gettask())
        return res.data
    }
    catch(error){
        return rejectWithValue(error.response.data.msg)
    }
})

export const updatetask = createAsyncThunk(
    "/task/updatetask", async (userId, {rejectWithValue,dispatch}) => {
        try {
            const res = await axios.put(`/task/updatetask/${userId._id}`,userId, {
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            dispatch(gettask())
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.msg)
            //  console.log(error.response.data.msg)
        }
    }
)

export const deletetask = createAsyncThunk(
    "task/deletetask", async ( userId,{rejectWithValue,dispatch}) => {
        try {
            const res = await axios.delete(`/task/deletetask/${userId._id}`, {
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            dispatch(gettask())
            return res.data
           

        } catch (error) {
            return rejectWithValue(error.response.data.msg)
          
        }
    }
)

const todoSlice = createSlice({
    name : "task",
    initialState: {
        isLoading: false,
        taskList: [{title:"", desc:""}],
        errors: null
    },
    extraReducers: {

        //Get persone task
        [gettask.pending]: (state) => {state.isLoading= true },

        [gettask.fulfilled]: (state, action) => {
            state.isLoading= false 
            state.errors = null
            state.taskList = action.payload.tasks
        },
        [gettask.rejected]: (state, action) => {
            state.isLoading= false 
            state.token = null
            state.errors = action.payload
            state.taskList = []
        },

        //delete persone task
        [deletetask.pending]: (state) => {state.isLoading= true },
        [deletetask.fulfilled]: (state, action) => {
            state.isLoading= false 
            state.errors = null
            state.taskList = action.payload
        },
        [deletetask.rejected]: (state, action) => {
            state.isLoading= false 
            state.isAuth = false
            state.token = null
            state.errors = action.payload
        },
    }
})

export default todoSlice.reducer