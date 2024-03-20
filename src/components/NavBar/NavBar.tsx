const NavBar = ({
  className,
  handleOpenNavBar,
}: {
  className: string;
  handleOpenNavBar?: (arg: boolean) => void;
}) => {
  return (
    <ul
      className={className}
      onClick={() => {
        handleOpenNavBar?.(false);
      }}
    >
      <a href="#home-section">
        <li className="cursor-pointer">Inicio</li>
      </a>
      <a href="#about-section">
        <li className="cursor-pointer">Sobre mí</li>
      </a>
      <a href="#proyects-section">
        <li className="cursor-pointer">Proyectos</li>
      </a>
      <a href="#">
        <li className="cursor-pointer">Contacto</li>
      </a>
    </ul>
  );
};

export default NavBar;
