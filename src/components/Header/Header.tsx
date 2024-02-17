import Logo from "../../../public/images/svg/Logo v2.svg";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const handdleOpenedMenu = () => {
    setOpenedMenu((op) => !op);
  };

  return (
    <header
      id="Header"
      className={`w-[100%] h-[15svh] bg-[#ffffff80] text-black border-solid border-b-[1px] border-black/[.20] flex backdrop-blur-[10px] items-center justify-center px-[2.5vw] select-none sm:fixed xs:sticky top-0 left-0 z-[100] `}
    >
      <a
        className={`xs:h-[40%] sm:h-[60%] flex items-end justify-center /border-2 absolute xs:left-[3.5vw] md:left-[2.5vw]`}
        href="/"
      >
        <img className="h-[100%] bg-cover" src={Logo} alt="Logo Geocoder" />
      </a>

      <NavBar className="xs:hidden md:flex lg:flex md:w-[40%] lg:w-[45%] /border-2 justify-self-center flex items-center justify-between lg:text-[1.2rem] sm:text-[1rem]" />

      <div
        className={`lg:w-36 sm:w-32 /border-2 absolute xs:right-[3.5vw] md:right-[2.5vw] flex items-center justify-between`}
      >
        {/* <button className="py-1 px-3 rounded-md bg-[#3951C2] text-white">Descargar CV</button> */}

        <div className=" bg-gray-300 py-[0.15rem] rounded-xl">
          <LanguageSelect
            id="language1"
            className="outline-none bg-transparent cursor-pointer appearance-none shadow-none /border-2 px-4  sm:text-[1rem] md:text-[1.1rem] xl:text-[1.2rem] xs:hidden md:block"
          />
        </div>

        <ThemeSwitcher
          id="theme1"
          className="xs:hidden md:block w-[3.5rem] aspect-[4/1.1] text-[1rem] bg-gray-300  rounded-lg relative cursor-pointer"
        />

        <button
          className={`aspect-square w-14 flex flex-col items-center justify-center gap-2 /border-2 py-1 rounded-[50%] xs:flex md:hidden z-[102]`}
          onClick={handdleOpenedMenu}
        >
          <div
            className={`bg-black w-[60%] h-1 origin-left rounded-md transition-all duration-100 ${
              openedMenu! && "rotate-45 bg-white"
            }`}
          ></div>
          <div
            className={`bg-black w-[60%] h-1 origin-left rounded-md transition-all duration-100 ${
              openedMenu! && "opacity-0 bg-white"
            }`}
          ></div>
          <div
            className={`bg-black w-[60%] h-1 origin-left rounded-md transition-all duration-100 ${
              openedMenu! && "-rotate-45 bg-white"
            }`}
          ></div>
        </button>
      </div>

      <div
        className={`flex flex-col items-center justify-start transition-all duration-200 bg-black text-white absolute top-0 left-0 w-[100%] h-[100dvh]  ${
          openedMenu ? "animate-in fade-in-0 duration-50 ease-linear" : "opacity-0 z-[-2] hidden"
        }`}
      >
        <NavBar
          className={`flex flex-col items-center text-3xl justify-between text-white w-[100%] h-[60%] mt-[15vh]`}
        />
        <div className="flex items-center justify-evenly w-full h-[15%] border-t-[1px] border-[#ffffff50] mt-[15%]">
          <div className=" bg-white py-[0.15rem] rounded-xl text-black">
            <LanguageSelect
              id="language1"
              className="outline-none bg-transparent cursor-pointer appearance-none shadow-none /border-2 px-4  sm:text-[1rem] md:text-[1.1rem] xl:text-[1.2rem]"
            />
          </div>

          <ThemeSwitcher
            id="theme2"
            className="w-[4.2rem] aspect-[4/1.1] text-[1.6rem] bg-gray-600 rounded-lg relative cursor-pointer"
            ballColor="white"
            iconColor="black"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
