import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageAvailable } from "../../interfaces/LanguageAvailable";
import { ReduxPayload } from "../../interfaces/ReduxPayload";

const initialState: LanguageAvailable = "es";

const language = createSlice({
  name: "language",
  initialState: initialState as LanguageAvailable,
  reducers: {
    setLanguage: (
      state: LanguageAvailable,
      action: PayloadAction<ReduxPayload<LanguageAvailable>>
    ) => {
      return action.payload.value;
    },
  },
});

export const { setLanguage } = language.actions;
export default language.reducer;
