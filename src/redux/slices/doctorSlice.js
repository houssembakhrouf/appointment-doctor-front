import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export const applydoctor= createAsyncThunk('/applyDoctor' , async(data,{rejectWithValue})=>{
try {
    const res=await axios.post('/user/apply-doctor-account' ,data ,
    {
        headers:{ token:localStorage.getItem('token')}

     
    }
     
    )
    return res.data.newdoctor

} catch (error) {
    return rejectWithValue(error.response.data.msg)

}

})


export const getDoctorsData= createAsyncThunk('/getdoctorsData' , async(data , {rejectWithValue})=>{
    try {
        const res=await axios.get('/admin/get-all-doctors' ,  {
            headers:{ token:localStorage.getItem('token')}

        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})

export const changedoctorstatus= createAsyncThunk('/change-status-account' , async({record ,status }, {rejectWithValue , dispatch})=>{
    try {
        const res=await axios.post('/admin/change-doctor-status' ,
         {doctorId : record._id  , userId: record.userId , status : status}, {
            headers:{ token:localStorage.getItem('token')}

        })
       
        dispatch(getDoctorsData())

        return res.data

    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})


export const getDoctor=createAsyncThunk('/getdoctordata' , async( userId ,{rejectWithValue ,})=>{
    try {
       const res=await axios.post(`/doctor/get-doctordata-byId`,
       {
        userId

       },
      
       {
        headers:{ token:localStorage.getItem('token')}
       }
       )
       return res.data.doctor

    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})

export const updateDoctor=createAsyncThunk('/updatedoctordata' , async( {userId , data},{rejectWithValue , dispatch})=>{
    try {
        console.log('Dispatching updateDoctor action with payload:', data, userId);

       const res=await axios.post('/doctor/update-doctordata',
       {
        userId , data

       },
      
       {
        headers:{ token:localStorage.getItem('token')}
       }
       )
       console.log('Received response from server:', res.data);

       return res.data.doctor

    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})



export const getDoctorbydoctorId=createAsyncThunk('/getDoctordatabydoctorId' , async( docotrId ,{rejectWithValue ,})=>{
    try {
       const res=await axios.post(`/doctor/get-doctordata-bydoctorId`,
       {
        docotrId

       },
      
       {
        headers:{ token:localStorage.getItem('token')}
       }
       )
       return res.data.doctor

    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})
export const getAllApppointmensdoctor=createAsyncThunk('/get-All-Apppointmens-doctor' , async(data , {rejectWithValue})=>{
    try {
        const res = await axios.get('/doctor/get-appointments-by-doctor-id' , 
        {
            headers:{ token:localStorage.getItem('token')}

        }
        )
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
} )


export const changeAppointmentstatus= createAsyncThunk('/change-appointment-status' , async({record ,status }, {rejectWithValue , dispatch})=>{
    try {
        const res=await axios.post('/doctor/change-appointment-status' ,
         {appointmentId : record._id  ,status : status}, {
            headers:{ token:localStorage.getItem('token')}

        })
       
        dispatch(getAllApppointmensdoctor())

        return res.data

    } catch (error) {
        return rejectWithValue(error.response.data.msg)

    }
})


const doctorSlice = createSlice({
    name :'Doctor',
    initialState:{
        doctor : {},
        doctors:{},
        doctorstatus:{},
        doctorAppointments:{},
        appointmentstatus:{},
        token:localStorage.getItem('token')  || null   ,
        isLoading:false,
        error : null,
        isAuth : localStorage.getItem('isAuth') || false
    },
    reducers: {
        updateField: (state, action) => {
          const { field, value } = action.payload;
          state.doctor[field] = value;
        },
      },

    extraReducers:(builder)=>{

        builder.addCase(applydoctor.fulfilled,(state,action)=>{
            state.doctor=action.payload
            state.error=null
        })
        builder.addCase(applydoctor.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(applydoctor.rejected,(state,action)=>{
            
            state.error=action.payload
         })

        builder.addCase(getDoctorsData.fulfilled,(state,action)=>{
            state.doctors=action.payload
            state.isLoading =false
            state.isAuth=true
           }) 
        builder.addCase(getDoctorsData.rejected,(state,action)=>{
            state.doctors ={}
            state.isLoading =false
           
           }) 
        builder.addCase(getDoctorsData.pending,(state,action)=>{
            
            state.isLoading =true
          
           })

           builder.addCase(changedoctorstatus.fulfilled,(state,action)=>{
            state.doctorstatus=action.payload
            state.isLoading =false
            state.isAuth=true
           }) 
        builder.addCase(changedoctorstatus.rejected,(state,action)=>{
            state.doctorstatus ={}
            state.isLoading =false
           
           }) 
        builder.addCase(changedoctorstatus.pending,(state,action)=>{
            
            state.isLoading =true
          
           })
           builder.addCase(getDoctor.fulfilled,(state,action)=>{
            state.doctor=action.payload
            state.isLoading =false
           
           }) 
        builder.addCase(getDoctor.rejected,(state,action)=>{
            state.doctor ={}
            state.isLoading =false
            state.error=action.payload
           
           }) 
        builder.addCase(getDoctor.pending,(state,action)=>{
            
            state.isLoading =true
          
           })

          
          .addCase(updateDoctor.fulfilled, (state, action) => {
            console.log('Update fulfilled. Updated data:', action.payload);

            state.isLoading = false;
            state.doctor =  state.doctor = { ...action.payload };
          })

          .addCase(updateDoctor.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updateDoctor.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });

          builder.addCase(getDoctorbydoctorId.fulfilled,(state,action)=>{
            state.doctor=action.payload
            state.isLoading =false
            state.isAuth=true
           }) 
        builder.addCase(getDoctorbydoctorId.rejected,(state,action)=>{
            state.doctors ={}
            state.isLoading =false
           
           }) 
        builder.addCase(getDoctorbydoctorId.pending,(state,action)=>{
            
            state.isLoading =true
          
           })

           .addCase(getAllApppointmensdoctor.fulfilled,(state,action)=>{
            state.doctorAppointments=action.payload
            state.isLoading =false
           }) 
           .addCase(getAllApppointmensdoctor.rejected,(state,action)=>{
            state.doctorAppointments ={}
            state.isLoading =false
           
           }) 
           .addCase(getAllApppointmensdoctor.pending,(state,action)=>{
            
            state.isLoading =true
          
           }) 

           builder.addCase(changeAppointmentstatus.fulfilled,(state,action)=>{
            state.appointmentstatus=action.payload
            state.isLoading =false
            state.isAuth=true
           }) 
        builder.addCase(changeAppointmentstatus.rejected,(state,action)=>{
            state.appointmentstatus ={}
            state.isLoading =false
           
           }) 
        builder.addCase(changeAppointmentstatus.pending,(state,action)=>{
            
            state.isLoading =true
          
           })

           
    }

})

export const { updateField } = doctorSlice.actions;

export default doctorSlice.reducer