import Arrow_Down from "../../../public/images/svg/Flecha hacia abajo.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import useI18n from "../../i18n";

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
  const { languageTexts } = useI18n();

  const homeSectionHeight = useSelector(
    (state: RootState) => state.homeSectionHeight
  );

  return (
    <>
      <section
        id="about-section"
        className="w-full flex-auto max-w-screen-xl max-xl:left-0 absolute -border-2 grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] xs:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]  z-[6] max-xs:px-[1.5%] max-md:px-[3.5%]"
      >
        <Fondo />

        {/* <div> */}
        <div className="-border-2 relative z-[7] flex items-center justify-center self-stretch justify-self-center">
          {/* AQUI NO SE PORQUE , PERO EL FLEX HACE QUE EL PSEUDOELEMENTO SE POSICIONE DEBAJO */}
          <div className="flex z-[15] sxs:w-[7rem] xs:w-[11rem] xs:more-double-height:w-[13.5rem] sm:w-[14rem] md:w-[18rem]: lg:w-[20rem] relative aspect-square object-contain after:absolute after:h-[100%] after:rounded-[50%] after:border-[0.3rem] after:border-white after:aspect-square after:z-[7] after:left-[-7%] after:top-[5.5%]">
            <img
              src="/images/png/Foto Presentacion.png"
              alt="Foto Geocoder"
              className="w-full object-contain -border-2 aspect-square rounded-[50%] bg-white z-10"
            />
          </div>
        </div>

        <div
          id="text-about"
          className="z-[16] -border-2 flex flex-col items-center justify-center max-sm:gap-4 gap-6 pt-6 relative self-stretch overflow-auto "
        >
          <h1 className="-border-2 text-white max-sm:text-3xl text-4xl md:self-start ">
            {languageTexts?.["Titulo-About-Section"] ?? ""}
          </h1>

          <p
            id="text-about-description"
            className="scrollbar-stilizado scrollbar-stilizado-white overflow-auto text-white max-sm:text-center text-start sxs:text-[0.77rem] md:text-[0.9rem] max-w-[95%] md:max-w-[85%] md:self-start pr-[0.85rem]"
          >
            {languageTexts?.["Parrafo 1 - About Section"] ?? ""}
            <br />
            <br />
            {languageTexts?.["Parrafo 2 - About Section"] ?? ""}
          </p>

          <a
            id="button-cv"
            href="/pdfs/Juan Chavez - CV.pdf"
            className="md:self-start"
            download={true}
          >
            <button className="text-center text-[1rem] md:text-[1.1rem] bg-white text-black px-3 rounded-md flex items-center transition-all duration-75 py-1 ">
              {languageTexts?.["Texto-boton-descarga-CV"] ?? ""}
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
            top: calc(${homeSectionHeight * 0.854}px);
            height: ${homeSectionHeight}px;                      
            padding-top: calc(${homeSectionHeight * 0.146}px);
            padding-bottom: calc(${homeSectionHeight * 0.15}px);
          }


          @media screen and (max-width:550px){
            #about-section{
              padding-top: calc(${homeSectionHeight * 0.165}px);
            }
          }

          @media screen and (max-width:541px){
            #text-about-description{
              text-align: center;
            }
          }

          #about-section button:hover > img {
            transform: translateY(25%);
          }        

        `}
      </style>
    </>
  );
};

export default AboutSection;
