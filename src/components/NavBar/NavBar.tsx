

const NavBar = ({className}: {className: string}) => {
  return (
    <ul className={className}>
      <li className="cursor-pointer">Inicio</li>
      <li className="cursor-pointer">Sobre mí</li>
      <li className="cursor-pointer">Proyectos</li>
      <li className="cursor-pointer">Contacto</li>
    </ul>
  );
};

export default NavBar;
