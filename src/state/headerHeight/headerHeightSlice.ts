import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxPayload } from "../../interfaces/ReduxPayload";

const initialState = 60;

const headerHeightSlice = createSlice({
    name: "headerHeight",
    initialState,
    reducers: {
        setHeaderHeight: (state, action: PayloadAction<ReduxPayload<number>>)=>{
            return action.payload.value;
        }
    }
})

export const {setHeaderHeight} = headerHeightSlice.actions;
export default headerHeightSlice.reducer;