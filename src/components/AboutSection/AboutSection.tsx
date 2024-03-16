import "./AboutSection.css";
import Arrow_Down from "../../../public/images/svg/Flecha hacia abajo.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Fondo = () => (
  <svg
    className="w-[100%] h-[100%] absolute left-0 top-0 z-[6]"
    width="1728"
    height="909"
    viewBox="0 0 1728 909"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M863 132L0 1V908L863 799.5L1728 908V1L863 132Z"
      fill="url(#paint0_linear_37_2)"
      stroke="#4057CC"
    />
    <defs>
      <linearGradient
        id="paint0_linear_37_2"
        x1="863.75"
        y1="1"
        x2="863.75"
        y2="908"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3A55CC" />
        <stop offset="1" stopColor="#4036AD" stopOpacity="0.79" />
      </linearGradient>
    </defs>
  </svg>
);

const AboutSection = () => {
  // const headerHeight = useSelector((state: RootState) => state.headerHeight);

  const homeSectionHeight = useSelector(
    (state: RootState) => state.homeSectionHeight
  );

  return (
    <>
      <section
        id="about-section"
        className="w-full absolute left-0 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] px-[3%] z-[6]"
      >
        <Fondo />

        {/* <div> */}
        <div className="-border-2 relative z-[7] flex items-center justify-center self-stretch justify-self-center">
          {/* AQUI NO SE PORQUE , PERO EL FLEX HACE QUE EL PSEUDOELEMENTO SE POSICIONE DEBAJO */}
          <div className="flex z-[15] sxs:w-[7rem] xs:w-[11rem] sm:w-[14rem] md:w-[18rem]: lg:w-[20rem] relative aspect-square object-contain after:absolute after:h-[100%] after:rounded-[50%] after:border-[0.3rem] after:border-white after:aspect-square after:z-[7] after:left-[-7%] after:top-[5.5%]">
            <img
              src="/images/png/Foto Presentacion.png"
              alt="Foto Geocoder"
              className="w-full object-contain -border-2 aspect-square rounded-[50%] bg-white z-10"
            />
          </div>
        </div>

        <div
          id="text-about"
          className="scrollbar-stilizado scrollbar-stilizado-white z-[16] -border-2 flex flex-col items-center justify-center max-sm:gap-4 gap-6 py-2 relative self-stretch overflow-auto"
        >
          <h1 className="-border-2 text-white max-sm:text-3xl text-4xl md:self-start ">
            Sobre mi
          </h1>

          <p className="text-white max-sm:text-center text-start sxs:text-[0.8rem] md:text-[1rem]">
            ¡Soy Juan! actualmente me encuentro estudiando Ing. de Sistemas, y
            desde el 2022 me empeze a interesar en todo lo que es la web, por lo
            cual actualmente domino muchas tecnologias relacionadas con esta,
            como HTML, CSS, Javascript, React, Node, etc.
          </p>

          <p className="text-white max-sm:text-center text-start sxs:text-[0.8rem] md:text-[1rem]">
            Así que, si estás buscando un desarrollador web apasionado, creativo
            y comprometido, ¡has llegado al lugar correcto! Estoy listo para
            sumergirme en tu próximo proyecto y darle vida a tus ideas más
            audaces.
          </p>

          <a href="/pdfs/MI CV.pdf" className="md:self-start" download={true}>
            <button className="text-center text-[1rem] md:text-[1.3rem] bg-white text-black px-3 rounded-md flex items-center transition-all duration-75 py-1 max-lg:landscape:text-[0.8rem] ">
              Descargar CV
              <img
                className="h-1/2 aspect-square object-contain ml-2 transition-all duration-75"
                src={Arrow_Down}
                alt="flecha hacia abajo"
              />
            </button>
          </a>
        </div>
        {/* </div> */}
      </section>

      <style>
        {`
          #about-section{
            padding-top: calc(${homeSectionHeight * 0.146}px);
            padding-bottom: calc(${homeSectionHeight * 0.12}px);
            top: calc(${homeSectionHeight * 0.854}px);
            height: ${homeSectionHeight}px;                      
          }

        `}
      </style>
    </>
  );
};

export default AboutSection;
