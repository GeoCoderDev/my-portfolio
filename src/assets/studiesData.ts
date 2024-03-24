import { StudyProps } from "../components/Study/Study";
import platformsLogos from "./../../public/images/svg/DigitalPlatformsIcons.svg";

export const studies: StudyProps[] = [
  {
    date: "2020 - En curso...",
    description: `Actualmente, me encuentro estudiando Ingeniería de Sistemas en la Universidad Nacional de Cañete. Desde el año 2020.

    Durante mi tiempo en la universidad, he adquirido conocimientos fundamentales en áreas clave como programación, bases de datos, redes de computadoras, sistemas operativos y desarrollo de software.`,

    entityName: "Universidad Nacional de Cañete",
    urlImage: "https://res.cloudinary.com/dsyvhet0c/image/upload/f_auto,q_auto:good/v1711294892/undc-logo_l8yjvq.png",
  },
  {
    date: "2022 - En curso...",
    description: `Además de mi educación formal, estoy comprometido con un aprendizaje autodidacta continuo en tecnologías relacionadas con el desarrollo web frontend y backend a través de plataformas digitales como Udemy y Platzi, estoy explorando y profundizando mis conocimientos`,
    entityName: "Plataformas Digitales",
    urlImage: platformsLogos,
  },
];
