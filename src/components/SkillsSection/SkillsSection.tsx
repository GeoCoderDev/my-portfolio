import { useSelector } from "react-redux";
import { RootState } from "../../store";

const SkillsBackground = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      preserveAspectRatio="none"
      width="1728"
      height="1103"
      viewBox="0 0 1728 1103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1263.32 101.389C1218.98 112.498 1175.39 128.262 1131.78 144.028C1092.92 158.082 1054.05 172.137 1014.63 182.9C895.515 215.458 771.462 217.426 652.527 183.66C588.698 165.583 523.568 133.141 458.805 100.881L458.802 100.879C406.295 74.724 354.03 48.6893 302.895 30.5283C201.613 -5.4568 97.0423 -14.582 -1 30.3798V210.303V265.664L-0.999992 981.897C146.722 1044.31 305.958 1048.54 461.337 1016.7C505.548 1007.53 549.017 994.532 592.495 981.527C631.247 969.934 670.006 958.34 709.304 949.461C828.082 922.605 951.777 920.982 1070.37 948.835C1134.01 963.746 1198.96 990.508 1263.53 1017.12C1315.89 1038.69 1368 1060.17 1418.99 1075.15C1519.98 1104.84 1630.24 1117.06 1728 1079.97V158.034C1579.85 82.3754 1419.15 62.7856 1263.32 101.389Z"
        fill="url(#paint0_linear_75_63)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_63"
          x1="863.5"
          y1="0"
          x2="863.5"
          y2="1103"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6660BF" />
          <stop offset="1" stop-color="#3C55CB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const SkillsSection = () => {
  const homeSectionHeight = useSelector(
    (state: RootState) => state.homeSectionHeight
  );

  const backgroundProyectsHeight = useSelector(
    (state: RootState) => state.backgroundProyectHeight
  );

  return (
    <>
      <section id="skills-section" className={`w-full -border-2 relative`}>
        <SkillsBackground />
      </section>

      <style>{`
    
      #skills-section{
        height: ${homeSectionHeight}px;  

        margin-top: ${
          backgroundProyectsHeight > homeSectionHeight
            ? (backgroundProyectsHeight - homeSectionHeight) * 1.5
            : homeSectionHeight * 0.15
        }px;
      }

      @media screen and (min-width: 768px){
        #skills-section{
          margin-top: ${
            backgroundProyectsHeight > homeSectionHeight
              ? (backgroundProyectsHeight - homeSectionHeight) * 1.5
              : homeSectionHeight * 0.20
          }px;
        }
      }
    
    `}</style>
    </>
  );
};

export default SkillsSection;
