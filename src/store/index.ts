import { configureStore } from "@reduxjs/toolkit";
import headerHeightSlice from "../state/headerHeight/headerHeightSlice";
import homeSectionHeightSlice from "../state/homeSectionHeight/homeSectionHeightSlice";
import backgroundProyectHeightSlice from "../state/proyectsBackground/backgroundProyectHeight";
import languageSlice from "../state/language/language";

export const store = configureStore({
  reducer: {
    headerHeight: headerHeightSlice,
    homeSectionHeight: homeSectionHeightSlice,
    backgroundProyectHeight: backgroundProyectHeightSlice,
    language: languageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
