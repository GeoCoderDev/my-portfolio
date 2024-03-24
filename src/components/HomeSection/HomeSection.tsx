import { useDispatch, useSelector } from "react-redux";
import Bagde from "../Badge/Bagde";
import Glow from "../Glow/Glow";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { setHomeSectionHeight } from "../../state/homeSectionHeight/homeSectionHeightSlice";

const factorDeCrecimiento = 1.2;

const HomeSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const homeSectionHeight = useSelector(
    (state: RootState) => state.homeSectionHeight
  );

  useEffect(() => {
    const homeSection = document.getElementById("home-section");

    const ResizeHomeSectionObserver = new ResizeObserver((entries) =>
      entries.forEach((entry) => {
        dispatch(
          setHomeSectionHeight({
            value: parseFloat(getComputedStyle(entry.target).height),
          })
        );
      })
    );

    ResizeHomeSectionObserver.observe(homeSection!);

    // window.addEventListener("resize", () => {
    //   if (!homeSection) return;
    //   dispatch(
    //     setHomeSectionHeight({
    //       value: Number(getComputedStyle(homeSection).height),
    //     })
    //   );
    // });

    return () => ResizeHomeSectionObserver.unobserve(homeSection!);
  }, []);

  const headerHeight = useSelector((state: RootState) => state.headerHeight);

  return (
    <>
      <section
        id="home-section"
        className={` border-2 -bg-black border-purple-500 flex flex-wrap min-w-min w-full max-w-screen-xl items-center content-evenly justify-center sm:justify-evenly portrait:px-8 py-[14.6%]`}
      >
        <div className="-border-2 border-green-500 sxs:h-[12rem] xs:h-[16.5rem] md:h-[18rem] lg:h-[21rem] xl:h-[28rem] flex items-center justify-center relative">
          <Glow className="-border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square z-[4] sxs:h-full lg:h-[120%] xl:h-[125%]" />
          <img
            className="aspect-auto h-full z-[5]"
            src="/images/png/Foto Presentacion.png"
            alt="Foto Geocoder"
          />
        </div>

        <div className="flex items-center md:items-start justify-center gap-3 lg:gap-5 xl:gap-8 flex-col -border-2 order-2">
          <h1 className="text-[1.9rem] leading-8 lg:text-5xl xl:text-6xl -border-2 text-center">
            HOLA, SOY
          </h1>
          <h1 className="text-[1.9rem] leading-8 lg:text-5xl xl:text-6xl -border-2 text-cerulean-blue-700 text-center">
            JUAN CHAVEZ
          </h1>
          <Bagde
            className="text-white text-center font-bold px-2 py-1 text-[1rem] lg:text-xl xl:text-2xl"
            text="Fullstack Developer"
          />

          <div className="-border-2 flex items-start sxs:h-10 lg:h-12 xl:h-14 px-1 gap-6">
            <a
              href="https://github.com/GeoCoderDev"
              className="cursor-pointer aspect-square h-full"
            >
              <img
                className="aspect-square h-full transition-all duration-75 hover:rotate-[20deg]"
                src="/images/svg/Logo Github.svg"
                alt="Logo Github"
              />
            </a>

            <a
              className="aspect-square h-full"
              href="https://www.linkedin.com/in/juan-c-a8309a133/"
            >
              <img
                className="aspect-square h-full transition-all duration-75 hover:rotate-[20deg]"
                src="/images/svg/Logo LinkedIn.svg"
                alt="Logo LinkedIn"
              />
            </a>
          </div>
        </div>
      </section>

      <style>
        {`

          #home-section{
            padding-top:  ${
              window.visualViewport?.height &&
              homeSectionHeight > window.visualViewport?.height
                ? headerHeight * factorDeCrecimiento
                : headerHeight * 1
            }px;
            padding-bottom: 12%;
            min-height: 50svh;
          }

          @media (max-height: 1000px){
            #home-section{                        
              min-height: 100svh;                  
            }
          }


          @media (min-width:480px){

            #home-section{                              
              padding-top: ${headerHeight * factorDeCrecimiento}px;
              padding-bottom: ${headerHeight * factorDeCrecimiento}px;
  
            }
          }        
        `}
      </style>
    </>
  );
};

export default HomeSection;
