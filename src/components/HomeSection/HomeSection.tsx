import "./HomeSection.css";
import Bagde from "../Badge/Bagde";
import Glow from "../Glow/Glow";
import { useEffect, useState } from "react";

const factorDeCrecimiento = 1.2;

const HomeSection = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(60);

  useEffect(() => {
    const ResizeHeaderObserver = new ResizeObserver((entries) =>
      entries.forEach((entry) =>
        setHeaderHeight(parseFloat(getComputedStyle(entry.target).height))
      )
    );

    const header = document.getElementById("Header");
    ResizeHeaderObserver.observe(header!);

    return () => ResizeHeaderObserver.unobserve(header!);
  }, []);

  return (
    <>
      <section
        id="home-section"
        className={`-border-2 -bg-black border-purple-500 flex flex-wrap w-full items-center content-evenly justify-center sm:justify-evenly portrait:px-8`}
      >
        <div className="-border-2 border-green-500 sxs:h-64 lg:h-[21rem] xl:h-[28rem] flex items-center justify-center relative">
          <Glow className="-border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square z-[4] sxs:h-[110%] sm:h-full lg:h-[120%]" />
          <img
            className="aspect-auto h-full z-[5]"
            src="/images/png/Foto Presentacion.png"
            alt="Foto Geocoder"
          />
        </div>

        <div className="flex items-center md:items-start justify-center gap-2 lg:gap-5 xl:gap-8 flex-col -border-2 order-2">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl -border-2 text-center">
            HOLA, SOY
          </h1>
          <h1 className="text-3xl lg:text-5xl xl:text-6xl -border-2 text-cerulean-blue-700 text-center">
            JUAN CHAVEZ
          </h1>
          <Bagde
            className="text-white font-bold px-2 py-1 text-sm lg:text-xl xl:text-2xl"
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
            padding-top: 3vh;
            padding-bottom: 3vh;
            min-height: 45svh;
          }

          @media (max-height: 1000px){
            #home-section{                        
              min-height: calc(100svh - ${headerHeight}px);                  
            }
          }

          @media (min-width:480px){
            #home-section{                              
              padding-top: ${headerHeight * factorDeCrecimiento}px;
              padding-bottom: ${headerHeight * factorDeCrecimiento}px;

            }

            @media (max-height: 1000px){
              #home-section{                            
                min-height: 100svh;           
              }
            }
          }        
        `}
      </style>
    </>
  );
};

export default HomeSection;
