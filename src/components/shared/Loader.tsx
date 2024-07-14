const Loader = ({ className = "" }: { className?: string }) => {
  return (
    <div
      style={{ animation: "animation-loader 0.5s infinite linear" }}
      className={`loader w-[20px] h-[10px] top-1/2 bg-white relative ${className}`}
    ></div>
  );
};

export default Loader;
