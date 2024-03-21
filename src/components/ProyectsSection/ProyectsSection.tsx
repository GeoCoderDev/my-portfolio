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
    ["0%", `-${(proyects.length - 1) * 100}%`]
  );

  return (
    <>
      <motion.section
        animate={{ y: `0%` }}
        style={{ height: `${proyects.length * homeSectionHeight}px` }}
        className=""
        ref={ref as Ref<HTMLDivElement> | undefined}
      >
        <div
          id="proyects-section"
          className={`-border-2 w-full relative flex flex-wrap flex-col items-center justify-evenly`}
        >
          <BackgroundColourBalls className="absolute" />
          <h1 className="relative max-sm:text-3xl text-4xl after:content-[''] after:h-[0.37rem] after:w-[40%] after:bg-black after:absolute after:bottom-[-35%] after:rounded-full after:-translate-x-1/2 after:left-1/2">
            Proyectos
          </h1>
          <div className="-border-2 w-full h-[70%] overflow-hidden flex">
            <motion.div style={{ x }} className="flex h-full min-w-full">

              {proyects.map((proyectData, index) => {
                return <Proyect proyectData={proyectData} key={index} />;
              })}

            </motion.div>
          </div>
        </div>
      </motion.section>

      <style>
        {`

          #proyects-section{
            margin-top: calc(${homeSectionHeight * 0.86}px);
            height: ${homeSectionHeight}px;
            overflow:visible;
            position: sticky;
            top:0;
          }          

        `}
      </style>
    </>
  );
};

export default ProyectsSection;
