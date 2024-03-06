import Bagde from "../Badge/Bagde";
import Glow from "../Glow/Glow";

const HomeSection = () => {
  return (
    <section
      id="home-section"
      className="w-full sxs:h-[85svh] sm:h-[100svh] flex items-center sm:justify-evenly justify-center m-0 sxs:pb-[15%] sm:pb-0 portrait:flex-col landscape:flex-row -border-2 sxs:pt-2 sm:pt-0"
    >
      <div className="-border-2 sxs:h-1/2 max-lg:landscape:h-full sm:h-[100%] flex items-center -border-2 m-0 justify-center relative">
        <Glow className="-border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sxs:h-[110%] sm:h-[52%] md:h-[75%] aspect-square z-[4]" />
        <img
          className="-border-2 aspect-[auto] sxs:h-[92.5%] sm:h-[40%] md:h-[57%] max-lg:landscape:h-[60%] z-[5] -border-2"
          src="/images/png/Foto Presentacion.png"
          alt="Foto Geocoder"
        />
      </div>

      <div className="flex flex-col sxs:items-center sm:items-start m-0 -w-full p-0 -border-2 border-black sxs:m-[5%] sm:m-0">
        <h1 className="max-lg:landscape:my-[1vw] -border-2 sxs:text-[2rem] sm:text-4xl md:text-5xl xl:text-6xl  xl:my-4 sxs:small-height:my-[1.5vh] sm:my-[0.65rem] sxs:my-[0.1rem] sxs:small-height:text-[6vh] max-lg:landscape:text-[3.5vw]">
          HOLA, SOY
        </h1>
        <h1 className="max-lg:landscape:my-[1vw] -border-2 sxs:text-[2rem] sm:text-4xl md:text-5xl xl:text-6xl xl:my-4 sxs:small-height:my-[1.5vh] sm:my-[0.65rem] sxs:my-[0.1rem]  text-cerulean-blue-700 sxs:small-height:text-[6vh] max-lg:landscape:text-[3.5vw]   ">
          JUAN CHAVEZ
        </h1>
        <Bagde
          className="-border-2 tracking-wider font-bold xl:my-4 sxs:small-height:my-[1.5vh] sxs:small-height:py-[0.7vh] max-lg:landscape:my-[1vw] sm:my-[0.65rem] sxs:my-[0.1rem] sxs:py-1 sm:py-2 px-3 text-white max-lg:landscape:text-[1.5vw] sxs:small-height:text-[3.5vh] sxs:text-1xl xl:text-2xl"
          text="Fullstack Developer"
        />

        <div className="-border-2 sxs:h-9 md:h-11 xl:h-12 sxs:small-height:h-[10vh] flex items-start xl:my-4 sxs:small-height:my-[1.5vh] max-lg:landscape:h-[9vh] sm:my-[0.65rem] sxs:my-[0.8rem] px-2 max-lg:landscape:my-[1vw]">
          <a
            href="https://github.com/GeoCoderDev"
            className="cursor-pointer aspect-square h-full mr-6 "
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
  );
};

export default HomeSection;
