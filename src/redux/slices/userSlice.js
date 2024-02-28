import {createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const userRegister=createAsyncThunk('/register' , async(data , {rejectWithValue})=>{
    try {
        const res=await axios.post('/user/register' , data)
        return res.data
        
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

export const userLogin=createAsyncThunk('/login' , async(data , {rejectWithValue})=>{
    try {
        const res=await axios.post('/user/login',data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})

export const getUser=createAsyncThunk('/getdata' , async( data,{rejectWithValue})=>{
    try {
       const res=await axios.get('/user/getdata' ,
       {
        headers:{ token:localStorage.getItem('token')}
       }
       )
       return res.data.user

    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})

export const markAllseen = createAsyncThunk('/markall' , async(data , {rejectWithValue})=>{
    try {
        const res=await axios.post('/user/mark-all-not-seen' , data , {
            headers:{ token:localStorage.getItem('token')}

        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})
export const deletnotificationseen = createAsyncThunk('/deletnotification' , async(data , {rejectWithValue})=>{
    try {
        const res=await axios.post('/user/delete-mark-all-not-seen' , data , {
            headers:{ token:localStorage.getItem('token')}

        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})

export const getUsersData= createAsyncThunk('/getusersData' , async(data , {rejectWithValue})=>{
    try {
        const res=await axios.get('/admin/get-all-users' ,  {
            headers:{ token:localStorage.getItem('token')}

        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})

export const getdoctosapproved=createAsyncThunk('/get-approved-dotors' , async(data , {rejectWithValue})=>{
    try {
        const res = await axios.get('/user/get-all-approved-doctors' , 
        {
            headers:{ token:localStorage.getItem('token')}

        }
        )
        return res.data.Doctors
    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
} )

export const addappointmentdoctor=createAsyncThunk('/add-appointment-doctor'  , async({doctorId , userId ,doctorInfo ,userInfo , date , fromtime , totime} , {rejectWithValue})=>{
try {
    const res = await axios.post('/user/book-appointment', { 
        doctorId, userId, doctorInfo , userInfo , date, fromtime,totime
     }, {
        headers: { token: localStorage.getItem('token') }
     });
    return res.data
} catch (error) {
    return rejectWithValue(error.response.data.msg)

}
} )


export const getAllApppointmens=createAsyncThunk('/get-All-Apppointmens' , async(data , {rejectWithValue})=>{
    try {
        const res = await axios.get('/user/get-appointments-by-user-id' , 
        {
            headers:{ token:localStorage.getItem('token')}

        }
        )
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
} )





const UserSlice = createSlice({
    name:'userslice' ,
    initialState:{
        User : {},
        users:{},
        doctorsapproved:{},
        appointment:{},
        userAppointments:{},
        token:localStorage.getItem('token')  || null   ,
     
        isLoading:false,
        error : null,
        isAuth : localStorage.getItem('isAuth') || false },
        reducers:{
            logout:(state)=>{
                state.token=null
                state.isAuth=false
                localStorage.removeItem('token')
                localStorage.removeItem('isAuth')

            }
        },

             
         extraReducers:(builder)=>{
        //register
        builder.addCase(userRegister.fulfilled,(state,action)=>{
            state.token=action.payload.token
            state.isLoading=false
            state.isAuth=true
            localStorage.setItem('token',state.token)
            localStorage.setItem('isAuth',state.isAuth)      
        })
         builder.addCase(userRegister.rejected,(state,action)=>{
            state.token=null
            state.isLoading =false 
            state.isAuth=false
            state.error=action.payload
         })
         .addCase(userRegister.pending,(state,action)=>{
          
            state.isLoading =true
          
        })

        //login

        builder.addCase(userLogin.fulfilled,(state,action)=>{
            state.token=action.payload.token
            state.isLoading =false 
            state.isAuth=true
            localStorage.setItem('token',state.token)
            localStorage.setItem('isAuth', state.isAuth)

        })

        .addCase(userLogin.rejected,(state,action)=>{
             state.token=null
            state.isLoading =false 
            state.isAuth=false
            state.error=action.payload
        })

        .addCase(userLogin.pending,(state,action)=>{
           
           state.isLoading =true
         
       })
       //getuserdata 
       .addCase(getUser.fulfilled,(state,action)=>{
        state.User=action.payload
        state.token=action.payload.token
        state.isLoading =false
        state.isAuth=true
       }) 
       .addCase(getUser.rejected,(state,action)=>{
        state.userData ={}
        state.isLoading =false
       
       }) 
       .addCase(getUser.pending,(state,action)=>{
        
        state.isLoading =true
      
       }) 


       .addCase(markAllseen.fulfilled,(state,action)=>{
        state.User=action.payload
        
        state.isLoading =false
        state.isAuth=true
       }) 
       .addCase(markAllseen.rejected,(state,action)=>{
        state.User={}
        state.isLoading =false
        state.error=action.payload

       
       }) 
       .addCase(markAllseen.pending,(state,action)=>{
        
        state.isLoading =true
      
       }) 

       .addCase(deletnotificationseen.fulfilled,(state,action)=>{
        state.User=action.payload
        
        state.isLoading =false
        state.isAuth=true
       }) 
       .addCase(deletnotificationseen.rejected,(state,action)=>{
        state.User={}
        state.isLoading =false
        state.error=action.payload

       
       }) 
       .addCase(deletnotificationseen.pending,(state,action)=>{
        
        state.isLoading =true
      
       }) 
       .addCase(getUsersData.fulfilled,(state,action)=>{
        state.users=action.payload
        state.isLoading =false
        state.isAuth=true
       }) 
       .addCase(getUsersData.rejected,(state,action)=>{
        state.userData ={}
        state.isLoading =false
       
       }) 
       .addCase(getUsersData.pending,(state,action)=>{
        
        state.isLoading =true
      
       }) 

       .addCase(getdoctosapproved.fulfilled,(state,action)=>{
        state.doctorsapproved=action.payload
        state.isLoading =false
        state.isAuth=true
       }) 
       .addCase(getdoctosapproved.rejected,(state,action)=>{
        state.doctorsapproved ={}
        state.isLoading =false
       
       }) 
       .addCase(getdoctosapproved.pending,(state,action)=>{
        
        state.isLoading =true
      
       }) 

       .addCase(addappointmentdoctor.fulfilled,(state,action)=>{
        state.appointment=action.payload
        state.isLoading =false
        state.isAuth=true
       }) 
       .addCase(addappointmentdoctor.rejected,(state,action)=>{
        state.appointment ={}
        state.isLoading =false
       
       }) 
       .addCase(addappointmentdoctor.pending,(state,action)=>{
        
        state.isLoading =true
      
       }) 

       .addCase(getAllApppointmens.fulfilled,(state,action)=>{
        state.userAppointments=action.payload
        state.isLoading =false
        state.isAuth=true
       }) 
       .addCase(getAllApppointmens.rejected,(state,action)=>{
        state.userAppointments ={}
        state.isLoading =false
       
       }) 
       .addCase(getAllApppointmens.pending,(state,action)=>{
        
        state.isLoading =true
      
       }) 



    }

})


export default UserSlice.reducer
export const {logout} =UserSlice.actions