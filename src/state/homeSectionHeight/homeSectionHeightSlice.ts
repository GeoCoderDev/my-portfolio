import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxPayload } from "../../interfaces/ReduxPayload";

const initialState = 200;

const homeSectionHeight =  createSlice({
    name: "homeSectionHeight",
    initialState,
    reducers:{
        setHomeSectionHeight: (state, action: PayloadAction<ReduxPayload<number>>)=>{
            return action.payload.value;
        }
    }

})

export const {setHomeSectionHeight} = homeSectionHeight.actions; 
export default homeSectionHeight.reducer;