import {configureStore} from "@reduxjs/toolkit";


import rootReducer from "./slices/userSlice";
import todoSlice from "./slices/todoSlice";


export default configureStore({reducer:{user:rootReducer , task:todoSlice}});