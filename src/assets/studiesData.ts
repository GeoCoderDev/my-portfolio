import { StudyProps } from "../components/Study/Study";
import platformsLogos from "./../../public/images/svg/DigitalPlatformsIcons.svg";

export const studies: StudyProps[] = [
  {
    date: "Fecha-Estudio-1",
    description: "Descripcion-Estudio-1",
    entityName: "Entidad-Estudio-1",
    //SERVICIO DE OPTIMIZACION - CLOUDINARY
    urlImage: "https://res.cloudinary.com/dsyvhet0c/image/upload/f_auto,q_auto:good/v1711294892/undc-logo_l8yjvq.png",
  },
  {
    date: "Fecha-Estudio-2",
    description: "Descripcion-Estudio-2",
    entityName: "Entidad-Estudio-2",
    urlImage: platformsLogos,
  },
];
