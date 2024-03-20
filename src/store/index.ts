import { configureStore } from "@reduxjs/toolkit";
import headerHeightSlice from "../state/headerHeight/headerHeightSlice";
import homeSectionHeightSlice from "../state/homeSectionHeight/homeSectionHeightSlice";
import backgroundProyectHeightSlice from "../state/proyectsBackground/backgroundProyectHeight";


export const store = configureStore({
    reducer: {
        headerHeight: headerHeightSlice,
        homeSectionHeight: homeSectionHeightSlice,
        backgroundProyectHeight: backgroundProyectHeightSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
