import { configureStore } from "@reduxjs/toolkit";
import headerHeightSlice from "../state/headerHeight/headerHeightSlice";
import homeSectionHeightSlice from "../state/homeSectionHeight/homeSectionHeightSlice";


export const store = configureStore({
    reducer: {
        headerHeight: headerHeightSlice,
        homeSectionHeight: homeSectionHeightSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
