import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxPayload } from "../../interfaces/ReduxPayload";

const initialState = 200;

const homeSectionHeight =  createSlice({
    name: "homeSectionHeight",
    initialState,
    reducers:{
        setHomeSectionHeight: (state, action: PayloadAction<ReduxPayload<number>>)=>{
            console.log(action.payload.value)
            return action.payload.value;
        }
    }

})

export const {setHomeSectionHeight} = homeSectionHeight.actions; 
export default homeSectionHeight.reducer;