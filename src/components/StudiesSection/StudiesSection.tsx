import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Study, { StudyProps } from "../Study/Study";

const StudiesSection = ({ studies }: { studies: StudyProps[] }) => {
  const homeSectionHeight = useSelector(
    (state: RootState) => state.homeSectionHeight
  );

  return (
    <>
      <section
        id="studies-section"
        className="w-full -border-2 mt-[3rem] mb-[2.5rem] flex items-center justify-center flex-col gap-y-[2.5rem] flex-wrap"
      >
        <h1 className="relative max-sm:text-3xl text-4xl after:content-[''] after:h-[0.37rem] after:w-[50%] after:bg-black after:absolute after:bottom-[-35%] after:rounded-full after:-translate-x-1/2 after:left-1/2">
          Estudios
        </h1>

        <div className="sxs:w-[92%] md:w-[90%] lg:w-[60%] -border-2 h-[75%] flex flex-col items-center justify-start overflow-hidden relative ">
          <div className="z-[10] scrollbar-stilizado pr-[0.5rem] scrollbar-stilizado-black flex flex-col pt-8 pb-4 w-[90%] overflow-x-visible -overflow-y-auto snap-y border-l-4 border-black after:z-[11] pl-8 gap-y-[2rem]">
            {studies.map((study, index) => (
              <Study key={index} study={study} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
      
        #studies-section{
            -height: ${homeSectionHeight}px;
            -background-image: url('public/images/svg/StudiesSectionFondo.svg');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat repeat;
            background-atachment: fixed;
        }
      
      `}</style>
    </>
  );
};

export default StudiesSection;
