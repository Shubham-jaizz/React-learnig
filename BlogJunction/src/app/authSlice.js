import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state:false,
    userData:null

}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.state = true;
            state.userData = action.payload;
        },
        logOut:(state,action)=>{
            state.state = false;
            state.userData = null;
        }

    }
})

export const {login,logOut}  = authSlice.actions

export default authSlice.reducer;