import { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setLanguage } from "../../state/language/language";
import { LanguageAvailable } from "../../interfaces/LanguageAvailable";

interface LanguageSelectProps {
  id: string;
  className: string;
}

const LanguageSelect = ({ id, className }: LanguageSelectProps) => {
  const language = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setLanguage({ value: e.target.value as LanguageAvailable }));
  };

  return (
    <select
      name={id}
      id={id}
      className={className}
      value={language}
      onChange={handleChange}
    >
      <option className="bg-transparent shadow-none" value="es">
        ES
      </option>
      <option className="bg-transparent shadow-none" value="en">
        EN
      </option>
    </select>
  );
};

export default LanguageSelect;
