const SuccessMessage = ({
  className = "",
  message,
}: {
  className?: string;
  message: string;
}) => {
  return (
    <div
      className={`text-[1rem] text-center font-semibold text-[rgb(23,245,23)] max-w-[min(80vw,15rem)] ${className}`}
    >
      {message}
    </div>
  );
};

export default SuccessMessage;
