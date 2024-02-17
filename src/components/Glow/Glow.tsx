interface GlowProps {
  className: string;
  centralColor?: string;
}

const Glow = ({
  className,
  centralColor = "rgba(185, 185, 185, 0.7)",
}: GlowProps) => {
  return (
    <div
      className={`${className} absolute aspect-square`}
      style={{
        backgroundImage: `radial-gradient(50% 50% at 50% 50%, ${centralColor} 0%, rgba(217, 217, 217, 0) 100%)`,
      }}
    ></div>
  );
};

export default Glow;
