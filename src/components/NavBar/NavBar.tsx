import useI18n from "../../i18n";

const NavBar = ({
  className,
  handleOpenNavBar,
}: {
  className: string;
  handleOpenNavBar?: (arg: boolean) => void;
}) => {
  const { languageTexts } = useI18n();

  return (
    <ul
      className={className}
      onClick={() => {
        handleOpenNavBar?.(false);
      }}
    >
      <a href="#home-section">
        <li className="cursor-pointer">{languageTexts?.["Titulo-Home"]}</li>
      </a>
      <a href="#about-section">
        <li className="cursor-pointer">
          {languageTexts?.["Titulo-About-Section"]}
        </li>
      </a>
      <a href="#proyects-section">
        <li className="cursor-pointer">
          {languageTexts?.["Titulo-Proyects-Section"]}
        </li>
      </a>
      <a href="#contact-section">
        <li className="cursor-pointer">
          {languageTexts?.["Titulo-Contact-Section"]}
        </li>
      </a>
    </ul>
  );
};

export default NavBar;
