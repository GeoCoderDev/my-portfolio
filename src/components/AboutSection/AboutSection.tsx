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
      className="w-[100%] h-[100vh] relative top-[-14.6vh] z-[6] py-[14vh] flex xs:flex-col sm:flex-row items-center justify-evenly"
    >
      <Fondo />
      <div className="z-[7] w-[40%] h-[70%] flex items-center justify-center -border-2 relative">
        <div className="absolute border-[4px] rounded-[50%] w-[60%] aspect-square"></div>
      </div>

      <div className="text-white z-[7]  font-thin xs:w-[85%] sm:w-[45%] items-center -border-2 xs:flex sm:block flex-col">
        <h1 className="xs:text-center sm:text-start my-2 lg:my-5 xs:text-3xl sm:text-4xl">
          Sobre Mi
        </h1>
        <p className="xs:text-center sm:text-start my-2 lg:my-5 xs:text-[0.9rem] sm:text-[1rem] lg:text-[1.15rem] leading-7 text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur
          doloremque eos ut, repudiandae inventore, vel ipsa tempore est sit
          voluptatem delectus! Nemo voluptates ducimus sapiente aspernatur natus
          iure doloremque!
        </p>

        <p className="xs:text-center sm:text-start my-2 lg:my-5 xs:text-[0.9rem] sm:text-[1rem] lg:text-[1.15rem] leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          consectetur aspernatur animi ullam, maxime veritatis asperiores cum
          explicabo modi provident corporis aliquid quidem mollitia cumque velit
          quisquam eius commodi! Tenetur!
        </p>
        <a href="/pdfs/MI CV.pdf" download={true}>
          <button className="text-[1.2rem] xs:text-center sm:text-start my-2 lg:my-5 bg-white text-black px-3 rounded-md flex items-center transition-all duration-75 py-1">
            Descargar CV
            <img
              className="h-1/2 aspect-auto ml-2 transition-all duration-75"
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
