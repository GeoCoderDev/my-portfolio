import Proyect from "../Proyect/Proyect";

const ProyectsSection = () => {
  return (
    <section
      className={`w-full h-[100svh] border-2 xs:mt-[92svh] sm:mt-[85.4svh] flex items-center flex-col justify-evenly`}
    >
        <h1>Proyectos</h1>
        <div>
        <Proyect />
        </div>


    </section>
  );
};

export default ProyectsSection;
