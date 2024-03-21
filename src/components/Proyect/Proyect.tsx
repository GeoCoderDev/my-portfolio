export interface ProyectProps {
  proyectName: string;
  description: string;
  nota?: string;
}

const Proyect = ({
  proyectData: { proyectName },
}: {
  proyectData: ProyectProps;
}) => {
  return (
    <>
      <div className="min-w-full h-full flex justify-center">
        <div
          id={`${proyectName}-container`}
          className="proyect semi-transparent-border-black -border-2 h-full w-[84%] lg:w-[70%] rounded-[1rem] -grid"
        >
          <h3 className="border-2 flex items-center justify-center">
            {proyectName}
          </h3>
        </div>
      </div>

      <style>{`      

        // #${proyectName}-container{

        // }

      
      `}</style>
    </>
  );
};

export default Proyect;
