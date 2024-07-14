import spanishTexts from "./es";
import englishTexts from "./en";

const languagesTexts = {
  es: spanishTexts,
  en: englishTexts,
};

export type allTextsKeys = keyof typeof spanishTexts;

export default languagesTexts;
