import GithubLogo from "../../../public/images/svg/Logo Github Blanco.svg";
import { TechIcon } from "../../assets/TechIconsData/TechIconsData";

export interface ProyectProps {
  proyectName: string;
  description: string | string[];
  nota?: string;
  deployLink?: string;
  githubRepoLink: string;
  githubRepoLink2?: string;
  proyectImage: string;
  techIcons: TechIcon[];
  altProyectImage: string;
}

const Proyect = ({
  proyectData: {
    proyectName,
    proyectImage,
    description,
    altProyectImage,
    techIcons,
    githubRepoLink,
    githubRepoLink2,
    deployLink,
    nota,
  },
}: {
  proyectData: ProyectProps;
}) => {
  return (
    <>
      <div className="proyect-container min-w-full h-full flex justify-center">
        <div className="with-note proyect overflow-hidden semi-transparent-border-black -border-2 h-full sxs:w-[90%] md:w-[86%] lg:w-[75%] xl:w-[70%] rounded-[1rem] px-[1.5%] py-[1.5%] gap-3">
          <div className="header-proyect grid col-[1/-1]">
            <div className="-border-2 flex items-center justify-end">
              <span className="opacity-[0.85] rounded-full relative bg-black h-[0.15rem] lg:h-[0.2rem] w-[75%] md:w-[60%] after:content-[''] after:h-[350%] after:rounded-[50%] after:-translate-y-[50%] after:bg-black after:aspect-square after:absolute after:top-[50%] "></span>
            </div>
            <h3 className="text-xl text-[1.35rem] leading-8 lg:text-2xl -border-2 flex items-center justify-center font-medium text-center">
              {proyectName}
            </h3>
            <div className="-border-2 flex items-center">
              <span className="opacity-[0.85] rounded-full relative bg-black h-[0.15rem] lg:h-[0.2rem]  w-[75%] md:w-[60%] after:content-[''] after:h-[350%] after:rounded-[50%] after:-translate-y-[50%] after:bg-black after:aspect-square after:absolute after:top-1/2 after:right-0"></span>
            </div>
          </div>
          <figure className=" flex justify-center items-center md:pr-3">
            <img
              className="semi-transparent-border-black opacity-95 flex bg-center aspect-[2.25/1] h-full rounded-[0.4rem]"
              src={proyectImage}
              alt={altProyectImage}
            />
          </figure>
          <div className="scrollbar-stilizado description-container  scrollbar-stilizado-semi-black overflow-x-hidden overflow-y-auto flex items-center justify-center">
            <p className="pr-[0.5rem] h-[95%] -pl-3 text-[0.7rem]">
              {Array.isArray(description)
                ? description.map((desc) => (
                    <>
                      {desc} <br />
                      <br />
                    </>
                  ))
                : description}
            </p>
          </div>
          <div className="tech-icons-container px-[15%] gap-0 -border-2 md:pr-[calc(0.75rem+15%)]">
            {techIcons.map((techIcon, index) => (
              <img
                key={index}
                className="aspect-auto h-9 bg-center mx-3"
                src={techIcon.urlImg}
                title={techIcon.name}
              />
            ))}
          </div>

          <div className="note-buttons-container flex items-center flex-col justify-center gap-[10%] -border-2">
            {nota && (
              <aside className="note-container scrollbar-stilizado scrollbar-stilizado-dark-red text-[#7A0217] text-[0.6rem] pr-[0.5rem] font-semibold max-h-[40%] overflow-auto">
                <span className="underline">Nota</span>: {nota}
              </aside>
            )}
            <div className=" buttons-container flex justify-evenly items-center w-full flex-wrap gap-y-2">
              {deployLink && (
                <a href={deployLink}>
                  <button className="flex gap-[0.4rem] text-[#35E551] bg-black text-[0.80rem] px-[0.62rem] py-1 rounded-[0.3rem] items-center">
                    Desplegado
                    <span className="bg-[#35E551] aspect-square h-[0.65rem] rounded-[50%]"></span>
                  </button>
                </a>
              )}
              <a href={githubRepoLink}>
                <button className="flex gap-[0.4rem] text-white bg-black text-[0.80rem] px-[0.62rem] py-1 rounded-[0.3rem] items-center">
                  Repositorio
                  <img className="h-[1rem] aspect-auto" src={GithubLogo} />
                </button>
              </a>

              {githubRepoLink2 && (
                <a href={githubRepoLink2}>
                  <button className="flex gap-[0.4rem] text-white bg-black text-[0.80rem] px-[0.62rem] py-1 rounded-[0.3rem] items-center">
                    Repositorio 2
                    <img className="h-[1rem] aspect-auto" src={GithubLogo} />
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`      

        .proyect{
          backdrop-filter: blur(20px);
          background-color: #ffffff44; 
          display: grid;
          grid-template-columns: minmax(10rem, 1.5fr) 1fr;
          grid-template-rows: 1fr minmax(0,4fr) minmax(0,2fr);
        }
      
        .proyect .tech-icons-container{
          display: flex; 
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
        }

        .proyect .header-proyect{
          grid-template-columns: auto max-content auto;
          grid-template-rows: 1fr;
          column-gap: 3%; 
        }        

        @media screen and (max-width:768px){

          .proyect{
            grid-template-columns: 1fr;
            grid-template-rows: max-content 3fr max-content minmax(0,4fr) max-content;
            row-gap: 2%; 
            padding: 5% 3%;

          }          
          
          .tech-icons-container{
            grid-row: 3/4;
            padding: 3% 5% 2% 5%;
            row-gap: 0.7rem;
          }

          .description-container{
            grid-row: 4/5;
          }

          .note-buttons-container{
            display: contents;
            padding: 1rem 0;
          }


          ${
            nota
              ? `
          
              .with-note{
                grid-template-rows:1.2fr 3fr max-content minmax(0, 2.5fr) 1fr max-content;                
              }

              .note-container{
                grid-row: 5/6;
                max-height: 100%
              }
              
              

          `
              : ""
          }

        }

      `}</style>
    </>
  );
};

export default Proyect;
