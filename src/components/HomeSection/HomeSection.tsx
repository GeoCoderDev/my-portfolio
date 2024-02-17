import Bagde from "../Badge/Bagde";
import Glow from "../Glow/Glow";

const HomeSection = () => {
  return (
    <section
      id="home-section"
      className="w-full xs:h-[85svh] sm:h-[100svh] flex items-center sm:justify-evenly xs:justify-center m-0 xs:pb-[15%] sm:pb-0 xs:flex-col sm:flex-row xs:pt-2 sm:pt-0"
    >
      <div className="xs:h-1/2 sm:h-[100%] flex items-center -border-2 m-0 justify-center relative">
        <Glow className="-border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:h-[110%] sm:h-[52%] md:h-[75%] aspect-square z-[4]" />
        <img
          className="-border-2 aspect-[auto] xs:h-[92.5%] sm:h-[40%] md:h-[57%] z-[5] -border-2"
          src="/images/png/Foto Presentacion.png"
          alt="Foto Geocoder"
        />
      </div>

      <div className="flex flex-col xs:items-center sm:items-start m-0 -w-full p-0 -border-2 border-black xs:m-[5%] sm:m-0">
        <h1 className="-border-2 xs:text-[2rem] sm:text-4xl md:text-5xl xl:text-6xl  xl:my-4 xs:small-height:my-[1.5vh] sm:my-[0.65rem] xs:my-[0.1rem] xs:small-height:text-[8vh]">
          HOLA, SOY
        </h1>
        <h1 className="-border-2 xs:text-[2rem] sm:text-4xl md:text-5xl xl:text-6xl xl:my-4 xs:small-height:my-[1.5vh] sm:my-[0.65rem] xs:my-[0.1rem]  text-cerulean-blue-700 xs:small-height:text-[8vh]">
          JUAN CHAVEZ
        </h1>
        <Bagde
          className="-border-2 xs:small-height: xs:small-height:text-[3.5vh] xs:text-1xl xl:text-2xl tracking-wider font-bold xl:my-4 xs:small-height:my-[1.5vh] xs:small-height:py-[0.7vh] sm:my-[0.65rem] xs:my-[0.1rem] xs:py-1 sm:py-2 px-3 text-white"
          text="Fullstack Developer"
        />

        <div className="-border-2 xs:h-9 md:h-11 xl:h-12 xs:small-height:h-[10vh] flex items-start xl:my-4 xs:small-height:my-[1.5vh] sm:my-[0.65rem] xs:my-[0.8rem] px-2">
          <a
            href="https://github.com/GeoCoderDev"
            className="cursor-pointer aspect-square h-full mr-6 "
          >
            <img
              className="aspect-square h-full"
              src="/images/svg/Logo Github.svg"
              alt="Logo Github"
            />
          </a>

          <a
            className="aspect-square h-full"
            href="https://www.linkedin.com/in/juan-c-a8309a133/"
          >
            <img
              className="aspect-square h-full"
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
