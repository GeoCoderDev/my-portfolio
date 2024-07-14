import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const useI18n = () => {
  const language = useSelector((state: RootState) => state.language);

  const [languageTexts, setLanguageTexts] = useState<{
    [key: string]: string | string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadLanguageTexts = async () => {
      try {
        setLoading(true);
        const texts = await import(`./${language.toLowerCase()}.json`);
        setLanguageTexts(texts.default);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    loadLanguageTexts();
  }, [language]);

  return { languageTexts, loading, error };
};

export default useI18n;
