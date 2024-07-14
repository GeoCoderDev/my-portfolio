const ErrorMessage = ({
  className = "",
  message,
}: {
  className?: string;
  message: string;
}) => {
  return (
    <div
      className={`text-[1rem] font-semibold text-[rgb(255,25,25)] max-w-[min(80vw,15rem)] ${className}`}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
