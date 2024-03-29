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
      "Con este proyecto aprendí mucho de HTML y CSS(Selectores avanzados, flexbox, media queries, etc), a usar varios tipos de eventos a profundidad haciendo uso de su respectivo objeto Event, lo basico del elemento <canvas>, hacer uso de una API relativamente basica(CRUD), a hacer formularios para autenticación y registro de usuarios y muchos otros conocimientos que fueron necesarios para realizar este proyecto.",
      "Como se menciono 2O-SINTH tambien cuenta con un backend(una API sencilla) que permite hacer autenticacion de usuarios , guardar datos de cada usuario, etc. Lo cual considero que es un proyecto aparte y seria el que sigue en esta sección.",
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
    nota: "La API, con la que se comunica 2O-SINTH para interactuar con la base de datos, esta desplegada con el plan gratuito de Render por lo cual es posible que la respuesta de la primera petición que se realice a la API tarde alrededor de 1 minuto.",
  },
  {
    proyectName: "2O-SINTH API",
    description: [
      "Este proyecto nació de la necesidad de proporcionar autenticación a los usuarios de 2O-SINTH y permitirles crear cuentas en la aplicación. Esto con el proposito de brindar una manera de almacenamiento y gestión de melodías, ritmos, sonidos y otros datos relacionados con la aplicación en su base de datos MySQL.",
      "La API está diseñada para permitir que los usuarios inicien sesión con sus credenciales únicas, como su nombre de usuario y contraseña. Todo esto permite a los usuarios guardar sus creaciones y acceder a ellas en cualquier momento y desde cualquier dispositivo y de forma segura.",
    ],
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
  },
  {
    proyectName: "TEMCHAT",
    description: [
      "Temchat es un proyecto que desarrolle para chatear con desconocidos, de manera similar a la popular aplicación web Omegle que tambien posee esta funcionalidad, con la diferencia que Temchat le permite la posibilidad de enviar SOLICITUDES DE CHAT con cierto tiempo limite, buscar usuarios por su nombre entre otras funcionalidades.",
      "Este proyecto me permitio aprender mucho mas del backend como usar web sockets, trabajar con bases de datos no relacionales, mostrar datos(usuarios buscados en este caso) solicitados por el usuario a la base de datos MongoDB, etc, que le invito a probar usted mismo viendo el video corto de demostración de uso de la aplicación adjunto en la imagen."
    ],
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
    deployLink: "https://optimizer-io.vercel.app/",
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
