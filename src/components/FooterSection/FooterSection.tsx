import logoConTexto from "../../../public/images/svg/logoConTexto.svg";
import githubLogoBlanco from "../../../public/images/svg/Logo Github Blanco.svg";
import linkedInLogoBlanco from "../../../public/images/svg/Logo LinkedIn blanco.svg";

const FooterSection = () => {
  return (
    <>
      <footer className="min-h-[10vh] relative w-full flex flex-wrap items-center justify-center max-md:gap-x-[3rem] gap-x-[4rem] gap-y-6 bg-black py-6 px-[10%] after:absolute after:top-0 after:translate-y-[-100%] after:w-full after:h-[0.5vh] after:bg-black">
        <img
          className="-border-2 max-md:w-[16rem] w-[19rem]"
          src={logoConTexto}
          alt="Logo geocoder con texto"
        />

        <a href="https://github.com/GeoCoderDev">
          <img
            src={githubLogoBlanco}
            className="-border-2 max-md:w-[2.6rem] w-[3rem]"
            alt="Logo de Github Blanco"
          />
        </a>

        <a href="https://www.linkedin.com/in/juan-c-a8309a133/">
          <img
            src={linkedInLogoBlanco}
            className="-border-2 max-md:w-[2.6rem] w-[3rem]"
            alt="Logo de LinkedIn Blanco"
          />
        </a>
      </footer>

      <style></style>
    </>
  );
};

export default FooterSection;
