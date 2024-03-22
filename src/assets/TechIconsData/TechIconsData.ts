import HTMLLogo from "./../../../public/images/svg/Tech Icons/LogoHTML.svg";
import CSSLogo from "./../../../public/images/svg/Tech Icons/LogoCSS.svg";
import JavascriptLogo from "./../../../public/images/svg/Tech Icons/LogoJavascript.svg";
import NodeLogo from "./../../../public/images/svg/Tech Icons/LogoNode.svg";
import SocketIOLogo from "./../../../public/images/svg/Tech Icons/LogoSocketIo.svg";
import LogoExpress from "./../../../public/images/svg/Tech Icons/ExpressLogo.svg";
import LogoEJS from "./../../../public/images/svg/Tech Icons/LogoEjs.svg";
import LogoGit from "./../../../public/images/svg/Tech Icons/GitLogo.svg";
import LogoCSharp from "./../../../public/images/svg/Tech Icons/CSharpLogo.svg";
import LogoReact from "./../../../public/images/svg/Tech Icons/ReactLogo.svg";
import LogoFigma from "./../../../public/images/svg/Tech Icons/LogoFigma.svg";
import LogoJWT from "./../../../public/images/svg/Tech Icons/LogoJwt.svg";
import LogoAngular from "./../../../public/images/svg/Tech Icons/LogoAngular.svg";
import LogoBootstrap from "./../../../public/images/svg/Tech Icons/LogoBootstrap.svg";
import LogoLess from "./../../../public/images/svg/Tech Icons/LessLogo.svg";
import LogoMySQL from "./../../../public/images/svg/Tech Icons/LogoMysql.svg";
import LogoSequelize from "./../../../public/images/svg/Tech Icons/SequelizeLogo.svg";
import LogoTypescript from "./../../../public/images/svg/Tech Icons/LogoTypescript.svg";
import LogoTailwind from "./../../../public/images/svg/Tech Icons/LogoTailwind.svg";
import LogoMongoDB from "./../../../public/images/svg/Tech Icons/MongoDBLogo.svg";
import LogoRedux from "./../../../public/images/svg/Tech Icons/ReduxLogo.svg";
import LogoSass from "./../../../public/images/svg/Tech Icons/SassLogo.svg";
import LogoNext from "./../../../public/images/svg/Tech Icons/LogoNext.svg";

export interface TechIcon {
  name: string;
  urlImg: string;
}

type ObjectWithProperties<T> = {
  [key: string]: T;
};

export const allTechIcons: ObjectWithProperties<TechIcon> = {
  HTML: { name: "HTML", urlImg: HTMLLogo },
  CSS: { name: "CSS", urlImg: CSSLogo },
  JavaScript: { name: "JavaScript", urlImg: JavascriptLogo },
  Node: { name: "Node", urlImg: NodeLogo },
  "Socket IO": { name: "Socket IO", urlImg: SocketIOLogo },
  Express: { name: "Express", urlImg: LogoExpress },
  EJS: { name: "Plantillas EJS", urlImg: LogoEJS },
  Git: { name: "Git", urlImg: LogoGit },
  "C#": { name: "C#", urlImg: LogoCSharp },
  React: { name: "React", urlImg: LogoReact },
  Figma: { name: "Figma", urlImg: LogoFigma },
  JWT: { name: "JSON Web Tokens", urlImg: LogoJWT },
  Angular: { name: "Angular", urlImg: LogoAngular },
  Bootstrap: { name: "Bootstrap", urlImg: LogoBootstrap },
  Less: { name: "Less", urlImg: LogoLess },
  MySQL: { name: "Base de datos: MySQL", urlImg: LogoMySQL },
  Sequelize: { name: "ORM: Sequelize", urlImg: LogoSequelize },
  Typescript: { name: "Typescript", urlImg: LogoTypescript },
  Tailwind: { name: "Tailwind", urlImg: LogoTailwind },
  MongoDB: { name: "Base de datos: MongoDB", urlImg: LogoMongoDB },
  Redux: { name: "Gestor de Estado: Redux", urlImg: LogoRedux },
  SASS: { name: "Sass", urlImg: LogoSass },
  Next: { name: "Next", urlImg: LogoNext },
};

export const allTechIconsArray: TechIcon[] = [];

for (const key in allTechIcons) {
  allTechIconsArray.push(allTechIcons[key]);
}
