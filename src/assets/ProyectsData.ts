import { ProyectProps } from "../components/Proyect/Proyect";
import { allTechIcons } from "./TechIconsData/TechIconsData";
import sinth_preview from "./../../public/images/png/2O-SINTH-Preview.png";
import sinth_api_preview from "./../../public/images/png/2O-SINTH-API-Preview.png";
import temchat_preview from "./../../public/images/png/TEMCHAT-Preview.png";
import optimizer_io_preview from "./../../public/images/png/Optimizer-IO-Preview.png";

export const proyects: ProyectProps[] = [
  {
    proyectName: "2O-SINTH",
    description: [
      "2O-SINTH es mi primer proyecto creado con ayuda de la Web Audio API. Es una aplicación, interactiva y atractiva que hice basandome en el programa FL Studio, que permite al usuario explorar y experimentar con los diferentes controles clickables, deslizantes, giratorios, etc. para crear diferentes sonidos y hacer melodias con esos sonidos, adicionalmente se pueden hacer ritmos tambien.",
      "Con este proyecto aprendí mucho de HTML y CSS(Selectores avanzados, flexbox, media queries, etc), a usar varios tipos de eventos a profundidad haciendo uso de su respectivo objeto Event, lo basico del elemento <canvas>, hacer uso de una API relativamente basica(CRUD) y muchos otros conocimientos que fueron necesarios para realizar este proyecto.",
      "2O-SINTH tambien cuenta con un backend(una API sencilla) que permite hacer autenticacion de usuarios , guardar datos de cada usuario, etc. Lo cual considero que es un proyecto aparte y seria el siguiente.",
    ],
    proyectImage: sinth_preview,
    altProyectImage: "Imagen del proyecto 2O-SINTH en producción",
    githubRepoLink: "https://github.com/GeoCoderDev/2O-SINTH",
    deployLink: "https://geocoderdev.github.io/2O-SINTH/",
    techIcons: [
      allTechIcons["HTML"],
      allTechIcons["CSS"],
      allTechIcons["JavaScript"],
    ],
  },
  {
    proyectName: "2O-SINTH API",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quas amet molestiae et alias ullam, unde veritatis quidem nulla doloremque iste laborum quos provident velit. Quos obcaecati nemo accusantium provident.",
    proyectImage: sinth_api_preview,
    altProyectImage: "Imagen del proyecto TEMCHAT en producción",
    githubRepoLink: "https://github.com/GeoCoderDev/2O-SINTH-API",
    deployLink: "https://twoo-sinth-api.onrender.com/",
    techIcons: [
      allTechIcons["JavaScript"],
      allTechIcons["Node"],
      allTechIcons["Express"],
      allTechIcons["Sequelize"],
      allTechIcons["MySQL"],
      allTechIcons["JWT"],
    ],
    nota: "Esta API, con la que se comunica 2O-SINTH para interactuar con la base de datos, esta desplegada con el plan gratuito de Render por lo cual es posible que la respuesta de la primera petición que se realice a la API tarde alrededor de 1 minuto.",
  },
  {
    proyectName: "TEMCHAT",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quas amet molestiae et alias ullam, unde veritatis quidem nulla doloremque iste laborum quos provident velit. Quos obcaecati nemo accusantium provident.",
    proyectImage: temchat_preview,
    altProyectImage: "Imagen del proyecto TEMCHAT en producción",
    githubRepoLink: "https://github.com/GeoCoderDev/TEMCHAT.git",
    deployLink: "https://temchat.onrender.com/",
    techIcons: [
      allTechIcons["HTML"],
      allTechIcons["CSS"],
      allTechIcons["JavaScript"],
      allTechIcons["Node"],
      allTechIcons["Express"],
      allTechIcons["EJS"],
      allTechIcons["Socket IO"],
      allTechIcons["MongoDB"],
    ],
    nota: "El servidor de TEMCHAT se encuentra desplegado con el plan gratuito de Render por lo cual es posible que en la primera petición al servidor, este  demore alrededor de 1 minuto en dar respuesta.",
  },
  {
    proyectName: "OPTIMIZER IO",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quas amet molestiae et alias ullam, unde veritatis quidem nulla doloremque iste laborum quos provident velit. Quos obcaecati nemo accusantium provident.",
    proyectImage: optimizer_io_preview,
    altProyectImage: "Imagen de proyecto OPTIMIZER IO en producción",
    githubRepoLink: "https://github.com/GeoCoderDev/Optimizer-IO.git",
    deployLink: "",
    techIcons: [
      allTechIcons["React"],
      allTechIcons["CSS"],
      allTechIcons["Tailwind"],
      allTechIcons["Redux"],
      allTechIcons["Typescript"],
      allTechIcons["Figma"],
      allTechIcons["Next"],
    ],
  },
];
