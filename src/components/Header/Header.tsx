import Logo from "../../../public/images/svg/Logo v2.svg";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { setHeaderHeight } from "../../state/headerHeight/headerHeightSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const handdleOpenedMenu = () => {
    setOpenedMenu((op) => !op);
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const ResizeHeaderObserver = new ResizeObserver((entries) =>
      entries.forEach((entry) =>
        dispatch(
          setHeaderHeight({
            value: parseFloat(getComputedStyle(entry.target).height),
          })
        )
      )
    );

    const header = document.getElementById("Header");

    ResizeHeaderObserver.observe(header!);

    return () => ResizeHeaderObserver.unobserve(header!);
  }, []);

  return (
    <header
      id="Header"
      className={`py-[3vh] px-[2vw] z-[100] grid bg-[#ffffff80] w-full fixed top-0 left-0 border-solid border-b-[1px] border-black/[.20] backdrop-blur-[10px] select-none justify-center  content-center grid-cols-header-cols-2 md:grid-cols-header-cols-3 max-md:px-[2.5vw]`}
    >
      <a
        className={`justify-self-start self-center -border-2  sxs:w-full sm:w-3/5  md:w-[80%] items-start flex justify-center`}
        href="/"
      >
        <img className="w-full object-contain" src={Logo} alt="Logo Geocoder" />
      </a>

      <NavBar className="justify-self-center sxs:hidden md:flex lg:flex md:w-[65%] -border-2 flex items-center justify-between md:text-[0.8rem] lg:text-[1.1rem]" />

      <div
        className={`-border-2 self-center justify-self-end w-[68%] flex items-center sxs:justify-end md:justify-between max-md:h-[70%]`}
      >
        {/* <button className="py-1 px-3 rounded-full bg-[#3951C2] text-white">Descargar CV</button> */}

        <div className="overflow-hidden sxs:hidden md:flex bg-gray-300 py-[0.3vh] rounded-[0.8vw] px-1  items-center justify-center">
          <LanguageSelect
            id="language1"
            className="-border-2 outline-none px-2 text-center bg-transparent cursor-pointer appearance-none shadow-none md:text-[0.8rem] lg:text-[1rem] xl:text-xl"
          />
        </div>

        <ThemeSwitcher
          id="theme1"
          className="sxs:hidden md:block w-[4vw] text-[1.1vw] aspect-[4/1.1] bg-gray-300 rounded-full relative cursor-pointer"
        />

        <button
          className={`aspect-square z-[102] border-2flex flex-col items-center justify-center  sxs:flex md:hidden sxs:w-1/3 sm:w-1/5 md:w-0 gap-[23%]`}
          onClick={handdleOpenedMenu}
        >
          <div
            className={`bg-black w-full h-[12%] origin-left rounded-md transition-all duration-100 ${
              openedMenu! && "rotate-45 bg-white"
            }`}
          ></div>
          <div
            className={`bg-black w-full h-[12%] origin-left rounded-md transition-all duration-100 ${
              openedMenu! && "opacity-0 bg-white"
            }`}
          ></div>
          <div
            className={`bg-black w-full h-[12%] origin-left rounded-md transition-all duration-100 ${
              openedMenu! && "-rotate-45 bg-white"
            }`}
          ></div>
        </button>
      </div>

      <div
        className={`flex flex-col items-center justify-start transition-all duration-200 -border-2 bg-black text-white absolute top-0 left-0 w-[100%] h-[100dvh]  ${
          openedMenu
            ? "animate-in fade-in-0 duration-50 ease-linear"
            : "opacity-0 z-[-2] hidden"
        }`}
      >
        <NavBar
          className={`scrollbar-oculto flex flex-col items-center portrait:text-3xl landscape:text-2xl -border-2 justify-between text-white max-w-full px-6 h-[60%] mt-[15vh] max-h-[60%]`}
        />
        <div className=" scrollbar-oculto flex items-center justify-around w-full portrait:h-[15%] landscape:h-[25%] border-t-[1px] border-[#ffffff50] portrait:mt-[15%] landscape:mt-[5%] overflow-hidden">
          <div className=" bg-white py-[0.15rem] rounded-xl text-black">
            <LanguageSelect
              id="language1"
              className="outline-none bg-transparent cursor-pointer appearance-none shadow-none /border-2 px-4  sxs:text-[1.2rem] md:text-[1.3rem] xl:text-[1.4rem]"
            />
          </div>

          <ThemeSwitcher
            id="theme2"
            className="w-[4.5rem] aspect-[4/1.1] text-[1.6rem] bg-gray-600 rounded-lg relative cursor-pointer"
            ballColor="white"
            iconColor="black"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
