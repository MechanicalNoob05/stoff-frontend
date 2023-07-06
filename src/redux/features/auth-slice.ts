import {createSlice,PayloadAction} from '@reduxjs/toolkit'


type AuthState={
    userName:string;
    email:string;
}


const initialState ={
    value: {
        userName:"",
        email:"",
    }as AuthState,
};



export const auth =createSlice({
    name:"auth",
    initialState,
    reducers:{
      logOut:()=>{},
      logIn:()=>{}
    }
})


export const {logIn,logOut} =auth.actions
export default auth.reducer