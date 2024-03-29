import Proyect, { ProyectProps } from "../Proyect/Proyect";
import { Ref, RefObject, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { BackgroundColourBalls } from "../BackgroundBalls/BackgroundBalls";

const ProyectsSection = ({ proyects }: { proyects: ProyectProps[] }) => {
  const homeSectionHeight = useSelector(
    (state: RootState) => state.homeSectionHeight
  );

  const ref = useRef<HTMLElement>();

  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["50%", `-${(proyects.length - 1) * 100}%`]
  );

  return (
    <>
      <motion.section
        id="proyects-section-container"
        animate={{ y: `0%` }}
        className="w-full max-w-screen-xl -border-2"
        ref={ref as Ref<HTMLDivElement> | undefined}
      >
        <div
          id="proyects-section"
          className={`-border-2 w-full flex-auto relative flex flex-wrap flex-col items-center justify-evenly`}
        >
          <BackgroundColourBalls className="absolute" />
          <h1 className="relative max-sm:text-3xl text-4xl after:content-[''] after:h-[0.37rem] after:w-[40%] after:bg-black after:absolute after:bottom-[-35%] after:rounded-full after:-translate-x-1/2 after:left-1/2">
            Proyectos
          </h1>
          <div className="-border-2 w-full max-md:h-[80%] h-[72.5%] overflow-hidden flex">
            <motion.div
              style={{ x: homeSectionHeight >= (window.innerHeight*0.6) ? x : 0 }}
              className="scrollbar-stilizado scrollbar-stilizado-semi-black cont-proys flex h-full min-w-full"
            >
              {proyects.map((proyectData, index) => {
                return <Proyect proyectData={proyectData} key={index} />;
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <style>
        {`

          #proyects-section-container{
            margin-top: calc(${homeSectionHeight * 0.86}px);
            ${
              homeSectionHeight < (window.innerHeight*0.6)
                ? `
            height: ${homeSectionHeight}px;                        
            `
                : `height: ${proyects.length * homeSectionHeight}px;`
            }
          }

          #proyects-section{            
            height: ${homeSectionHeight}px;
            overflow:visible;
            position: sticky;
            top:0;
          }          

          .cont-proys{
            scroll-snap-type: x  mandatory;
            ${
              homeSectionHeight < (window.innerHeight*0.6) ? "overflow-x:scroll; padding:0 2% 1rem 2%;" : ""
            }
          }

          .cont-proys>div{
            scroll-snap-align: start;
          }

        `}
      </style>
    </>
  );
};

export default ProyectsSection;
