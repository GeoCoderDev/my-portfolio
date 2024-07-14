import { ProyectProps } from "../components/Proyect/Proyect";
import { allTechIcons } from "./TechIconsData/TechIconsData";
import sinth_preview from "./../../public/images/png/2O-SINTH-Preview.png";
import sinth_api_preview from "./../../public/images/png/2O-SINTH-API-Preview.png";
import temchat_preview from "./../../public/images/png/TEMCHAT-Preview.png";
import optimizer_io_preview from "./../../public/images/png/Optimize-IO-preview.png";
import aula_fronted_view from "./../../public/images/svg/Aula-Virtual-Preview.svg";

export const proyects: ProyectProps[] = [
  {
    proyectName: "2O-SINTH",
    description: "Descripcion-Proyecto-1",
    proyectImage: sinth_preview,
    altProyectImage: "Imagen del proyecto 2O-SINTH en producción",
    githubRepoLink: "https://github.com/GeoCoderDev/2O-SINTH",
    deployLink: "https://geocoderdev.github.io/2O-SINTH/",
    techIcons: [
      allTechIcons["HTML"],
      allTechIcons["CSS"],
      allTechIcons["JavaScript"],
    ],
    nota: "Nota-Proyecto-1",
  },
  {
    proyectName: "2O-SINTH API",
    description: "Descripcion-Proyecto-2",
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
      allTechIcons["Postman"],
    ],
  },
  {
    proyectName: "TEMCHAT",
    description: "Descripcion-Proyecto-3",
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
    nota: "Nota-Proyecto-3",
  },
  {
    proyectName: "OPTIMIZER IO",
    description: "Descripcion-Proyecto-4",
    proyectImage: optimizer_io_preview,
    altProyectImage: "Imagen de proyecto OPTIMIZER IO en producción",
    githubRepoLink: "https://github.com/GeoCoderDev/Optimizer-IO.git",
    deployLink: "https://optimizer-io.vercel.app/",
    nota: "Nota-Proyecto-4",
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
  {
    proyectName: "Aula Virtual",
    description: "Descripcion-Proyecto-5",
    proyectImage: aula_fronted_view,
    deployLink: "https://aula-virtual-jbsf.com/",
    altProyectImage: "Imagen de proyecto de Aula Virtual",
    githubRepoLink: "https://github.com/GeoCoderDev/aula-virtual-fronted.git",
    githubRepoLink2: "https://github.com/GeoCoderDev/aula-virtual-backend.git",
    nota: "Nota-Proyecto-5",
    techIcons: [
      allTechIcons["Figma"],
      allTechIcons["CSS"],
      allTechIcons["Tailwind"],
      allTechIcons["React"],
      allTechIcons["Typescript"],
      allTechIcons["Redux"],
      allTechIcons["Next"],
      allTechIcons["PHP"],
      allTechIcons["Composer"],
      allTechIcons["Postman"],
    ],
  },
];
