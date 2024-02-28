import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import doctorSlice from "./slices/doctorSlice";


export default configureStore({reducer : { user:userSlice  , Doctor : doctorSlice }})