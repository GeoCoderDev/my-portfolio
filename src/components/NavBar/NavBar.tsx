import { useSelector } from "react-redux";

import { RootState } from "../../store";
import languagesTexts from "../../i18n";

const NavBar = ({
  className,
  handleOpenNavBar,
}: {
  className: string;
  handleOpenNavBar?: (arg: boolean) => void;
}) => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <ul
      className={className}
      onClick={() => {
        handleOpenNavBar?.(false);
      }}
    >
      <a href="#home-section">
        <li className="cursor-pointer">
          {languagesTexts[language]["Titulo-Home"]}
        </li>
      </a>
      <a href="#about-section">
        <li className="cursor-pointer">
          {languagesTexts[language]["Titulo-About-Section"]}
        </li>
      </a>
      <a href="#proyects-section">
        <li className="cursor-pointer">
          {languagesTexts[language]["Titulo-Proyects-Section"]}
        </li>
      </a>
      <a href="#contact-section">
        <li className="cursor-pointer">
          {languagesTexts[language]["Titulo-Contact-Section"]}
        </li>
      </a>
    </ul>
  );
};

export default NavBar;
