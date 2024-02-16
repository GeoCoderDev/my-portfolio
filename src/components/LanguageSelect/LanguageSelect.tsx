interface LanguageSelectProps {
  id: string;
  className: string;
}

const LanguageSelect = ({ id, className }: LanguageSelectProps) => {
  return (
    <select
      name={id}
      id={id}
      className={className}
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
