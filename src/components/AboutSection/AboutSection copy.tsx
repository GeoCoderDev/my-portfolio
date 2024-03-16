import "./AboutSection.css";
import Arrow_Down from "../../../public/images/svg/Flecha hacia abajo.svg";

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
  return (
    <section
      id="about-section"
      className="w-[100%] h-[100vh] absolute sxs:top-[84.3svh] sm:top-[85.4svh] z-[6] pt-[14.75vh] pb-[12vh] flex sxs:flex-col md:flex-row items-center justify-evenly "
    >
      <Fondo />
      <div className="z-[7] sxs:w-full md:w-[40%] md:h-[72%] sm:h-[35%] sxs:h-[25%] flex items-center justify-center -border-2 relative -border-2">
        {/* <div className="absolute border-[4px] rounded-[50%] w-[60%] aspect-square"></div> */}
        <div
          id="about-photo"
          className="z-[15] relative h-[100%] bg-white -p-2 flex rounded-[50%] aspect-square object-contain after:absolute after:h-[120%] after:rounded-[50%] xs:after:border-[2.5px] sm:after:border-[4px] after:border-white after:border-solid after:top-[10%] after:left-[-7%] after: after:aspect-square after:content-[''] after:z-[7]"
          style={{ boxShadow: "0 0 16px 10px #00000025" }}
        >
          <img
            src="/images/png/Foto Presentacion.png"
            alt="Foto Geocoder"
            className="w-full object-contain border-2 rounded-[50%] bg-white z-10"
          />
        </div>
      </div>

      <div className="text-white z-[7]  font-thin sxs:w-[90%] md:w-[45%] items-center -border-2 sxs:flex sm:block flex-col">
        <h1 className="sxs:text-center sm:text-start my-2 lg:my-5 sxs:text-[10vw] xs:text-3xl  sxs:leading-8 md:text-4xl max-lg:landscape:text-3xl">
          Sobre Mi
        </h1>
        <p className="sxs:text-[2.5vw] sxs:leading-[5.2vw] sxs:text-center xs:leading-6 sm:text-start my-2 lg:my-5  xs:text-[0.9rem] sm:text-[0.8rem] md:text-[0.9rem] -lg:text-[1.05rem] xl:text-[1.15rem] xl:leading-7 max-lg:landscape:text-[0.65rem] max-lg:landscape:leading-5">
          ¡Soy Juan! actualmente me encuentro estudiando Ing. de Sistemas, y
          desde el 2022 me empeze a interesar en todo lo que es la web, por lo
          cual actualmente domino muchas tecnologias relacionadas con esta, como
          HTML, CSS, Javascript, React, Node, etc.
        </p>

        <p className="sxs:text-[2.5vw] sxs:leading-[5.2vw] sxs:text-center xs:leading-6 sm:text-start my-2 lg:my-5  xs:text-[0.9rem] sm:text-[0.8rem] md:text-[0.9rem] -lg:text-[1.05rem] xl:text-[1.15rem] xl:leading-7 max-lg:landscape:text-[0.65rem] max-lg:landscape:leading-5">
          Así que, si estás buscando un desarrollador web apasionado, creativo y
          comprometido, ¡has llegado al lugar correcto! Estoy listo para
          sumergirme en tu próximo proyecto y darle vida a tus ideas más
          audaces.
        </p>
        <a href="/pdfs/MI CV.pdf" download={true}>
          <button className=" sxs:text-[3vw] xs:text-[1rem] md:text-[1.2rem] xs:text-center sm:text-start my-2 lg:my-5 bg-white text-black px-3 rounded-md flex items-center transition-all duration-75 py-1 max-lg:landscape:text-[0.8rem]">
            Descargar CV
            <img
              className="h-1/2 aspect-square object-contain ml-2 transition-all duration-75"
              src={Arrow_Down}
              alt="flecha hacia abajo"
            />
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
