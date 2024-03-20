import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxPayload } from "../../interfaces/ReduxPayload";

const initialState = 200;

const backgroundProyectsHeight =  createSlice({
    name: "backgroundProyectsHeight",
    initialState,
    reducers:{
        setBackgroundProyectsHeight: (state, action: PayloadAction<ReduxPayload<number>>)=>{
            console.log(action.payload.value)
            return action.payload.value;
        }
    }

})

export const {setBackgroundProyectsHeight} = backgroundProyectsHeight.actions; 
export default backgroundProyectsHeight.reducer;