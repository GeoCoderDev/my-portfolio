const Proyect = () => {
  return (
    <>
      <div className="min-w-full h-full flex justify-center">
        <div className="proyect semi-transparent-border-black -border-2 h-full w-[70%] rounded-[1rem]"></div>
      </div>

      <style>{`
      
        .proyect{
          backdrop-filter: blur(20px);
          background-color: #ffffff33; 
        }
      
      `}</style>
    </>
  );
};

export default Proyect;
