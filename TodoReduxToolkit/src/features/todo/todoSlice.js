//in redux toolkit we use slices name as reducers
import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1,text:"Hello Shubham Jaiswal"}]
}

export const todoSlice  = createSlice({
    name: 'todo',//mandatory give name as the argument
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload // payload is always a object we can take the items from them
            }
            state.todos.push(todo);//here inside the state we get the initial state object

        }, // always reducers are like this it gives state and action both state gives the current state and action gives the arguments which user wants to give

        deleteTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }

}) 

export const {addTodo,deleteTodo} = todoSlice.actions// this will be used in stores not in the store 

//here we also need to give alll the list of reducers to the store to mainain it and give the legitimate components to access it bro

export default todoSlice.reducer; // it  will be use  in the store